# `dataAwsccSecurityagentSecurityRequirementPack` Submodule <a name="`dataAwsccSecurityagentSecurityRequirementPack` Submodule" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccSecurityagentSecurityRequirementPack <a name="DataAwsccSecurityagentSecurityRequirementPack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_security_requirement_pack awscc_securityagent_security_requirement_pack}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

dataawsccsecurityagentsecurityrequirementpack.NewDataAwsccSecurityagentSecurityRequirementPack(scope Construct, id *string, config DataAwsccSecurityagentSecurityRequirementPackConfig) DataAwsccSecurityagentSecurityRequirementPack
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig">DataAwsccSecurityagentSecurityRequirementPackConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig">DataAwsccSecurityagentSecurityRequirementPackConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccSecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

dataawsccsecurityagentsecurityrequirementpack.DataAwsccSecurityagentSecurityRequirementPack_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

dataawsccsecurityagentsecurityrequirementpack.DataAwsccSecurityagentSecurityRequirementPack_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

dataawsccsecurityagentsecurityrequirementpack.DataAwsccSecurityagentSecurityRequirementPack_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

dataawsccsecurityagentsecurityrequirementpack.DataAwsccSecurityagentSecurityRequirementPack_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccSecurityagentSecurityRequirementPack resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccSecurityagentSecurityRequirementPack to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccSecurityagentSecurityRequirementPack that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_security_requirement_pack#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccSecurityagentSecurityRequirementPack to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.packId">PackId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.securityRequirements">SecurityRequirements</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList">DataAwsccSecurityagentSecurityRequirementPackTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `PackId`<sup>Required</sup> <a name="PackId" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.packId"></a>

```go
func PackId() *string
```

- *Type:* *string

---

##### `SecurityRequirements`<sup>Required</sup> <a name="SecurityRequirements" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.securityRequirements"></a>

```go
func SecurityRequirements() DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tags"></a>

```go
func Tags() DataAwsccSecurityagentSecurityRequirementPackTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList">DataAwsccSecurityagentSecurityRequirementPackTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPack.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccSecurityagentSecurityRequirementPackConfig <a name="DataAwsccSecurityagentSecurityRequirementPackConfig" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

&dataawsccsecurityagentsecurityrequirementpack.DataAwsccSecurityagentSecurityRequirementPackConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/securityagent_security_requirement_pack#id DataAwsccSecurityagentSecurityRequirementPack#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements <a name="DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

&dataawsccsecurityagentsecurityrequirementpack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements {

}
```


### DataAwsccSecurityagentSecurityRequirementPackTags <a name="DataAwsccSecurityagentSecurityRequirementPackTags" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

&dataawsccsecurityagentsecurityrequirementpack.DataAwsccSecurityagentSecurityRequirementPackTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList <a name="DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

dataawsccsecurityagentsecurityrequirementpack.NewDataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.get"></a>

```go
func Get(index *f64) DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference <a name="DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

dataawsccsecurityagentsecurityrequirementpack.NewDataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain">Domain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation">Evaluation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation">Remediation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Domain`<sup>Required</sup> <a name="Domain" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.domain"></a>

```go
func Domain() *string
```

- *Type:* *string

---

##### `Evaluation`<sup>Required</sup> <a name="Evaluation" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.evaluation"></a>

```go
func Evaluation() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Remediation`<sup>Required</sup> <a name="Remediation" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.remediation"></a>

```go
func Remediation() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirementsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements">DataAwsccSecurityagentSecurityRequirementPackSecurityRequirements</a>

---


### DataAwsccSecurityagentSecurityRequirementPackTagsList <a name="DataAwsccSecurityagentSecurityRequirementPackTagsList" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

dataawsccsecurityagentsecurityrequirementpack.NewDataAwsccSecurityagentSecurityRequirementPackTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccSecurityagentSecurityRequirementPackTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.get"></a>

```go
func Get(index *f64) DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference <a name="DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccsecurityagentsecurityrequirementpack"

dataawsccsecurityagentsecurityrequirementpack.NewDataAwsccSecurityagentSecurityRequirementPackTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags">DataAwsccSecurityagentSecurityRequirementPackTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccSecurityagentSecurityRequirementPackTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccSecurityagentSecurityRequirementPack.DataAwsccSecurityagentSecurityRequirementPackTags">DataAwsccSecurityagentSecurityRequirementPackTags</a>

---



