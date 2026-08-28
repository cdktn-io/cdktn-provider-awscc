# `pinpointInAppTemplate` Submodule <a name="`pinpointInAppTemplate` Submodule" id="@cdktn/provider-awscc.pinpointInAppTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PinpointInAppTemplate <a name="PinpointInAppTemplate" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template awscc_pinpoint_in_app_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplate(scope Construct, id *string, config PinpointInAppTemplateConfig) PinpointInAppTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig">PinpointInAppTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig">PinpointInAppTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent">ResetContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig">ResetCustomConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout">ResetLayout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription">ResetTemplateDescription</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent"></a>

```go
func PutContent(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.putContent.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetContent"></a>

```go
func ResetContent()
```

##### `ResetCustomConfig` <a name="ResetCustomConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetCustomConfig"></a>

```go
func ResetCustomConfig()
```

##### `ResetLayout` <a name="ResetLayout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetLayout"></a>

```go
func ResetLayout()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTemplateDescription` <a name="ResetTemplateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.resetTemplateDescription"></a>

```go
func ResetTemplateDescription()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.PinpointInAppTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.PinpointInAppTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.PinpointInAppTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.PinpointInAppTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PinpointInAppTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PinpointInAppTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PinpointInAppTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PinpointInAppTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput">ContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput">CustomConfigInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput">LayoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput">TagsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput">TemplateDescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput">TemplateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig">CustomConfig</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout">Layout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags">Tags</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription">TemplateDescription</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName">TemplateName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.content"></a>

```go
func Content() PinpointInAppTemplateContentList
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList">PinpointInAppTemplateContentList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.contentInput"></a>

```go
func ContentInput() interface{}
```

- *Type:* interface{}

---

##### `CustomConfigInput`<sup>Optional</sup> <a name="CustomConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfigInput"></a>

```go
func CustomConfigInput() *string
```

- *Type:* *string

---

##### `LayoutInput`<sup>Optional</sup> <a name="LayoutInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layoutInput"></a>

```go
func LayoutInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tagsInput"></a>

```go
func TagsInput() *string
```

- *Type:* *string

---

##### `TemplateDescriptionInput`<sup>Optional</sup> <a name="TemplateDescriptionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescriptionInput"></a>

```go
func TemplateDescriptionInput() *string
```

- *Type:* *string

---

##### `TemplateNameInput`<sup>Optional</sup> <a name="TemplateNameInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateNameInput"></a>

```go
func TemplateNameInput() *string
```

- *Type:* *string

---

##### `CustomConfig`<sup>Required</sup> <a name="CustomConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.customConfig"></a>

```go
func CustomConfig() *string
```

- *Type:* *string

---

##### `Layout`<sup>Required</sup> <a name="Layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.layout"></a>

```go
func Layout() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tags"></a>

```go
func Tags() *string
```

- *Type:* *string

---

##### `TemplateDescription`<sup>Required</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateDescription"></a>

```go
func TemplateDescription() *string
```

- *Type:* *string

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.templateName"></a>

```go
func TemplateName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PinpointInAppTemplateConfig <a name="PinpointInAppTemplateConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	TemplateName: *string,
	Content: interface{},
	CustomConfig: *string,
	Layout: *string,
	Tags: *string,
	TemplateDescription: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName">TemplateName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content">Content</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig">CustomConfig</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout">Layout</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags">Tags</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription">TemplateDescription</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `TemplateName`<sup>Required</sup> <a name="TemplateName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateName"></a>

```go
TemplateName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_name PinpointInAppTemplate#template_name}.

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.content"></a>

```go
Content interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#content PinpointInAppTemplate#content}.

---

##### `CustomConfig`<sup>Optional</sup> <a name="CustomConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.customConfig"></a>

```go
CustomConfig *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#custom_config PinpointInAppTemplate#custom_config}.

---

##### `Layout`<sup>Optional</sup> <a name="Layout" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.layout"></a>

```go
Layout *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#layout PinpointInAppTemplate#layout}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.tags"></a>

```go
Tags *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#tags PinpointInAppTemplate#tags}.

---

##### `TemplateDescription`<sup>Optional</sup> <a name="TemplateDescription" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateConfig.property.templateDescription"></a>

```go
TemplateDescription *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#template_description PinpointInAppTemplate#template_description}.

---

### PinpointInAppTemplateContent <a name="PinpointInAppTemplateContent" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContent {
	BackgroundColor: *string,
	BodyConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig,
	HeaderConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig,
	ImageUrl: *string,
	PrimaryBtn: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn,
	SecondaryBtn: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig">BodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig">HeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn">PrimaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn">SecondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.backgroundColor"></a>

```go
BackgroundColor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `BodyConfig`<sup>Optional</sup> <a name="BodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.bodyConfig"></a>

```go
BodyConfig PinpointInAppTemplateContentBodyConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body_config PinpointInAppTemplate#body_config}.

---

##### `HeaderConfig`<sup>Optional</sup> <a name="HeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.headerConfig"></a>

```go
HeaderConfig PinpointInAppTemplateContentHeaderConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header_config PinpointInAppTemplate#header_config}.

---

##### `ImageUrl`<sup>Optional</sup> <a name="ImageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.imageUrl"></a>

```go
ImageUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#image_url PinpointInAppTemplate#image_url}.

---

##### `PrimaryBtn`<sup>Optional</sup> <a name="PrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.primaryBtn"></a>

```go
PrimaryBtn PinpointInAppTemplateContentPrimaryBtn
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#primary_btn PinpointInAppTemplate#primary_btn}.

---

##### `SecondaryBtn`<sup>Optional</sup> <a name="SecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContent.property.secondaryBtn"></a>

```go
SecondaryBtn PinpointInAppTemplateContentSecondaryBtn
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#secondary_btn PinpointInAppTemplate#secondary_btn}.

---

### PinpointInAppTemplateContentBodyConfig <a name="PinpointInAppTemplateContentBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentBodyConfig {
	Alignment: *string,
	Body: *string,
	TextColor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment">Alignment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body">Body</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor">TextColor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `Alignment`<sup>Optional</sup> <a name="Alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.alignment"></a>

```go
Alignment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.body"></a>

```go
Body *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#body PinpointInAppTemplate#body}.

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig.property.textColor"></a>

```go
TextColor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentHeaderConfig <a name="PinpointInAppTemplateContentHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentHeaderConfig {
	Alignment: *string,
	Header: *string,
	TextColor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment">Alignment</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header">Header</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor">TextColor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `Alignment`<sup>Optional</sup> <a name="Alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.alignment"></a>

```go
Alignment *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#alignment PinpointInAppTemplate#alignment}.

---

##### `Header`<sup>Optional</sup> <a name="Header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.header"></a>

```go
Header *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#header PinpointInAppTemplate#header}.

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig.property.textColor"></a>

```go
TextColor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtn <a name="PinpointInAppTemplateContentPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentPrimaryBtn {
	Android: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid,
	DefaultConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig,
	Ios: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos,
	Web: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `Android`<sup>Optional</sup> <a name="Android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.android"></a>

```go
Android PinpointInAppTemplateContentPrimaryBtnAndroid
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `DefaultConfig`<sup>Optional</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.defaultConfig"></a>

```go
DefaultConfig PinpointInAppTemplateContentPrimaryBtnDefaultConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `Ios`<sup>Optional</sup> <a name="Ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.ios"></a>

```go
Ios PinpointInAppTemplateContentPrimaryBtnIos
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `Web`<sup>Optional</sup> <a name="Web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn.property.web"></a>

```go
Web PinpointInAppTemplateContentPrimaryBtnWeb
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentPrimaryBtnAndroid <a name="PinpointInAppTemplateContentPrimaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentPrimaryBtnAndroid {
	ButtonAction: *string,
	Link: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.buttonAction"></a>

```go
ButtonAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnDefaultConfig <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig {
	BackgroundColor: *string,
	BorderRadius: *f64,
	ButtonAction: *string,
	Link: *string,
	Text: *string,
	TextColor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius">BorderRadius</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor">TextColor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.backgroundColor"></a>

```go
BackgroundColor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `BorderRadius`<sup>Optional</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.borderRadius"></a>

```go
BorderRadius *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.buttonAction"></a>

```go
ButtonAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig.property.textColor"></a>

```go
TextColor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentPrimaryBtnIos <a name="PinpointInAppTemplateContentPrimaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentPrimaryBtnIos {
	ButtonAction: *string,
	Link: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.buttonAction"></a>

```go
ButtonAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentPrimaryBtnWeb <a name="PinpointInAppTemplateContentPrimaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentPrimaryBtnWeb {
	ButtonAction: *string,
	Link: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.buttonAction"></a>

```go
ButtonAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtn <a name="PinpointInAppTemplateContentSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentSecondaryBtn {
	Android: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid,
	DefaultConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig,
	Ios: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos,
	Web: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}. |

---

##### `Android`<sup>Optional</sup> <a name="Android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.android"></a>

```go
Android PinpointInAppTemplateContentSecondaryBtnAndroid
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#android PinpointInAppTemplate#android}.

---

##### `DefaultConfig`<sup>Optional</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.defaultConfig"></a>

```go
DefaultConfig PinpointInAppTemplateContentSecondaryBtnDefaultConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#default_config PinpointInAppTemplate#default_config}.

---

##### `Ios`<sup>Optional</sup> <a name="Ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.ios"></a>

```go
Ios PinpointInAppTemplateContentSecondaryBtnIos
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#ios PinpointInAppTemplate#ios}.

---

##### `Web`<sup>Optional</sup> <a name="Web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn.property.web"></a>

```go
Web PinpointInAppTemplateContentSecondaryBtnWeb
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#web PinpointInAppTemplate#web}.

---

### PinpointInAppTemplateContentSecondaryBtnAndroid <a name="PinpointInAppTemplateContentSecondaryBtnAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentSecondaryBtnAndroid {
	ButtonAction: *string,
	Link: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.buttonAction"></a>

```go
ButtonAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnDefaultConfig <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig {
	BackgroundColor: *string,
	BorderRadius: *f64,
	ButtonAction: *string,
	Link: *string,
	Text: *string,
	TextColor: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius">BorderRadius</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text">Text</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor">TextColor</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}. |

---

##### `BackgroundColor`<sup>Optional</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.backgroundColor"></a>

```go
BackgroundColor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#background_color PinpointInAppTemplate#background_color}.

---

##### `BorderRadius`<sup>Optional</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.borderRadius"></a>

```go
BorderRadius *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#border_radius PinpointInAppTemplate#border_radius}.

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.buttonAction"></a>

```go
ButtonAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

##### `Text`<sup>Optional</sup> <a name="Text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.text"></a>

```go
Text *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text PinpointInAppTemplate#text}.

---

##### `TextColor`<sup>Optional</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig.property.textColor"></a>

```go
TextColor *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#text_color PinpointInAppTemplate#text_color}.

---

### PinpointInAppTemplateContentSecondaryBtnIos <a name="PinpointInAppTemplateContentSecondaryBtnIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentSecondaryBtnIos {
	ButtonAction: *string,
	Link: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.buttonAction"></a>

```go
ButtonAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

### PinpointInAppTemplateContentSecondaryBtnWeb <a name="PinpointInAppTemplateContentSecondaryBtnWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

&pinpointinapptemplate.PinpointInAppTemplateContentSecondaryBtnWeb {
	ButtonAction: *string,
	Link: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link">Link</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}. |

---

##### `ButtonAction`<sup>Optional</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.buttonAction"></a>

```go
ButtonAction *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#button_action PinpointInAppTemplate#button_action}.

---

##### `Link`<sup>Optional</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb.property.link"></a>

```go
Link *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pinpoint_in_app_template#link PinpointInAppTemplate#link}.

---

## Classes <a name="Classes" id="Classes"></a>

### PinpointInAppTemplateContentBodyConfigOutputReference <a name="PinpointInAppTemplateContentBodyConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentBodyConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentBodyConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment">ResetAlignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignment` <a name="ResetAlignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetAlignment"></a>

```go
func ResetAlignment()
```

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.resetTextColor"></a>

```go
func ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput">AlignmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput">BodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput">TextColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment">Alignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body">Body</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor">TextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlignmentInput`<sup>Optional</sup> <a name="AlignmentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignmentInput"></a>

```go
func AlignmentInput() *string
```

- *Type:* *string

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.bodyInput"></a>

```go
func BodyInput() *string
```

- *Type:* *string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColorInput"></a>

```go
func TextColorInput() *string
```

- *Type:* *string

---

##### `Alignment`<sup>Required</sup> <a name="Alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.alignment"></a>

```go
func Alignment() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.body"></a>

```go
func Body() *string
```

- *Type:* *string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.textColor"></a>

```go
func TextColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentHeaderConfigOutputReference <a name="PinpointInAppTemplateContentHeaderConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentHeaderConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentHeaderConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment">ResetAlignment</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader">ResetHeader</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAlignment` <a name="ResetAlignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetAlignment"></a>

```go
func ResetAlignment()
```

##### `ResetHeader` <a name="ResetHeader" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetHeader"></a>

```go
func ResetHeader()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.resetTextColor"></a>

```go
func ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput">AlignmentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput">HeaderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput">TextColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment">Alignment</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header">Header</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor">TextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AlignmentInput`<sup>Optional</sup> <a name="AlignmentInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignmentInput"></a>

```go
func AlignmentInput() *string
```

- *Type:* *string

---

##### `HeaderInput`<sup>Optional</sup> <a name="HeaderInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.headerInput"></a>

```go
func HeaderInput() *string
```

- *Type:* *string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColorInput"></a>

```go
func TextColorInput() *string
```

- *Type:* *string

---

##### `Alignment`<sup>Required</sup> <a name="Alignment" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.alignment"></a>

```go
func Alignment() *string
```

- *Type:* *string

---

##### `Header`<sup>Required</sup> <a name="Header" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.header"></a>

```go
func Header() *string
```

- *Type:* *string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.textColor"></a>

```go
func TextColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentList <a name="PinpointInAppTemplateContentList" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) PinpointInAppTemplateContentList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get"></a>

```go
func Get(index *f64) PinpointInAppTemplateContentOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentOutputReference <a name="PinpointInAppTemplateContentOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) PinpointInAppTemplateContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig">PutBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig">PutHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn">PutPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn">PutSecondaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig">ResetBodyConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig">ResetHeaderConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl">ResetImageUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn">ResetPrimaryBtn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn">ResetSecondaryBtn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBodyConfig` <a name="PutBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig"></a>

```go
func PutBodyConfig(value PinpointInAppTemplateContentBodyConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putBodyConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfig">PinpointInAppTemplateContentBodyConfig</a>

---

##### `PutHeaderConfig` <a name="PutHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig"></a>

```go
func PutHeaderConfig(value PinpointInAppTemplateContentHeaderConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putHeaderConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfig">PinpointInAppTemplateContentHeaderConfig</a>

---

##### `PutPrimaryBtn` <a name="PutPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn"></a>

```go
func PutPrimaryBtn(value PinpointInAppTemplateContentPrimaryBtn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putPrimaryBtn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtn">PinpointInAppTemplateContentPrimaryBtn</a>

---

##### `PutSecondaryBtn` <a name="PutSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn"></a>

```go
func PutSecondaryBtn(value PinpointInAppTemplateContentSecondaryBtn)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.putSecondaryBtn.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtn">PinpointInAppTemplateContentSecondaryBtn</a>

---

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBackgroundColor"></a>

```go
func ResetBackgroundColor()
```

##### `ResetBodyConfig` <a name="ResetBodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetBodyConfig"></a>

```go
func ResetBodyConfig()
```

##### `ResetHeaderConfig` <a name="ResetHeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetHeaderConfig"></a>

```go
func ResetHeaderConfig()
```

##### `ResetImageUrl` <a name="ResetImageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetImageUrl"></a>

```go
func ResetImageUrl()
```

##### `ResetPrimaryBtn` <a name="ResetPrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetPrimaryBtn"></a>

```go
func ResetPrimaryBtn()
```

##### `ResetSecondaryBtn` <a name="ResetSecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.resetSecondaryBtn"></a>

```go
func ResetSecondaryBtn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig">BodyConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig">HeaderConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn">PrimaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn">SecondaryBtn</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput">BodyConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput">HeaderConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput">ImageUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput">PrimaryBtnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput">SecondaryBtnInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl">ImageUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BodyConfig`<sup>Required</sup> <a name="BodyConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfig"></a>

```go
func BodyConfig() PinpointInAppTemplateContentBodyConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentBodyConfigOutputReference">PinpointInAppTemplateContentBodyConfigOutputReference</a>

---

##### `HeaderConfig`<sup>Required</sup> <a name="HeaderConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfig"></a>

```go
func HeaderConfig() PinpointInAppTemplateContentHeaderConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentHeaderConfigOutputReference">PinpointInAppTemplateContentHeaderConfigOutputReference</a>

---

##### `PrimaryBtn`<sup>Required</sup> <a name="PrimaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtn"></a>

```go
func PrimaryBtn() PinpointInAppTemplateContentPrimaryBtnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference">PinpointInAppTemplateContentPrimaryBtnOutputReference</a>

---

##### `SecondaryBtn`<sup>Required</sup> <a name="SecondaryBtn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtn"></a>

```go
func SecondaryBtn() PinpointInAppTemplateContentSecondaryBtnOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference">PinpointInAppTemplateContentSecondaryBtnOutputReference</a>

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColorInput"></a>

```go
func BackgroundColorInput() *string
```

- *Type:* *string

---

##### `BodyConfigInput`<sup>Optional</sup> <a name="BodyConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.bodyConfigInput"></a>

```go
func BodyConfigInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderConfigInput`<sup>Optional</sup> <a name="HeaderConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.headerConfigInput"></a>

```go
func HeaderConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ImageUrlInput`<sup>Optional</sup> <a name="ImageUrlInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrlInput"></a>

```go
func ImageUrlInput() *string
```

- *Type:* *string

---

##### `PrimaryBtnInput`<sup>Optional</sup> <a name="PrimaryBtnInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.primaryBtnInput"></a>

```go
func PrimaryBtnInput() interface{}
```

- *Type:* interface{}

---

##### `SecondaryBtnInput`<sup>Optional</sup> <a name="SecondaryBtnInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.secondaryBtnInput"></a>

```go
func SecondaryBtnInput() interface{}
```

- *Type:* interface{}

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.backgroundColor"></a>

```go
func BackgroundColor() *string
```

- *Type:* *string

---

##### `ImageUrl`<sup>Required</sup> <a name="ImageUrl" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.imageUrl"></a>

```go
func ImageUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentPrimaryBtnAndroidOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetButtonAction"></a>

```go
func ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.resetLink"></a>

```go
func ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```go
func ButtonActionInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius">ResetBorderRadius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```go
func ResetBackgroundColor()
```

##### `ResetBorderRadius` <a name="ResetBorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```go
func ResetBorderRadius()
```

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```go
func ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetLink"></a>

```go
func ResetLink()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```go
func ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput">BorderRadiusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput">TextColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius">BorderRadius</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor">TextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```go
func BackgroundColorInput() *string
```

- *Type:* *string

---

##### `BorderRadiusInput`<sup>Optional</sup> <a name="BorderRadiusInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```go
func BorderRadiusInput() *f64
```

- *Type:* *f64

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```go
func ButtonActionInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```go
func TextColorInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```go
func BackgroundColor() *string
```

- *Type:* *string

---

##### `BorderRadius`<sup>Required</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```go
func BorderRadius() *f64
```

- *Type:* *f64

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.textColor"></a>

```go
func TextColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentPrimaryBtnIosOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentPrimaryBtnIosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentPrimaryBtnIosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetButtonAction"></a>

```go
func ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.resetLink"></a>

```go
func ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonActionInput"></a>

```go
func ButtonActionInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentPrimaryBtnOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentPrimaryBtnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentPrimaryBtnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid">PutAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig">PutDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos">PutIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb">PutWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid">ResetAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig">ResetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos">ResetIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb">ResetWeb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndroid` <a name="PutAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid"></a>

```go
func PutAndroid(value PinpointInAppTemplateContentPrimaryBtnAndroid)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putAndroid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroid">PinpointInAppTemplateContentPrimaryBtnAndroid</a>

---

##### `PutDefaultConfig` <a name="PutDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig"></a>

```go
func PutDefaultConfig(value PinpointInAppTemplateContentPrimaryBtnDefaultConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfig">PinpointInAppTemplateContentPrimaryBtnDefaultConfig</a>

---

##### `PutIos` <a name="PutIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos"></a>

```go
func PutIos(value PinpointInAppTemplateContentPrimaryBtnIos)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putIos.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIos">PinpointInAppTemplateContentPrimaryBtnIos</a>

---

##### `PutWeb` <a name="PutWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb"></a>

```go
func PutWeb(value PinpointInAppTemplateContentPrimaryBtnWeb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWeb">PinpointInAppTemplateContentPrimaryBtnWeb</a>

---

##### `ResetAndroid` <a name="ResetAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetAndroid"></a>

```go
func ResetAndroid()
```

##### `ResetDefaultConfig` <a name="ResetDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetDefaultConfig"></a>

```go
func ResetDefaultConfig()
```

##### `ResetIos` <a name="ResetIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetIos"></a>

```go
func ResetIos()
```

##### `ResetWeb` <a name="ResetWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.resetWeb"></a>

```go
func ResetWeb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput">AndroidInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput">DefaultConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput">IosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput">WebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Android`<sup>Required</sup> <a name="Android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.android"></a>

```go
func Android() PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference">PinpointInAppTemplateContentPrimaryBtnAndroidOutputReference</a>

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfig"></a>

```go
func DefaultConfig() PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentPrimaryBtnDefaultConfigOutputReference</a>

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.ios"></a>

```go
func Ios() PinpointInAppTemplateContentPrimaryBtnIosOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnIosOutputReference">PinpointInAppTemplateContentPrimaryBtnIosOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.web"></a>

```go
func Web() PinpointInAppTemplateContentPrimaryBtnWebOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference">PinpointInAppTemplateContentPrimaryBtnWebOutputReference</a>

---

##### `AndroidInput`<sup>Optional</sup> <a name="AndroidInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.androidInput"></a>

```go
func AndroidInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultConfigInput`<sup>Optional</sup> <a name="DefaultConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.defaultConfigInput"></a>

```go
func DefaultConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IosInput`<sup>Optional</sup> <a name="IosInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.iosInput"></a>

```go
func IosInput() interface{}
```

- *Type:* interface{}

---

##### `WebInput`<sup>Optional</sup> <a name="WebInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.webInput"></a>

```go
func WebInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentPrimaryBtnWebOutputReference <a name="PinpointInAppTemplateContentPrimaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentPrimaryBtnWebOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentPrimaryBtnWebOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetButtonAction"></a>

```go
func ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.resetLink"></a>

```go
func ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonActionInput"></a>

```go
func ButtonActionInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentPrimaryBtnWebOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentSecondaryBtnAndroidOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetButtonAction"></a>

```go
func ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.resetLink"></a>

```go
func ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonActionInput"></a>

```go
func ButtonActionInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor">ResetBackgroundColor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius">ResetBorderRadius</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink">ResetLink</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText">ResetText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor">ResetTextColor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBackgroundColor` <a name="ResetBackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBackgroundColor"></a>

```go
func ResetBackgroundColor()
```

##### `ResetBorderRadius` <a name="ResetBorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetBorderRadius"></a>

```go
func ResetBorderRadius()
```

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetButtonAction"></a>

```go
func ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetLink"></a>

```go
func ResetLink()
```

##### `ResetText` <a name="ResetText" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetText"></a>

```go
func ResetText()
```

##### `ResetTextColor` <a name="ResetTextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.resetTextColor"></a>

```go
func ResetTextColor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput">BackgroundColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput">BorderRadiusInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput">TextColorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput">TextInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor">BackgroundColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius">BorderRadius</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text">Text</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor">TextColor</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BackgroundColorInput`<sup>Optional</sup> <a name="BackgroundColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColorInput"></a>

```go
func BackgroundColorInput() *string
```

- *Type:* *string

---

##### `BorderRadiusInput`<sup>Optional</sup> <a name="BorderRadiusInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadiusInput"></a>

```go
func BorderRadiusInput() *f64
```

- *Type:* *f64

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonActionInput"></a>

```go
func ButtonActionInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `TextColorInput`<sup>Optional</sup> <a name="TextColorInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColorInput"></a>

```go
func TextColorInput() *string
```

- *Type:* *string

---

##### `TextInput`<sup>Optional</sup> <a name="TextInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textInput"></a>

```go
func TextInput() *string
```

- *Type:* *string

---

##### `BackgroundColor`<sup>Required</sup> <a name="BackgroundColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.backgroundColor"></a>

```go
func BackgroundColor() *string
```

- *Type:* *string

---

##### `BorderRadius`<sup>Required</sup> <a name="BorderRadius" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.borderRadius"></a>

```go
func BorderRadius() *f64
```

- *Type:* *f64

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `Text`<sup>Required</sup> <a name="Text" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.text"></a>

```go
func Text() *string
```

- *Type:* *string

---

##### `TextColor`<sup>Required</sup> <a name="TextColor" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.textColor"></a>

```go
func TextColor() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentSecondaryBtnIosOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnIosOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentSecondaryBtnIosOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentSecondaryBtnIosOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetButtonAction"></a>

```go
func ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.resetLink"></a>

```go
func ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonActionInput"></a>

```go
func ButtonActionInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentSecondaryBtnOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentSecondaryBtnOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentSecondaryBtnOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid">PutAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig">PutDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos">PutIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb">PutWeb</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid">ResetAndroid</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig">ResetDefaultConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos">ResetIos</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb">ResetWeb</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAndroid` <a name="PutAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid"></a>

```go
func PutAndroid(value PinpointInAppTemplateContentSecondaryBtnAndroid)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putAndroid.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroid">PinpointInAppTemplateContentSecondaryBtnAndroid</a>

---

##### `PutDefaultConfig` <a name="PutDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig"></a>

```go
func PutDefaultConfig(value PinpointInAppTemplateContentSecondaryBtnDefaultConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putDefaultConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfig">PinpointInAppTemplateContentSecondaryBtnDefaultConfig</a>

---

##### `PutIos` <a name="PutIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos"></a>

```go
func PutIos(value PinpointInAppTemplateContentSecondaryBtnIos)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putIos.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIos">PinpointInAppTemplateContentSecondaryBtnIos</a>

---

##### `PutWeb` <a name="PutWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb"></a>

```go
func PutWeb(value PinpointInAppTemplateContentSecondaryBtnWeb)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.putWeb.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWeb">PinpointInAppTemplateContentSecondaryBtnWeb</a>

---

##### `ResetAndroid` <a name="ResetAndroid" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetAndroid"></a>

```go
func ResetAndroid()
```

##### `ResetDefaultConfig` <a name="ResetDefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetDefaultConfig"></a>

```go
func ResetDefaultConfig()
```

##### `ResetIos` <a name="ResetIos" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetIos"></a>

```go
func ResetIos()
```

##### `ResetWeb` <a name="ResetWeb" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.resetWeb"></a>

```go
func ResetWeb()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android">Android</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig">DefaultConfig</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios">Ios</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web">Web</a></code> | <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput">AndroidInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput">DefaultConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput">IosInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput">WebInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Android`<sup>Required</sup> <a name="Android" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.android"></a>

```go
func Android() PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference">PinpointInAppTemplateContentSecondaryBtnAndroidOutputReference</a>

---

##### `DefaultConfig`<sup>Required</sup> <a name="DefaultConfig" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfig"></a>

```go
func DefaultConfig() PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference">PinpointInAppTemplateContentSecondaryBtnDefaultConfigOutputReference</a>

---

##### `Ios`<sup>Required</sup> <a name="Ios" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.ios"></a>

```go
func Ios() PinpointInAppTemplateContentSecondaryBtnIosOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnIosOutputReference">PinpointInAppTemplateContentSecondaryBtnIosOutputReference</a>

---

##### `Web`<sup>Required</sup> <a name="Web" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.web"></a>

```go
func Web() PinpointInAppTemplateContentSecondaryBtnWebOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference">PinpointInAppTemplateContentSecondaryBtnWebOutputReference</a>

---

##### `AndroidInput`<sup>Optional</sup> <a name="AndroidInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.androidInput"></a>

```go
func AndroidInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultConfigInput`<sup>Optional</sup> <a name="DefaultConfigInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.defaultConfigInput"></a>

```go
func DefaultConfigInput() interface{}
```

- *Type:* interface{}

---

##### `IosInput`<sup>Optional</sup> <a name="IosInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.iosInput"></a>

```go
func IosInput() interface{}
```

- *Type:* interface{}

---

##### `WebInput`<sup>Optional</sup> <a name="WebInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.webInput"></a>

```go
func WebInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### PinpointInAppTemplateContentSecondaryBtnWebOutputReference <a name="PinpointInAppTemplateContentSecondaryBtnWebOutputReference" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pinpointinapptemplate"

pinpointinapptemplate.NewPinpointInAppTemplateContentSecondaryBtnWebOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PinpointInAppTemplateContentSecondaryBtnWebOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction">ResetButtonAction</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink">ResetLink</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetButtonAction` <a name="ResetButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetButtonAction"></a>

```go
func ResetButtonAction()
```

##### `ResetLink` <a name="ResetLink" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.resetLink"></a>

```go
func ResetLink()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput">ButtonActionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput">LinkInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction">ButtonAction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link">Link</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ButtonActionInput`<sup>Optional</sup> <a name="ButtonActionInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonActionInput"></a>

```go
func ButtonActionInput() *string
```

- *Type:* *string

---

##### `LinkInput`<sup>Optional</sup> <a name="LinkInput" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.linkInput"></a>

```go
func LinkInput() *string
```

- *Type:* *string

---

##### `ButtonAction`<sup>Required</sup> <a name="ButtonAction" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.buttonAction"></a>

```go
func ButtonAction() *string
```

- *Type:* *string

---

##### `Link`<sup>Required</sup> <a name="Link" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.link"></a>

```go
func Link() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pinpointInAppTemplate.PinpointInAppTemplateContentSecondaryBtnWebOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



