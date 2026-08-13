# `iotfleetwiseStateTemplate` Submodule <a name="`iotfleetwiseStateTemplate` Submodule" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotfleetwiseStateTemplate <a name="IotfleetwiseStateTemplate" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template awscc_iotfleetwise_state_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisestatetemplate"

iotfleetwisestatetemplate.NewIotfleetwiseStateTemplate(scope Construct, id *string, config IotfleetwiseStateTemplateConfig) IotfleetwiseStateTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig">IotfleetwiseStateTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig">IotfleetwiseStateTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDataExtraDimensions">ResetDataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetMetadataExtraDimensions">ResetMetadataExtraDimensions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDataExtraDimensions` <a name="ResetDataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDataExtraDimensions"></a>

```go
func ResetDataExtraDimensions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetMetadataExtraDimensions` <a name="ResetMetadataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetMetadataExtraDimensions"></a>

```go
func ResetMetadataExtraDimensions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotfleetwiseStateTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisestatetemplate"

iotfleetwisestatetemplate.IotfleetwiseStateTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisestatetemplate"

iotfleetwisestatetemplate.IotfleetwiseStateTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisestatetemplate"

iotfleetwisestatetemplate.IotfleetwiseStateTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisestatetemplate"

iotfleetwisestatetemplate.IotfleetwiseStateTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotfleetwiseStateTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotfleetwiseStateTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotfleetwiseStateTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotfleetwiseStateTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lastModificationTime">LastModificationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateId">StateTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList">IotfleetwiseStateTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensionsInput">DataExtraDimensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensionsInput">MetadataExtraDimensionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArnInput">SignalCatalogArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplatePropertiesInput">StateTemplatePropertiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensions">DataExtraDimensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensions">MetadataExtraDimensions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArn">SignalCatalogArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateProperties">StateTemplateProperties</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastModificationTime`<sup>Required</sup> <a name="LastModificationTime" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.lastModificationTime"></a>

```go
func LastModificationTime() *string
```

- *Type:* *string

---

##### `StateTemplateId`<sup>Required</sup> <a name="StateTemplateId" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateId"></a>

```go
func StateTemplateId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tags"></a>

```go
func Tags() IotfleetwiseStateTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList">IotfleetwiseStateTemplateTagsList</a>

---

##### `DataExtraDimensionsInput`<sup>Optional</sup> <a name="DataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensionsInput"></a>

```go
func DataExtraDimensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `MetadataExtraDimensionsInput`<sup>Optional</sup> <a name="MetadataExtraDimensionsInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensionsInput"></a>

```go
func MetadataExtraDimensionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SignalCatalogArnInput`<sup>Optional</sup> <a name="SignalCatalogArnInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArnInput"></a>

```go
func SignalCatalogArnInput() *string
```

- *Type:* *string

---

##### `StateTemplatePropertiesInput`<sup>Optional</sup> <a name="StateTemplatePropertiesInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplatePropertiesInput"></a>

```go
func StateTemplatePropertiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `DataExtraDimensions`<sup>Required</sup> <a name="DataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.dataExtraDimensions"></a>

```go
func DataExtraDimensions() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `MetadataExtraDimensions`<sup>Required</sup> <a name="MetadataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.metadataExtraDimensions"></a>

```go
func MetadataExtraDimensions() *[]*string
```

- *Type:* *[]*string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SignalCatalogArn`<sup>Required</sup> <a name="SignalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.signalCatalogArn"></a>

```go
func SignalCatalogArn() *string
```

- *Type:* *string

---

##### `StateTemplateProperties`<sup>Required</sup> <a name="StateTemplateProperties" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.stateTemplateProperties"></a>

```go
func StateTemplateProperties() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotfleetwiseStateTemplateConfig <a name="IotfleetwiseStateTemplateConfig" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisestatetemplate"

&iotfleetwisestatetemplate.IotfleetwiseStateTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	SignalCatalogArn: *string,
	StateTemplateProperties: *[]*string,
	DataExtraDimensions: *[]*string,
	Description: *string,
	MetadataExtraDimensions: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.signalCatalogArn">SignalCatalogArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.stateTemplateProperties">StateTemplateProperties</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dataExtraDimensions">DataExtraDimensions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.metadataExtraDimensions">MetadataExtraDimensions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#name IotfleetwiseStateTemplate#name}.

---

##### `SignalCatalogArn`<sup>Required</sup> <a name="SignalCatalogArn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.signalCatalogArn"></a>

```go
SignalCatalogArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#signal_catalog_arn IotfleetwiseStateTemplate#signal_catalog_arn}.

---

##### `StateTemplateProperties`<sup>Required</sup> <a name="StateTemplateProperties" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.stateTemplateProperties"></a>

```go
StateTemplateProperties *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#state_template_properties IotfleetwiseStateTemplate#state_template_properties}.

---

##### `DataExtraDimensions`<sup>Optional</sup> <a name="DataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.dataExtraDimensions"></a>

```go
DataExtraDimensions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#data_extra_dimensions IotfleetwiseStateTemplate#data_extra_dimensions}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#description IotfleetwiseStateTemplate#description}.

---

##### `MetadataExtraDimensions`<sup>Optional</sup> <a name="MetadataExtraDimensions" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.metadataExtraDimensions"></a>

```go
MetadataExtraDimensions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#metadata_extra_dimensions IotfleetwiseStateTemplate#metadata_extra_dimensions}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#tags IotfleetwiseStateTemplate#tags}.

---

### IotfleetwiseStateTemplateTags <a name="IotfleetwiseStateTemplateTags" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisestatetemplate"

&iotfleetwisestatetemplate.IotfleetwiseStateTemplateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#key IotfleetwiseStateTemplate#key}. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#value IotfleetwiseStateTemplate#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#key IotfleetwiseStateTemplate#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotfleetwise_state_template#value IotfleetwiseStateTemplate#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotfleetwiseStateTemplateTagsList <a name="IotfleetwiseStateTemplateTagsList" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisestatetemplate"

iotfleetwisestatetemplate.NewIotfleetwiseStateTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotfleetwiseStateTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get"></a>

```go
func Get(index *f64) IotfleetwiseStateTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotfleetwiseStateTemplateTagsOutputReference <a name="IotfleetwiseStateTemplateTagsOutputReference" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotfleetwisestatetemplate"

iotfleetwisestatetemplate.NewIotfleetwiseStateTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotfleetwiseStateTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotfleetwiseStateTemplate.IotfleetwiseStateTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



