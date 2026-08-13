# `iotThingType` Submodule <a name="`iotThingType` Submodule" id="@cdktn/provider-awscc.iotThingType"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotThingType <a name="IotThingType" id="@cdktn/provider-awscc.iotThingType.IotThingType"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type awscc_iot_thing_type}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.NewIotThingType(scope Construct, id *string, config IotThingTypeConfig) IotThingType
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig">IotThingTypeConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.iotThingType.IotThingType.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig">IotThingTypeConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.putThingTypeProperties">PutThingTypeProperties</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetDeprecateThingType">ResetDeprecateThingType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetThingTypeName">ResetThingTypeName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.resetThingTypeProperties">ResetThingTypeProperties</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotThingType.IotThingType.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotThingType.IotThingType.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotThingType.IotThingType.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotThingType.IotThingType.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotThingType.IotThingType.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingType.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotThingType.IotThingType.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotThingType.IotThingType.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotThingType.IotThingType.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotThingType.IotThingType.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotThingType.IotThingType.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotThingType.IotThingType.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotThingType.IotThingType.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotThingType.IotThingType.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotThingType.IotThingType.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingType.IotThingType.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingType.IotThingType.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingType.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotThingType.IotThingType.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotThingType.IotThingType.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingType.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutThingTypeProperties` <a name="PutThingTypeProperties" id="@cdktn/provider-awscc.iotThingType.IotThingType.putThingTypeProperties"></a>

```go
func PutThingTypeProperties(value IotThingTypeThingTypeProperties)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingType.putThingTypeProperties.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a>

---

##### `ResetDeprecateThingType` <a name="ResetDeprecateThingType" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetDeprecateThingType"></a>

```go
func ResetDeprecateThingType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetTags"></a>

```go
func ResetTags()
```

##### `ResetThingTypeName` <a name="ResetThingTypeName" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetThingTypeName"></a>

```go
func ResetThingTypeName()
```

##### `ResetThingTypeProperties` <a name="ResetThingTypeProperties" id="@cdktn/provider-awscc.iotThingType.IotThingType.resetThingTypeProperties"></a>

```go
func ResetThingTypeProperties()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotThingType resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotThingType.IotThingType.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.IotThingType_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingType.IotThingType.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.IotThingType_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.IotThingType_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotThingType.IotThingType.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.IotThingType_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotThingType resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotThingType to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotThingType that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotThingType.IotThingType.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotThingType to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList">IotThingTypeTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeId">ThingTypeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeProperties">ThingTypeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference">IotThingTypeThingTypePropertiesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.deprecateThingTypeInput">DeprecateThingTypeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeNameInput">ThingTypeNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypePropertiesInput">ThingTypePropertiesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.deprecateThingType">DeprecateThingType</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeName">ThingTypeName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.tags"></a>

```go
func Tags() IotThingTypeTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList">IotThingTypeTagsList</a>

---

##### `ThingTypeId`<sup>Required</sup> <a name="ThingTypeId" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeId"></a>

```go
func ThingTypeId() *string
```

- *Type:* *string

---

##### `ThingTypeProperties`<sup>Required</sup> <a name="ThingTypeProperties" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeProperties"></a>

```go
func ThingTypeProperties() IotThingTypeThingTypePropertiesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference">IotThingTypeThingTypePropertiesOutputReference</a>

---

##### `DeprecateThingTypeInput`<sup>Optional</sup> <a name="DeprecateThingTypeInput" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.deprecateThingTypeInput"></a>

```go
func DeprecateThingTypeInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ThingTypeNameInput`<sup>Optional</sup> <a name="ThingTypeNameInput" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeNameInput"></a>

```go
func ThingTypeNameInput() *string
```

- *Type:* *string

---

##### `ThingTypePropertiesInput`<sup>Optional</sup> <a name="ThingTypePropertiesInput" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypePropertiesInput"></a>

```go
func ThingTypePropertiesInput() interface{}
```

- *Type:* interface{}

---

##### `DeprecateThingType`<sup>Required</sup> <a name="DeprecateThingType" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.deprecateThingType"></a>

```go
func DeprecateThingType() interface{}
```

- *Type:* interface{}

---

##### `ThingTypeName`<sup>Required</sup> <a name="ThingTypeName" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.thingTypeName"></a>

```go
func ThingTypeName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingType.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotThingType.IotThingType.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotThingTypeConfig <a name="IotThingTypeConfig" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

&iotthingtype.IotThingTypeConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DeprecateThingType: interface{},
	Tags: interface{},
	ThingTypeName: *string,
	ThingTypeProperties: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotThingType.IotThingTypeThingTypeProperties,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.deprecateThingType">DeprecateThingType</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#deprecate_thing_type IotThingType#deprecate_thing_type}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.thingTypeName">ThingTypeName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#thing_type_name IotThingType#thing_type_name}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.thingTypeProperties">ThingTypeProperties</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#thing_type_properties IotThingType#thing_type_properties}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DeprecateThingType`<sup>Optional</sup> <a name="DeprecateThingType" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.deprecateThingType"></a>

```go
DeprecateThingType interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#deprecate_thing_type IotThingType#deprecate_thing_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#tags IotThingType#tags}

---

##### `ThingTypeName`<sup>Optional</sup> <a name="ThingTypeName" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.thingTypeName"></a>

```go
ThingTypeName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#thing_type_name IotThingType#thing_type_name}.

---

##### `ThingTypeProperties`<sup>Optional</sup> <a name="ThingTypeProperties" id="@cdktn/provider-awscc.iotThingType.IotThingTypeConfig.property.thingTypeProperties"></a>

```go
ThingTypeProperties IotThingTypeThingTypeProperties
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties">IotThingTypeThingTypeProperties</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#thing_type_properties IotThingType#thing_type_properties}.

---

### IotThingTypeTags <a name="IotThingTypeTags" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

&iotthingtype.IotThingTypeTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags.property.key">Key</a></code> | <code>*string</code> | Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTags.property.value">Value</a></code> | <code>*string</code> | Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-]. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Tag key (1-128 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#key IotThingType#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Tag value (1-256 chars). No 'aws:' prefix. Allows: [A-Za-z0-9 _.:/=+-].

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#value IotThingType#value}

---

### IotThingTypeThingTypeProperties <a name="IotThingTypeThingTypeProperties" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

&iotthingtype.IotThingTypeThingTypeProperties {
	Mqtt5Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration,
	SearchableAttributes: *[]*string,
	ThingTypeDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.mqtt5Configuration">Mqtt5Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#mqtt_5_configuration IotThingType#mqtt_5_configuration}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.searchableAttributes">SearchableAttributes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#searchable_attributes IotThingType#searchable_attributes}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.thingTypeDescription">ThingTypeDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#thing_type_description IotThingType#thing_type_description}. |

---

##### `Mqtt5Configuration`<sup>Optional</sup> <a name="Mqtt5Configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.mqtt5Configuration"></a>

```go
Mqtt5Configuration IotThingTypeThingTypePropertiesMqtt5Configuration
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#mqtt_5_configuration IotThingType#mqtt_5_configuration}.

---

##### `SearchableAttributes`<sup>Optional</sup> <a name="SearchableAttributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.searchableAttributes"></a>

```go
SearchableAttributes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#searchable_attributes IotThingType#searchable_attributes}.

---

##### `ThingTypeDescription`<sup>Optional</sup> <a name="ThingTypeDescription" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypeProperties.property.thingTypeDescription"></a>

```go
ThingTypeDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#thing_type_description IotThingType#thing_type_description}.

---

### IotThingTypeThingTypePropertiesMqtt5Configuration <a name="IotThingTypeThingTypePropertiesMqtt5Configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

&iotthingtype.IotThingTypeThingTypePropertiesMqtt5Configuration {
	PropagatingAttributes: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration.property.propagatingAttributes">PropagatingAttributes</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#propagating_attributes IotThingType#propagating_attributes}. |

---

##### `PropagatingAttributes`<sup>Optional</sup> <a name="PropagatingAttributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration.property.propagatingAttributes"></a>

```go
PropagatingAttributes interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#propagating_attributes IotThingType#propagating_attributes}.

---

### IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes <a name="IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

&iotthingtype.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes {
	ConnectionAttribute: *string,
	ThingAttribute: *string,
	UserPropertyKey: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.connectionAttribute">ConnectionAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#connection_attribute IotThingType#connection_attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.thingAttribute">ThingAttribute</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#thing_attribute IotThingType#thing_attribute}. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.userPropertyKey">UserPropertyKey</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#user_property_key IotThingType#user_property_key}. |

---

##### `ConnectionAttribute`<sup>Optional</sup> <a name="ConnectionAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.connectionAttribute"></a>

```go
ConnectionAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#connection_attribute IotThingType#connection_attribute}.

---

##### `ThingAttribute`<sup>Optional</sup> <a name="ThingAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.thingAttribute"></a>

```go
ThingAttribute *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#thing_attribute IotThingType#thing_attribute}.

---

##### `UserPropertyKey`<sup>Optional</sup> <a name="UserPropertyKey" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributes.property.userPropertyKey"></a>

```go
UserPropertyKey *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iot_thing_type#user_property_key IotThingType#user_property_key}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotThingTypeTagsList <a name="IotThingTypeTagsList" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.NewIotThingTypeTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotThingTypeTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.get"></a>

```go
func Get(index *f64) IotThingTypeTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotThingTypeTagsOutputReference <a name="IotThingTypeTagsOutputReference" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.NewIotThingTypeTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotThingTypeTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotThingType.IotThingTypeTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference <a name="IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.NewIotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.putPropagatingAttributes">PutPropagatingAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resetPropagatingAttributes">ResetPropagatingAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPropagatingAttributes` <a name="PutPropagatingAttributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.putPropagatingAttributes"></a>

```go
func PutPropagatingAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.putPropagatingAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetPropagatingAttributes` <a name="ResetPropagatingAttributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.resetPropagatingAttributes"></a>

```go
func ResetPropagatingAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.propagatingAttributes">PropagatingAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.propagatingAttributesInput">PropagatingAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PropagatingAttributes`<sup>Required</sup> <a name="PropagatingAttributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.propagatingAttributes"></a>

```go
func PropagatingAttributes() IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList">IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList</a>

---

##### `PropagatingAttributesInput`<sup>Optional</sup> <a name="PropagatingAttributesInput" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.propagatingAttributesInput"></a>

```go
func PropagatingAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList <a name="IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.NewIotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.get"></a>

```go
func Get(index *f64) IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference <a name="IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.NewIotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetConnectionAttribute">ResetConnectionAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetThingAttribute">ResetThingAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetUserPropertyKey">ResetUserPropertyKey</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConnectionAttribute` <a name="ResetConnectionAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetConnectionAttribute"></a>

```go
func ResetConnectionAttribute()
```

##### `ResetThingAttribute` <a name="ResetThingAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetThingAttribute"></a>

```go
func ResetThingAttribute()
```

##### `ResetUserPropertyKey` <a name="ResetUserPropertyKey" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.resetUserPropertyKey"></a>

```go
func ResetUserPropertyKey()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.connectionAttributeInput">ConnectionAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.thingAttributeInput">ThingAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.userPropertyKeyInput">UserPropertyKeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.connectionAttribute">ConnectionAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.thingAttribute">ThingAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.userPropertyKey">UserPropertyKey</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConnectionAttributeInput`<sup>Optional</sup> <a name="ConnectionAttributeInput" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.connectionAttributeInput"></a>

```go
func ConnectionAttributeInput() *string
```

- *Type:* *string

---

##### `ThingAttributeInput`<sup>Optional</sup> <a name="ThingAttributeInput" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.thingAttributeInput"></a>

```go
func ThingAttributeInput() *string
```

- *Type:* *string

---

##### `UserPropertyKeyInput`<sup>Optional</sup> <a name="UserPropertyKeyInput" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.userPropertyKeyInput"></a>

```go
func UserPropertyKeyInput() *string
```

- *Type:* *string

---

##### `ConnectionAttribute`<sup>Required</sup> <a name="ConnectionAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.connectionAttribute"></a>

```go
func ConnectionAttribute() *string
```

- *Type:* *string

---

##### `ThingAttribute`<sup>Required</sup> <a name="ThingAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.thingAttribute"></a>

```go
func ThingAttribute() *string
```

- *Type:* *string

---

##### `UserPropertyKey`<sup>Required</sup> <a name="UserPropertyKey" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.userPropertyKey"></a>

```go
func UserPropertyKey() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationPropagatingAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotThingTypeThingTypePropertiesOutputReference <a name="IotThingTypeThingTypePropertiesOutputReference" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotthingtype"

iotthingtype.NewIotThingTypeThingTypePropertiesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotThingTypeThingTypePropertiesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.putMqtt5Configuration">PutMqtt5Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetMqtt5Configuration">ResetMqtt5Configuration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetSearchableAttributes">ResetSearchableAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetThingTypeDescription">ResetThingTypeDescription</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMqtt5Configuration` <a name="PutMqtt5Configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.putMqtt5Configuration"></a>

```go
func PutMqtt5Configuration(value IotThingTypeThingTypePropertiesMqtt5Configuration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.putMqtt5Configuration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5Configuration">IotThingTypeThingTypePropertiesMqtt5Configuration</a>

---

##### `ResetMqtt5Configuration` <a name="ResetMqtt5Configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetMqtt5Configuration"></a>

```go
func ResetMqtt5Configuration()
```

##### `ResetSearchableAttributes` <a name="ResetSearchableAttributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetSearchableAttributes"></a>

```go
func ResetSearchableAttributes()
```

##### `ResetThingTypeDescription` <a name="ResetThingTypeDescription" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.resetThingTypeDescription"></a>

```go
func ResetThingTypeDescription()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.mqtt5Configuration">Mqtt5Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference">IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.mqtt5ConfigurationInput">Mqtt5ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.searchableAttributesInput">SearchableAttributesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.thingTypeDescriptionInput">ThingTypeDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.searchableAttributes">SearchableAttributes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.thingTypeDescription">ThingTypeDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mqtt5Configuration`<sup>Required</sup> <a name="Mqtt5Configuration" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.mqtt5Configuration"></a>

```go
func Mqtt5Configuration() IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference">IotThingTypeThingTypePropertiesMqtt5ConfigurationOutputReference</a>

---

##### `Mqtt5ConfigurationInput`<sup>Optional</sup> <a name="Mqtt5ConfigurationInput" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.mqtt5ConfigurationInput"></a>

```go
func Mqtt5ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SearchableAttributesInput`<sup>Optional</sup> <a name="SearchableAttributesInput" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.searchableAttributesInput"></a>

```go
func SearchableAttributesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ThingTypeDescriptionInput`<sup>Optional</sup> <a name="ThingTypeDescriptionInput" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.thingTypeDescriptionInput"></a>

```go
func ThingTypeDescriptionInput() *string
```

- *Type:* *string

---

##### `SearchableAttributes`<sup>Required</sup> <a name="SearchableAttributes" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.searchableAttributes"></a>

```go
func SearchableAttributes() *[]*string
```

- *Type:* *[]*string

---

##### `ThingTypeDescription`<sup>Required</sup> <a name="ThingTypeDescription" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.thingTypeDescription"></a>

```go
func ThingTypeDescription() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotThingType.IotThingTypeThingTypePropertiesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



