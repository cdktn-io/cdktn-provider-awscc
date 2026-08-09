# `mediaconvertPreset` Submodule <a name="`mediaconvertPreset` Submodule" id="@cdktn/provider-awscc.mediaconvertPreset"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MediaconvertPreset <a name="MediaconvertPreset" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconvert_preset awscc_mediaconvert_preset}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertpreset"

mediaconvertpreset.NewMediaconvertPreset(scope Construct, id *string, config MediaconvertPresetConfig) MediaconvertPreset
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig">MediaconvertPresetConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig">MediaconvertPresetConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetCategory">ResetCategory</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCategory` <a name="ResetCategory" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetCategory"></a>

```go
func ResetCategory()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MediaconvertPreset resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertpreset"

mediaconvertpreset.MediaconvertPreset_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertpreset"

mediaconvertpreset.MediaconvertPreset_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertpreset"

mediaconvertpreset.MediaconvertPreset_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertpreset"

mediaconvertpreset.MediaconvertPreset_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MediaconvertPreset resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MediaconvertPreset to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MediaconvertPreset that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconvert_preset#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MediaconvertPreset to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.categoryInput">CategoryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.settingsJsonInput">SettingsJsonInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.category">Category</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.settingsJson">SettingsJson</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `CategoryInput`<sup>Optional</sup> <a name="CategoryInput" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.categoryInput"></a>

```go
func CategoryInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SettingsJsonInput`<sup>Optional</sup> <a name="SettingsJsonInput" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.settingsJsonInput"></a>

```go
func SettingsJsonInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `Category`<sup>Required</sup> <a name="Category" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.category"></a>

```go
func Category() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `SettingsJson`<sup>Required</sup> <a name="SettingsJson" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.settingsJson"></a>

```go
func SettingsJson() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPreset.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MediaconvertPresetConfig <a name="MediaconvertPresetConfig" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/mediaconvertpreset"

&mediaconvertpreset.MediaconvertPresetConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SettingsJson: *string,
	Category: *string,
	Description: *string,
	Name: *string,
	Tags: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.settingsJson">SettingsJson</a></code> | <code>*string</code> | Specify, in JSON format, the transcoding job settings for this output preset. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.category">Category</a></code> | <code>*string</code> | The new category for the preset, if you are changing it. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.description">Description</a></code> | <code>*string</code> | The new description for the preset, if you are changing it. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.name">Name</a></code> | <code>*string</code> | The name of the preset that you are modifying. |
| <code><a href="#@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.tags">Tags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconvert_preset#tags MediaconvertPreset#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SettingsJson`<sup>Required</sup> <a name="SettingsJson" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.settingsJson"></a>

```go
SettingsJson *string
```

- *Type:* *string

Specify, in JSON format, the transcoding job settings for this output preset.

This specification must conform to the AWS Elemental MediaConvert job validation. For information about forming this specification, see the Remarks section later in this topic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconvert_preset#settings_json MediaconvertPreset#settings_json}

---

##### `Category`<sup>Optional</sup> <a name="Category" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.category"></a>

```go
Category *string
```

- *Type:* *string

The new category for the preset, if you are changing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconvert_preset#category MediaconvertPreset#category}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The new description for the preset, if you are changing it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconvert_preset#description MediaconvertPreset#description}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the preset that you are modifying.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconvert_preset#name MediaconvertPreset#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.mediaconvertPreset.MediaconvertPresetConfig.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/mediaconvert_preset#tags MediaconvertPreset#tags}.

---



