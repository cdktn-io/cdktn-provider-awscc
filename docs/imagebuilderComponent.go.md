# `imagebuilderComponent` Submodule <a name="`imagebuilderComponent` Submodule" id="@cdktn/provider-awscc.imagebuilderComponent"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ImagebuilderComponent <a name="ImagebuilderComponent" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component awscc_imagebuilder_component}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuildercomponent"

imagebuildercomponent.NewImagebuilderComponent(scope Construct, id *string, config ImagebuilderComponentConfig) ImagebuilderComponent
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig">ImagebuilderComponentConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig">ImagebuilderComponentConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription">ResetChangeDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetData">ResetData</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId">ResetKmsKeyId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions">ResetSupportedOsVersions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetUri">ResetUri</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetChangeDescription` <a name="ResetChangeDescription" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetChangeDescription"></a>

```go
func ResetChangeDescription()
```

##### `ResetData` <a name="ResetData" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetData"></a>

```go
func ResetData()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKmsKeyId` <a name="ResetKmsKeyId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetKmsKeyId"></a>

```go
func ResetKmsKeyId()
```

##### `ResetSupportedOsVersions` <a name="ResetSupportedOsVersions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetSupportedOsVersions"></a>

```go
func ResetSupportedOsVersions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUri` <a name="ResetUri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.resetUri"></a>

```go
func ResetUri()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ImagebuilderComponent resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuildercomponent"

imagebuildercomponent.ImagebuilderComponent_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuildercomponent"

imagebuildercomponent.ImagebuilderComponent_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuildercomponent"

imagebuildercomponent.ImagebuilderComponent_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuildercomponent"

imagebuildercomponent.ImagebuilderComponent_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ImagebuilderComponent resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ImagebuilderComponent to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ImagebuilderComponent that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ImagebuilderComponent to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.encrypted">Encrypted</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.latestVersion">LatestVersion</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference">ImagebuilderComponentLatestVersionOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput">ChangeDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dataInput">DataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput">KmsKeyIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platformInput">PlatformInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput">SupportedOsVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uriInput">UriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.versionInput">VersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescription">ChangeDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.data">Data</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platform">Platform</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions">SupportedOsVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uri">Uri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.version">Version</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Encrypted`<sup>Required</sup> <a name="Encrypted" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.encrypted"></a>

```go
func Encrypted() IResolvable
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolvable

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LatestVersion`<sup>Required</sup> <a name="LatestVersion" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.latestVersion"></a>

```go
func LatestVersion() ImagebuilderComponentLatestVersionOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference">ImagebuilderComponentLatestVersionOutputReference</a>

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `ChangeDescriptionInput`<sup>Optional</sup> <a name="ChangeDescriptionInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescriptionInput"></a>

```go
func ChangeDescriptionInput() *string
```

- *Type:* *string

---

##### `DataInput`<sup>Optional</sup> <a name="DataInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.dataInput"></a>

```go
func DataInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyIdInput`<sup>Optional</sup> <a name="KmsKeyIdInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyIdInput"></a>

```go
func KmsKeyIdInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PlatformInput`<sup>Optional</sup> <a name="PlatformInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platformInput"></a>

```go
func PlatformInput() *string
```

- *Type:* *string

---

##### `SupportedOsVersionsInput`<sup>Optional</sup> <a name="SupportedOsVersionsInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersionsInput"></a>

```go
func SupportedOsVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `UriInput`<sup>Optional</sup> <a name="UriInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uriInput"></a>

```go
func UriInput() *string
```

- *Type:* *string

---

##### `VersionInput`<sup>Optional</sup> <a name="VersionInput" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.versionInput"></a>

```go
func VersionInput() *string
```

- *Type:* *string

---

##### `ChangeDescription`<sup>Required</sup> <a name="ChangeDescription" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.changeDescription"></a>

```go
func ChangeDescription() *string
```

- *Type:* *string

---

##### `Data`<sup>Required</sup> <a name="Data" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.data"></a>

```go
func Data() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyId`<sup>Required</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.kmsKeyId"></a>

```go
func KmsKeyId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.platform"></a>

```go
func Platform() *string
```

- *Type:* *string

---

##### `SupportedOsVersions`<sup>Required</sup> <a name="SupportedOsVersions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.supportedOsVersions"></a>

```go
func SupportedOsVersions() *[]*string
```

- *Type:* *[]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Uri`<sup>Required</sup> <a name="Uri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.uri"></a>

```go
func Uri() *string
```

- *Type:* *string

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.version"></a>

```go
func Version() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponent.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ImagebuilderComponentConfig <a name="ImagebuilderComponentConfig" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuildercomponent"

&imagebuildercomponent.ImagebuilderComponentConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Platform: *string,
	Version: *string,
	ChangeDescription: *string,
	Data: *string,
	Description: *string,
	KmsKeyId: *string,
	SupportedOsVersions: *[]*string,
	Tags: *map[string]*string,
	Uri: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.name">Name</a></code> | <code>*string</code> | The name of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.platform">Platform</a></code> | <code>*string</code> | The platform of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.version">Version</a></code> | <code>*string</code> | The version of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription">ChangeDescription</a></code> | <code>*string</code> | The change description of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.data">Data</a></code> | <code>*string</code> | The data of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.description">Description</a></code> | <code>*string</code> | The description of the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId">KmsKeyId</a></code> | <code>*string</code> | The KMS key identifier used to encrypt the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions">SupportedOsVersions</a></code> | <code>*[]*string</code> | The operating system (OS) version supported by the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | The tags associated with the component. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.uri">Uri</a></code> | <code>*string</code> | The uri of the component. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#name ImagebuilderComponent#name}

---

##### `Platform`<sup>Required</sup> <a name="Platform" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.platform"></a>

```go
Platform *string
```

- *Type:* *string

The platform of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#platform ImagebuilderComponent#platform}

---

##### `Version`<sup>Required</sup> <a name="Version" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.version"></a>

```go
Version *string
```

- *Type:* *string

The version of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#version ImagebuilderComponent#version}

---

##### `ChangeDescription`<sup>Optional</sup> <a name="ChangeDescription" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.changeDescription"></a>

```go
ChangeDescription *string
```

- *Type:* *string

The change description of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#change_description ImagebuilderComponent#change_description}

---

##### `Data`<sup>Optional</sup> <a name="Data" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.data"></a>

```go
Data *string
```

- *Type:* *string

The data of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#data ImagebuilderComponent#data}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#description ImagebuilderComponent#description}

---

##### `KmsKeyId`<sup>Optional</sup> <a name="KmsKeyId" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.kmsKeyId"></a>

```go
KmsKeyId *string
```

- *Type:* *string

The KMS key identifier used to encrypt the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#kms_key_id ImagebuilderComponent#kms_key_id}

---

##### `SupportedOsVersions`<sup>Optional</sup> <a name="SupportedOsVersions" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.supportedOsVersions"></a>

```go
SupportedOsVersions *[]*string
```

- *Type:* *[]*string

The operating system (OS) version supported by the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#supported_os_versions ImagebuilderComponent#supported_os_versions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

The tags associated with the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#tags ImagebuilderComponent#tags}

---

##### `Uri`<sup>Optional</sup> <a name="Uri" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentConfig.property.uri"></a>

```go
Uri *string
```

- *Type:* *string

The uri of the component.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/imagebuilder_component#uri ImagebuilderComponent#uri}

---

### ImagebuilderComponentLatestVersion <a name="ImagebuilderComponentLatestVersion" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuildercomponent"

&imagebuildercomponent.ImagebuilderComponentLatestVersion {

}
```


## Classes <a name="Classes" id="Classes"></a>

### ImagebuilderComponentLatestVersionOutputReference <a name="ImagebuilderComponentLatestVersionOutputReference" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/imagebuildercomponent"

imagebuildercomponent.NewImagebuilderComponentLatestVersionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ImagebuilderComponentLatestVersionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.major">Major</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.minor">Minor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.patch">Patch</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion">ImagebuilderComponentLatestVersion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Major`<sup>Required</sup> <a name="Major" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.major"></a>

```go
func Major() *string
```

- *Type:* *string

---

##### `Minor`<sup>Required</sup> <a name="Minor" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.minor"></a>

```go
func Minor() *string
```

- *Type:* *string

---

##### `Patch`<sup>Required</sup> <a name="Patch" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.patch"></a>

```go
func Patch() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersionOutputReference.property.internalValue"></a>

```go
func InternalValue() ImagebuilderComponentLatestVersion
```

- *Type:* <a href="#@cdktn/provider-awscc.imagebuilderComponent.ImagebuilderComponentLatestVersion">ImagebuilderComponentLatestVersion</a>

---



