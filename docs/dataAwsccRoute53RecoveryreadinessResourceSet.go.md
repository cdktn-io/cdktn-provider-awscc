# `dataAwsccRoute53RecoveryreadinessResourceSet` Submodule <a name="`dataAwsccRoute53RecoveryreadinessResourceSet` Submodule" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DataAwsccRoute53RecoveryreadinessResourceSet <a name="DataAwsccRoute53RecoveryreadinessResourceSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53recoveryreadiness_resource_set awscc_route53recoveryreadiness_resource_set}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.NewDataAwsccRoute53RecoveryreadinessResourceSet(scope Construct, id *string, config DataAwsccRoute53RecoveryreadinessResourceSetConfig) DataAwsccRoute53RecoveryreadinessResourceSet
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig">DataAwsccRoute53RecoveryreadinessResourceSetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig">DataAwsccRoute53RecoveryreadinessResourceSetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.toHclTerraform">ToHclTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.isTerraformDataSource">IsTerraformDataSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DataAwsccRoute53RecoveryreadinessResourceSet resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSet_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSet_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformDataSource` <a name="IsTerraformDataSource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.isTerraformDataSource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSet_IsTerraformDataSource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.isTerraformDataSource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSet_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DataAwsccRoute53RecoveryreadinessResourceSet resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DataAwsccRoute53RecoveryreadinessResourceSet to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DataAwsccRoute53RecoveryreadinessResourceSet that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53recoveryreadiness_resource_set#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DataAwsccRoute53RecoveryreadinessResourceSet to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList">DataAwsccRoute53RecoveryreadinessResourceSetResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.resourceSetArn">ResourceSetArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.resourceSetName">ResourceSetName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.resourceSetType">ResourceSetType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList">DataAwsccRoute53RecoveryreadinessResourceSetTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.idInput">IdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.id">Id</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.resources"></a>

```go
func Resources() DataAwsccRoute53RecoveryreadinessResourceSetResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList">DataAwsccRoute53RecoveryreadinessResourceSetResourcesList</a>

---

##### `ResourceSetArn`<sup>Required</sup> <a name="ResourceSetArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.resourceSetArn"></a>

```go
func ResourceSetArn() *string
```

- *Type:* *string

---

##### `ResourceSetName`<sup>Required</sup> <a name="ResourceSetName" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.resourceSetName"></a>

```go
func ResourceSetName() *string
```

- *Type:* *string

---

##### `ResourceSetType`<sup>Required</sup> <a name="ResourceSetType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.resourceSetType"></a>

```go
func ResourceSetType() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.tags"></a>

```go
func Tags() DataAwsccRoute53RecoveryreadinessResourceSetTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList">DataAwsccRoute53RecoveryreadinessResourceSetTagsList</a>

---

##### `IdInput`<sup>Optional</sup> <a name="IdInput" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.idInput"></a>

```go
func IdInput() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSet.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DataAwsccRoute53RecoveryreadinessResourceSetConfig <a name="DataAwsccRoute53RecoveryreadinessResourceSetConfig" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

&dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSetConfig {
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
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.id">Id</a></code> | <code>*string</code> | Uniquely identifies the resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetConfig.property.id"></a>

```go
Id *string
```

- *Type:* *string

Uniquely identifies the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/data-sources/route53recoveryreadiness_resource_set#id DataAwsccRoute53RecoveryreadinessResourceSet#id}

Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.

---

### DataAwsccRoute53RecoveryreadinessResourceSetResources <a name="DataAwsccRoute53RecoveryreadinessResourceSetResources" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

&dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSetResources {

}
```


### DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

&dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource {

}
```


### DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

&dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource {

}
```


### DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

&dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource {

}
```


### DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

&dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource {

}
```


### DataAwsccRoute53RecoveryreadinessResourceSetTags <a name="DataAwsccRoute53RecoveryreadinessResourceSetTags" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

&dataawsccroute53recoveryreadinessresourceset.DataAwsccRoute53RecoveryreadinessResourceSetTags {

}
```


## Classes <a name="Classes" id="Classes"></a>

### DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.NewDataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArn">HostedZoneArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetId">RecordSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordType">RecordType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResource">TargetResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `HostedZoneArn`<sup>Required</sup> <a name="HostedZoneArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.hostedZoneArn"></a>

```go
func HostedZoneArn() *string
```

- *Type:* *string

---

##### `RecordSetId`<sup>Required</sup> <a name="RecordSetId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordSetId"></a>

```go
func RecordSetId() *string
```

- *Type:* *string

---

##### `RecordType`<sup>Required</sup> <a name="RecordType" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.recordType"></a>

```go
func RecordType() *string
```

- *Type:* *string

---

##### `TargetResource`<sup>Required</sup> <a name="TargetResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.targetResource"></a>

```go
func TargetResource() DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResource</a>

---


### DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.NewDataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResource</a>

---


### DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.NewDataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResource">NlbResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53Resource">R53Resource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NlbResource`<sup>Required</sup> <a name="NlbResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.nlbResource"></a>

```go
func NlbResource() DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceNlbResourceOutputReference</a>

---

##### `R53Resource`<sup>Required</sup> <a name="R53Resource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.r53Resource"></a>

```go
func R53Resource() DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResource</a>

---


### DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.NewDataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetId">RecordSetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `RecordSetId`<sup>Required</sup> <a name="RecordSetId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.recordSetId"></a>

```go
func RecordSetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53ResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceTargetResourceR53Resource</a>

---


### DataAwsccRoute53RecoveryreadinessResourceSetResourcesList <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesList" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.NewDataAwsccRoute53RecoveryreadinessResourceSetResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53RecoveryreadinessResourceSetResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference <a name="DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.NewDataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.componentId">ComponentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResource">DnsTargetResource</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopes">ReadinessScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResources">DataAwsccRoute53RecoveryreadinessResourceSetResources</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ComponentId`<sup>Required</sup> <a name="ComponentId" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.componentId"></a>

```go
func ComponentId() *string
```

- *Type:* *string

---

##### `DnsTargetResource`<sup>Required</sup> <a name="DnsTargetResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.dnsTargetResource"></a>

```go
func DnsTargetResource() DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference">DataAwsccRoute53RecoveryreadinessResourceSetResourcesDnsTargetResourceOutputReference</a>

---

##### `ReadinessScopes`<sup>Required</sup> <a name="ReadinessScopes" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.readinessScopes"></a>

```go
func ReadinessScopes() *[]*string
```

- *Type:* *[]*string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoveryreadinessResourceSetResources
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetResources">DataAwsccRoute53RecoveryreadinessResourceSetResources</a>

---


### DataAwsccRoute53RecoveryreadinessResourceSetTagsList <a name="DataAwsccRoute53RecoveryreadinessResourceSetTagsList" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.NewDataAwsccRoute53RecoveryreadinessResourceSetTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DataAwsccRoute53RecoveryreadinessResourceSetTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.get"></a>

```go
func Get(index *f64) DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference <a name="DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/dataawsccroute53recoveryreadinessresourceset"

dataawsccroute53recoveryreadinessresourceset.NewDataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTags">DataAwsccRoute53RecoveryreadinessResourceSetTags</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() DataAwsccRoute53RecoveryreadinessResourceSetTags
```

- *Type:* <a href="#@cdktn/provider-awscc.dataAwsccRoute53RecoveryreadinessResourceSet.DataAwsccRoute53RecoveryreadinessResourceSetTags">DataAwsccRoute53RecoveryreadinessResourceSetTags</a>

---



