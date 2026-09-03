# `dataAwsccSecurityagentTargetDomain` Submodule <a name="`dataAwsccSecurityagentTargetDomain` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentTargetDomain <a name="DataAwsccSecurityagentTargetDomain" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/securityagent_target_domain awscc_securityagent_target_domain}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.NewDataAwsccSecurityagentTargetDomain(scope Construct, id *string, config DataAwsccSecurityagentTargetDomainConfig) DataAwsccSecurityagentTargetDomain
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig">DataAwsccSecurityagentTargetDomainConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig">DataAwsccSecurityagentTargetDomainConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentTargetDomain resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.DataAwsccSecurityagentTargetDomain_IsConstruct(x interface{}) *bool
```

Checks if `x` is a construct.

Use this method instead of `instanceof` to properly detect `Construct`
instances, even when the construct library is symlinked.

Explanation: in JavaScript, multiple copies of the `constructs` library on
disk are seen as independent, completely different libraries. As a
consequence, the class `Construct` in each copy of the `constructs` library
is seen as a different class, and an instance of one class will not test as
`instanceof` the other class. `npm install` will not create installations
like this, but users may manually symlink construct libraries together or
use a monorepo tool: in those cases, multiple copies of the `constructs`
library can be accidentally installed, and `instanceof` will behave
unpredictably. It is safest to avoid using `instanceof`, and using
this type-testing method instead.

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.DataAwsccSecurityagentTargetDomain_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.DataAwsccSecurityagentTargetDomain_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.DataAwsccSecurityagentTargetDomain_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSecurityagentTargetDomain resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSecurityagentTargetDomain to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSecurityagentTargetDomain that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/securityagent_target_domain#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentTargetDomain to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList">DataAwsccSecurityagentTargetDomainTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.targetDomainId">TargetDomainId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.targetDomainName">TargetDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationDetails">VerificationDetails</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationMethod">VerificationMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationStatus">VerificationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationStatusReason">VerificationStatusReason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verifiedAt">VerifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.tags"></a>

```go
func Tags() DataAwsccSecurityagentTargetDomainTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList">DataAwsccSecurityagentTargetDomainTagsList</a>

---

##### `TargetDomainId`<sup>Required</sup> <a name="TargetDomainId" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.targetDomainId"></a>

```go
func TargetDomainId() *string
```

- *Type:* *string

---

##### `TargetDomainName`<sup>Required</sup> <a name="TargetDomainName" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.targetDomainName"></a>

```go
func TargetDomainName() *string
```

- *Type:* *string

---

##### `VerificationDetails`<sup>Required</sup> <a name="VerificationDetails" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationDetails"></a>

```go
func VerificationDetails() DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference</a>

---

##### `VerificationMethod`<sup>Required</sup> <a name="VerificationMethod" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationMethod"></a>

```go
func VerificationMethod() *string
```

- *Type:* *string

---

##### `VerificationStatus`<sup>Required</sup> <a name="VerificationStatus" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationStatus"></a>

```go
func VerificationStatus() *string
```

- *Type:* *string

---

##### `VerificationStatusReason`<sup>Required</sup> <a name="VerificationStatusReason" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verificationStatusReason"></a>

```go
func VerificationStatusReason() *string
```

- *Type:* *string

---

##### `VerifiedAt`<sup>Required</sup> <a name="VerifiedAt" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.verifiedAt"></a>

```go
func VerifiedAt() *string
```

- *Type:* *string

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomain.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentTargetDomainConfig <a name="DataAwsccSecurityagentTargetDomainConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

&dataawsccsecurityagenttargetdomain.DataAwsccSecurityagentTargetDomainConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Id: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/data-sources/securityagent_target_domain#id DataAwsccSecurityagentTargetDomain#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentTargetDomainTags <a name="DataAwsccSecurityagentTargetDomainTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

&dataawsccsecurityagenttargetdomain.DataAwsccSecurityagentTargetDomainTags {

}
```


### DataAwsccSecurityagentTargetDomainVerificationDetails <a name="DataAwsccSecurityagentTargetDomainVerificationDetails" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

&dataawsccsecurityagenttargetdomain.DataAwsccSecurityagentTargetDomainVerificationDetails {

}
```


### DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

&dataawsccsecurityagenttargetdomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt {

}
```


### DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

&dataawsccsecurityagenttargetdomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentTargetDomainTagsList <a name="DataAwsccSecurityagentTargetDomainTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.NewDataAwsccSecurityagentTargetDomainTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSecurityagentTargetDomainTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSecurityagentTargetDomainTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSecurityagentTargetDomainTagsOutputReference <a name="DataAwsccSecurityagentTargetDomainTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.NewDataAwsccSecurityagentTargetDomainTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSecurityagentTargetDomainTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTags">DataAwsccSecurityagentTargetDomainTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentTargetDomainTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainTags">DataAwsccSecurityagentTargetDomainTags</a>

---


### DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.NewDataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName">DnsRecordName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType">DnsRecordType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt">DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsRecordName`<sup>Required</sup> <a name="DnsRecordName" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordName"></a>

```go
func DnsRecordName() *string
```

- *Type:* *string

---

##### `DnsRecordType`<sup>Required</sup> <a name="DnsRecordType" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.dnsRecordType"></a>

```go
func DnsRecordType() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt">DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxt</a>

---


### DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.NewDataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath">RoutePath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token">Token</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute">DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RoutePath`<sup>Required</sup> <a name="RoutePath" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.routePath"></a>

```go
func RoutePath() *string
```

- *Type:* *string

---

##### `Token`<sup>Required</sup> <a name="Token" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.token"></a>

```go
func Token() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute">DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRoute</a>

---


### DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference <a name="DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagenttargetdomain"

dataawsccsecurityagenttargetdomain.NewDataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt">DnsTxt</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute">HttpRoute</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.method">Method</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetails">DataAwsccSecurityagentTargetDomainVerificationDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsTxt`<sup>Required</sup> <a name="DnsTxt" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.dnsTxt"></a>

```go
func DnsTxt() DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsDnsTxtOutputReference</a>

---

##### `HttpRoute`<sup>Required</sup> <a name="HttpRoute" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.httpRoute"></a>

```go
func HttpRoute() DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference">DataAwsccSecurityagentTargetDomainVerificationDetailsHttpRouteOutputReference</a>

---

##### `Method`<sup>Required</sup> <a name="Method" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.method"></a>

```go
func Method() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentTargetDomainVerificationDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentTargetDomain.DataAwsccSecurityagentTargetDomainVerificationDetails">DataAwsccSecurityagentTargetDomainVerificationDetails</a>

---



