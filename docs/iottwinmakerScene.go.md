# `iottwinmakerScene` Submodule <a name="`iottwinmakerScene` Submodule" id="@cdktn/provider-awscc.iottwinmakerScene"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IottwinmakerScene <a name="IottwinmakerScene" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene awscc_iottwinmaker_scene}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakerscene"

iottwinmakerscene.NewIottwinmakerScene(scope Construct, id *string, config IottwinmakerSceneConfig) IottwinmakerScene
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig">IottwinmakerSceneConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig">IottwinmakerSceneConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetCapabilities">ResetCapabilities</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetSceneMetadata">ResetSceneMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCapabilities` <a name="ResetCapabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetCapabilities"></a>

```go
func ResetCapabilities()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetSceneMetadata` <a name="ResetSceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetSceneMetadata"></a>

```go
func ResetSceneMetadata()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IottwinmakerScene resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakerscene"

iottwinmakerscene.IottwinmakerScene_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakerscene"

iottwinmakerscene.IottwinmakerScene_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakerscene"

iottwinmakerscene.IottwinmakerScene_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakerscene"

iottwinmakerscene.IottwinmakerScene_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IottwinmakerScene resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IottwinmakerScene to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IottwinmakerScene that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IottwinmakerScene to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.creationDateTime">CreationDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.generatedSceneMetadata">GeneratedSceneMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.updateDateTime">UpdateDateTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilitiesInput">CapabilitiesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocationInput">ContentLocationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneIdInput">SceneIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadataInput">SceneMetadataInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocation">ContentLocation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneId">SceneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadata">SceneMetadata</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationDateTime`<sup>Required</sup> <a name="CreationDateTime" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.creationDateTime"></a>

```go
func CreationDateTime() *string
```

- *Type:* *string

---

##### `GeneratedSceneMetadata`<sup>Required</sup> <a name="GeneratedSceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.generatedSceneMetadata"></a>

```go
func GeneratedSceneMetadata() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdateDateTime`<sup>Required</sup> <a name="UpdateDateTime" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.updateDateTime"></a>

```go
func UpdateDateTime() *string
```

- *Type:* *string

---

##### `CapabilitiesInput`<sup>Optional</sup> <a name="CapabilitiesInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilitiesInput"></a>

```go
func CapabilitiesInput() *[]*string
```

- *Type:* *[]*string

---

##### `ContentLocationInput`<sup>Optional</sup> <a name="ContentLocationInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocationInput"></a>

```go
func ContentLocationInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `SceneIdInput`<sup>Optional</sup> <a name="SceneIdInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneIdInput"></a>

```go
func SceneIdInput() *string
```

- *Type:* *string

---

##### `SceneMetadataInput`<sup>Optional</sup> <a name="SceneMetadataInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadataInput"></a>

```go
func SceneMetadataInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `Capabilities`<sup>Required</sup> <a name="Capabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.capabilities"></a>

```go
func Capabilities() *[]*string
```

- *Type:* *[]*string

---

##### `ContentLocation`<sup>Required</sup> <a name="ContentLocation" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.contentLocation"></a>

```go
func ContentLocation() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `SceneId`<sup>Required</sup> <a name="SceneId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneId"></a>

```go
func SceneId() *string
```

- *Type:* *string

---

##### `SceneMetadata`<sup>Required</sup> <a name="SceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.sceneMetadata"></a>

```go
func SceneMetadata() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerScene.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IottwinmakerSceneConfig <a name="IottwinmakerSceneConfig" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iottwinmakerscene"

&iottwinmakerscene.IottwinmakerSceneConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContentLocation: *string,
	SceneId: *string,
	WorkspaceId: *string,
	Capabilities: *[]*string,
	Description: *string,
	SceneMetadata: *map[string]*string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.contentLocation">ContentLocation</a></code> | <code>*string</code> | The relative path that specifies the location of the content definition file. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneId">SceneId</a></code> | <code>*string</code> | The ID of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | The ID of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.capabilities">Capabilities</a></code> | <code>*[]*string</code> | A list of capabilities that the scene uses to render. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.description">Description</a></code> | <code>*string</code> | The description of the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneMetadata">SceneMetadata</a></code> | <code>*map[string]*string</code> | A key-value pair of scene metadata for the scene. |
| <code><a href="#@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | A key-value pair to associate with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContentLocation`<sup>Required</sup> <a name="ContentLocation" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.contentLocation"></a>

```go
ContentLocation *string
```

- *Type:* *string

The relative path that specifies the location of the content definition file.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#content_location IottwinmakerScene#content_location}

---

##### `SceneId`<sup>Required</sup> <a name="SceneId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneId"></a>

```go
SceneId *string
```

- *Type:* *string

The ID of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#scene_id IottwinmakerScene#scene_id}

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

The ID of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#workspace_id IottwinmakerScene#workspace_id}

---

##### `Capabilities`<sup>Optional</sup> <a name="Capabilities" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.capabilities"></a>

```go
Capabilities *[]*string
```

- *Type:* *[]*string

A list of capabilities that the scene uses to render.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#capabilities IottwinmakerScene#capabilities}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#description IottwinmakerScene#description}

---

##### `SceneMetadata`<sup>Optional</sup> <a name="SceneMetadata" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.sceneMetadata"></a>

```go
SceneMetadata *map[string]*string
```

- *Type:* *map[string]*string

A key-value pair of scene metadata for the scene.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#scene_metadata IottwinmakerScene#scene_metadata}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iottwinmakerScene.IottwinmakerSceneConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

A key-value pair to associate with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/iottwinmaker_scene#tags IottwinmakerScene#tags}

---



