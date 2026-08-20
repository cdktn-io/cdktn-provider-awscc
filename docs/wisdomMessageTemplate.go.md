# `wisdomMessageTemplate` Submodule <a name="`wisdomMessageTemplate` Submodule" id="@cdktn/provider-awscc.wisdomMessageTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### WisdomMessageTemplate <a name="WisdomMessageTemplate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template awscc_wisdom_message_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplate(scope Construct, id *string, config WisdomMessageTemplateConfig) WisdomMessageTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig">WisdomMessageTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig">WisdomMessageTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent">PutContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes">PutDefaultAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration">PutGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments">PutMessageTemplateAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDefaultAttributes">ResetDefaultAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetGroupingConfiguration">ResetGroupingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetLanguage">ResetLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetMessageTemplateAttachments">ResetMessageTemplateAttachments</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContent` <a name="PutContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent"></a>

```go
func PutContent(value WisdomMessageTemplateContent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

---

##### `PutDefaultAttributes` <a name="PutDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes"></a>

```go
func PutDefaultAttributes(value WisdomMessageTemplateDefaultAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putDefaultAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

---

##### `PutGroupingConfiguration` <a name="PutGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration"></a>

```go
func PutGroupingConfiguration(value WisdomMessageTemplateGroupingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putGroupingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

---

##### `PutMessageTemplateAttachments` <a name="PutMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments"></a>

```go
func PutMessageTemplateAttachments(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putMessageTemplateAttachments.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultAttributes` <a name="ResetDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDefaultAttributes"></a>

```go
func ResetDefaultAttributes()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetGroupingConfiguration` <a name="ResetGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetGroupingConfiguration"></a>

```go
func ResetGroupingConfiguration()
```

##### `ResetLanguage` <a name="ResetLanguage" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetLanguage"></a>

```go
func ResetLanguage()
```

##### `ResetMessageTemplateAttachments` <a name="ResetMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetMessageTemplateAttachments"></a>

```go
func ResetMessageTemplateAttachments()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a WisdomMessageTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.WisdomMessageTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.WisdomMessageTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.WisdomMessageTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.WisdomMessageTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a WisdomMessageTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the WisdomMessageTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing WisdomMessageTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the WisdomMessageTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference">WisdomMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributes">DefaultAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference">WisdomMessageTemplateDefaultAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfiguration">GroupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference">WisdomMessageTemplateGroupingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateArn">MessageTemplateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachments">MessageTemplateAttachments</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList">WisdomMessageTemplateMessageTemplateAttachmentsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateContentSha256">MessageTemplateContentSha256</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateId">MessageTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList">WisdomMessageTemplateTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtypeInput">ChannelSubtypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.contentInput">ContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributesInput">DefaultAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfigurationInput">GroupingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArnInput">KnowledgeBaseArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.languageInput">LanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachmentsInput">MessageTemplateAttachmentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtype">ChannelSubtype</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArn">KnowledgeBaseArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.language">Language</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.content"></a>

```go
func Content() WisdomMessageTemplateContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference">WisdomMessageTemplateContentOutputReference</a>

---

##### `DefaultAttributes`<sup>Required</sup> <a name="DefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributes"></a>

```go
func DefaultAttributes() WisdomMessageTemplateDefaultAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference">WisdomMessageTemplateDefaultAttributesOutputReference</a>

---

##### `GroupingConfiguration`<sup>Required</sup> <a name="GroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfiguration"></a>

```go
func GroupingConfiguration() WisdomMessageTemplateGroupingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference">WisdomMessageTemplateGroupingConfigurationOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `MessageTemplateArn`<sup>Required</sup> <a name="MessageTemplateArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateArn"></a>

```go
func MessageTemplateArn() *string
```

- *Type:* *string

---

##### `MessageTemplateAttachments`<sup>Required</sup> <a name="MessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachments"></a>

```go
func MessageTemplateAttachments() WisdomMessageTemplateMessageTemplateAttachmentsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList">WisdomMessageTemplateMessageTemplateAttachmentsList</a>

---

##### `MessageTemplateContentSha256`<sup>Required</sup> <a name="MessageTemplateContentSha256" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateContentSha256"></a>

```go
func MessageTemplateContentSha256() *string
```

- *Type:* *string

---

##### `MessageTemplateId`<sup>Required</sup> <a name="MessageTemplateId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateId"></a>

```go
func MessageTemplateId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tags"></a>

```go
func Tags() WisdomMessageTemplateTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList">WisdomMessageTemplateTagsList</a>

---

##### `ChannelSubtypeInput`<sup>Optional</sup> <a name="ChannelSubtypeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtypeInput"></a>

```go
func ChannelSubtypeInput() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.contentInput"></a>

```go
func ContentInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultAttributesInput`<sup>Optional</sup> <a name="DefaultAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.defaultAttributesInput"></a>

```go
func DefaultAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `GroupingConfigurationInput`<sup>Optional</sup> <a name="GroupingConfigurationInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.groupingConfigurationInput"></a>

```go
func GroupingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `KnowledgeBaseArnInput`<sup>Optional</sup> <a name="KnowledgeBaseArnInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArnInput"></a>

```go
func KnowledgeBaseArnInput() *string
```

- *Type:* *string

---

##### `LanguageInput`<sup>Optional</sup> <a name="LanguageInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.languageInput"></a>

```go
func LanguageInput() *string
```

- *Type:* *string

---

##### `MessageTemplateAttachmentsInput`<sup>Optional</sup> <a name="MessageTemplateAttachmentsInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.messageTemplateAttachmentsInput"></a>

```go
func MessageTemplateAttachmentsInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ChannelSubtype`<sup>Required</sup> <a name="ChannelSubtype" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.channelSubtype"></a>

```go
func ChannelSubtype() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KnowledgeBaseArn`<sup>Required</sup> <a name="KnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.knowledgeBaseArn"></a>

```go
func KnowledgeBaseArn() *string
```

- *Type:* *string

---

##### `Language`<sup>Required</sup> <a name="Language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.language"></a>

```go
func Language() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### WisdomMessageTemplateConfig <a name="WisdomMessageTemplateConfig" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ChannelSubtype: *string,
	Content: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateContent,
	KnowledgeBaseArn: *string,
	Name: *string,
	DefaultAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes,
	Description: *string,
	GroupingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration,
	Language: *string,
	MessageTemplateAttachments: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.channelSubtype">ChannelSubtype</a></code> | <code>*string</code> | The channel subtype this message template applies to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.content">Content</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a></code> | The content of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.knowledgeBaseArn">KnowledgeBaseArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.name">Name</a></code> | <code>*string</code> | The name of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.defaultAttributes">DefaultAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a></code> | An object that specifies the default values to use for variables in the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.description">Description</a></code> | <code>*string</code> | The description of the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.groupingConfiguration">GroupingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a></code> | The configuration information of the user groups that the message template is accessible to. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.language">Language</a></code> | <code>*string</code> | The language code value for the language in which the message template is written. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.messageTemplateAttachments">MessageTemplateAttachments</a></code> | <code>interface{}</code> | List of message template attachments. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ChannelSubtype`<sup>Required</sup> <a name="ChannelSubtype" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.channelSubtype"></a>

```go
ChannelSubtype *string
```

- *Type:* *string

The channel subtype this message template applies to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#channel_subtype WisdomMessageTemplate#channel_subtype}

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.content"></a>

```go
Content WisdomMessageTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent">WisdomMessageTemplateContent</a>

The content of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}

---

##### `KnowledgeBaseArn`<sup>Required</sup> <a name="KnowledgeBaseArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.knowledgeBaseArn"></a>

```go
KnowledgeBaseArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the knowledge base to which the message template belongs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#knowledge_base_arn WisdomMessageTemplate#knowledge_base_arn}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `DefaultAttributes`<sup>Optional</sup> <a name="DefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.defaultAttributes"></a>

```go
DefaultAttributes WisdomMessageTemplateDefaultAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes">WisdomMessageTemplateDefaultAttributes</a>

An object that specifies the default values to use for variables in the message template.

This object contains different categories of key-value pairs. Each key defines a variable or placeholder in the message template. The corresponding value defines the default value for that variable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#default_attributes WisdomMessageTemplate#default_attributes}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#description WisdomMessageTemplate#description}

---

##### `GroupingConfiguration`<sup>Optional</sup> <a name="GroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.groupingConfiguration"></a>

```go
GroupingConfiguration WisdomMessageTemplateGroupingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration">WisdomMessageTemplateGroupingConfiguration</a>

The configuration information of the user groups that the message template is accessible to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#grouping_configuration WisdomMessageTemplate#grouping_configuration}

---

##### `Language`<sup>Optional</sup> <a name="Language" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.language"></a>

```go
Language *string
```

- *Type:* *string

The language code value for the language in which the message template is written.

The supported language codes include de_DE, en_US, es_ES, fr_FR, id_ID, it_IT, ja_JP, ko_KR, pt_BR, zh_CN, zh_TW

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#language WisdomMessageTemplate#language}

---

##### `MessageTemplateAttachments`<sup>Optional</sup> <a name="MessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.messageTemplateAttachments"></a>

```go
MessageTemplateAttachments interface{}
```

- *Type:* interface{}

List of message template attachments.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#message_template_attachments WisdomMessageTemplate#message_template_attachments}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags used to organize, track, or control access for this resource. For example, { "tags": {"key1":"value1", "key2":"value2"} }.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#tags WisdomMessageTemplate#tags}

---

### WisdomMessageTemplateContent <a name="WisdomMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateContent {
	EmailMessageTemplateContent: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent,
	SmsMessageTemplateContent: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.emailMessageTemplateContent">EmailMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a></code> | The content of message template that applies to email channel subtype. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.smsMessageTemplateContent">SmsMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a></code> | The content of message template that applies to SMS channel subtype. |

---

##### `EmailMessageTemplateContent`<sup>Optional</sup> <a name="EmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.emailMessageTemplateContent"></a>

```go
EmailMessageTemplateContent WisdomMessageTemplateContentEmailMessageTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

The content of message template that applies to email channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#email_message_template_content WisdomMessageTemplate#email_message_template_content}

---

##### `SmsMessageTemplateContent`<sup>Optional</sup> <a name="SmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContent.property.smsMessageTemplateContent"></a>

```go
SmsMessageTemplateContent WisdomMessageTemplateContentSmsMessageTemplateContent
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

The content of message template that applies to SMS channel subtype.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#sms_message_template_content WisdomMessageTemplate#sms_message_template_content}

---

### WisdomMessageTemplateContentEmailMessageTemplateContent <a name="WisdomMessageTemplateContentEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateContentEmailMessageTemplateContent {
	Body: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody,
	Headers: interface{},
	Subject: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a></code> | The body to use in email messages. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.headers">Headers</a></code> | <code>interface{}</code> | The email headers to include in email messages. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.subject">Subject</a></code> | <code>*string</code> | The subject line, or title, to use in email messages. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.body"></a>

```go
Body WisdomMessageTemplateContentEmailMessageTemplateContentBody
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

The body to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

##### `Headers`<sup>Optional</sup> <a name="Headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.headers"></a>

```go
Headers interface{}
```

- *Type:* interface{}

The email headers to include in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#headers WisdomMessageTemplate#headers}

---

##### `Subject`<sup>Optional</sup> <a name="Subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent.property.subject"></a>

```go
Subject *string
```

- *Type:* *string

The subject line, or title, to use in email messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#subject WisdomMessageTemplate#subject}

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBody <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody {
	Html: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml,
	PlainText: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.html">Html</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a></code> | The message body, in HTML format, to use in email messages that are based on the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a></code> | The message body, in plain text format, to use in email messages that are based on the message template. |

---

##### `Html`<sup>Optional</sup> <a name="Html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.html"></a>

```go
Html WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

The message body, in HTML format, to use in email messages that are based on the message template.

We recommend using HTML format for email clients that render HTML content. You can include links, formatted text, and more in an HTML message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#html WisdomMessageTemplate#html}

---

##### `PlainText`<sup>Optional</sup> <a name="PlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody.property.plainText"></a>

```go
PlainText WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

The message body, in plain text format, to use in email messages that are based on the message template.

We recommend using plain text format for email clients that don't render HTML content and clients that are connected to high-latency networks, such as mobile devices.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateContentEmailMessageTemplateContentHeaders <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders {
	Name: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.name">Name</a></code> | <code>*string</code> | The name of the email header. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.value">Value</a></code> | <code>*string</code> | The value of the email header. |

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the email header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeaders.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the email header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#value WisdomMessageTemplate#value}

---

### WisdomMessageTemplateContentSmsMessageTemplateContent <a name="WisdomMessageTemplateContentSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateContentSmsMessageTemplateContent {
	Body: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a></code> | The body to use in SMS messages. |

---

##### `Body`<sup>Optional</sup> <a name="Body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent.property.body"></a>

```go
Body WisdomMessageTemplateContentSmsMessageTemplateContentBody
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

The body to use in SMS messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#body WisdomMessageTemplate#body}

---

### WisdomMessageTemplateContentSmsMessageTemplateContentBody <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody {
	PlainText: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a></code> | The container of message template body. |

---

##### `PlainText`<sup>Optional</sup> <a name="PlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody.property.plainText"></a>

```go
PlainText WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

The container of message template body.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#plain_text WisdomMessageTemplate#plain_text}

---

### WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText {
	Content: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.property.content">Content</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}. |

---

##### `Content`<sup>Optional</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText.property.content"></a>

```go
Content *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#content WisdomMessageTemplate#content}.

---

### WisdomMessageTemplateDefaultAttributes <a name="WisdomMessageTemplateDefaultAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateDefaultAttributes {
	AgentAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes,
	CustomAttributes: *map[string]*string,
	CustomerProfileAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes,
	SystemAttributes: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.agentAttributes">AgentAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a></code> | The agent attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | The custom attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customerProfileAttributes">CustomerProfileAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a></code> | The customer profile attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.systemAttributes">SystemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a></code> | The system attributes that are used with the message template. |

---

##### `AgentAttributes`<sup>Optional</sup> <a name="AgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.agentAttributes"></a>

```go
AgentAttributes WisdomMessageTemplateDefaultAttributesAgentAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

The agent attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#agent_attributes WisdomMessageTemplate#agent_attributes}

---

##### `CustomAttributes`<sup>Optional</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customAttributes"></a>

```go
CustomAttributes *map[string]*string
```

- *Type:* *map[string]*string

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#custom_attributes WisdomMessageTemplate#custom_attributes}

---

##### `CustomerProfileAttributes`<sup>Optional</sup> <a name="CustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.customerProfileAttributes"></a>

```go
CustomerProfileAttributes WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

The customer profile attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#customer_profile_attributes WisdomMessageTemplate#customer_profile_attributes}

---

##### `SystemAttributes`<sup>Optional</sup> <a name="SystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributes.property.systemAttributes"></a>

```go
SystemAttributes WisdomMessageTemplateDefaultAttributesSystemAttributes
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

The system attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#system_attributes WisdomMessageTemplate#system_attributes}

---

### WisdomMessageTemplateDefaultAttributesAgentAttributes <a name="WisdomMessageTemplateDefaultAttributesAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes {
	FirstName: *string,
	LastName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.firstName">FirstName</a></code> | <code>*string</code> | The agent?s first name as entered in their Amazon Connect user account. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.lastName">LastName</a></code> | <code>*string</code> | The agent?s last name as entered in their Amazon Connect user account. |

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

The agent?s first name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

The agent?s last name as entered in their Amazon Connect user account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

### WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes <a name="WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes {
	AccountNumber: *string,
	AdditionalInformation: *string,
	Address1: *string,
	Address2: *string,
	Address3: *string,
	Address4: *string,
	BillingAddress1: *string,
	BillingAddress2: *string,
	BillingAddress3: *string,
	BillingAddress4: *string,
	BillingCity: *string,
	BillingCountry: *string,
	BillingCounty: *string,
	BillingPostalCode: *string,
	BillingProvince: *string,
	BillingState: *string,
	BirthDate: *string,
	BusinessEmailAddress: *string,
	BusinessName: *string,
	BusinessPhoneNumber: *string,
	City: *string,
	Country: *string,
	County: *string,
	Custom: *map[string]*string,
	EmailAddress: *string,
	FirstName: *string,
	Gender: *string,
	HomePhoneNumber: *string,
	LastName: *string,
	MailingAddress1: *string,
	MailingAddress2: *string,
	MailingAddress3: *string,
	MailingAddress4: *string,
	MailingCity: *string,
	MailingCountry: *string,
	MailingCounty: *string,
	MailingPostalCode: *string,
	MailingProvince: *string,
	MailingState: *string,
	MiddleName: *string,
	MobilePhoneNumber: *string,
	PartyType: *string,
	PhoneNumber: *string,
	PostalCode: *string,
	ProfileArn: *string,
	ProfileId: *string,
	Province: *string,
	ShippingAddress1: *string,
	ShippingAddress2: *string,
	ShippingAddress3: *string,
	ShippingAddress4: *string,
	ShippingCity: *string,
	ShippingCountry: *string,
	ShippingCounty: *string,
	ShippingPostalCode: *string,
	ShippingProvince: *string,
	ShippingState: *string,
	State: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.accountNumber">AccountNumber</a></code> | <code>*string</code> | A unique account number that you have given to the customer. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.additionalInformation">AdditionalInformation</a></code> | <code>*string</code> | Any additional information relevant to the customer's profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address1">Address1</a></code> | <code>*string</code> | The first line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address2">Address2</a></code> | <code>*string</code> | The second line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address3">Address3</a></code> | <code>*string</code> | The third line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address4">Address4</a></code> | <code>*string</code> | The fourth line of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress1">BillingAddress1</a></code> | <code>*string</code> | The first line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress2">BillingAddress2</a></code> | <code>*string</code> | The second line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress3">BillingAddress3</a></code> | <code>*string</code> | The third line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress4">BillingAddress4</a></code> | <code>*string</code> | The fourth line of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCity">BillingCity</a></code> | <code>*string</code> | The city of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCountry">BillingCountry</a></code> | <code>*string</code> | The country of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCounty">BillingCounty</a></code> | <code>*string</code> | The county of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingPostalCode">BillingPostalCode</a></code> | <code>*string</code> | The postal code of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingProvince">BillingProvince</a></code> | <code>*string</code> | The province of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingState">BillingState</a></code> | <code>*string</code> | The state of a customer?s billing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.birthDate">BirthDate</a></code> | <code>*string</code> | The customer's birth date. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessEmailAddress">BusinessEmailAddress</a></code> | <code>*string</code> | The customer's business email address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessName">BusinessName</a></code> | <code>*string</code> | The name of the customer's business. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessPhoneNumber">BusinessPhoneNumber</a></code> | <code>*string</code> | The customer's business phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.city">City</a></code> | <code>*string</code> | The city in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.country">Country</a></code> | <code>*string</code> | The country in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.county">County</a></code> | <code>*string</code> | The county in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.custom">Custom</a></code> | <code>*map[string]*string</code> | The custom attributes that are used with the message template. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | The customer's email address, which has not been specified as a personal or business address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.firstName">FirstName</a></code> | <code>*string</code> | The customer's first name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.gender">Gender</a></code> | <code>*string</code> | The customer's gender. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.homePhoneNumber">HomePhoneNumber</a></code> | <code>*string</code> | The customer's home phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.lastName">LastName</a></code> | <code>*string</code> | The customer's last name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress1">MailingAddress1</a></code> | <code>*string</code> | The first line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress2">MailingAddress2</a></code> | <code>*string</code> | The second line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress3">MailingAddress3</a></code> | <code>*string</code> | The third line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress4">MailingAddress4</a></code> | <code>*string</code> | The fourth line of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCity">MailingCity</a></code> | <code>*string</code> | The city of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCountry">MailingCountry</a></code> | <code>*string</code> | The country of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCounty">MailingCounty</a></code> | <code>*string</code> | The county of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingPostalCode">MailingPostalCode</a></code> | <code>*string</code> | The postal code of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingProvince">MailingProvince</a></code> | <code>*string</code> | The province of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingState">MailingState</a></code> | <code>*string</code> | The state of a customer?s mailing address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.middleName">MiddleName</a></code> | <code>*string</code> | The customer's middle name. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mobilePhoneNumber">MobilePhoneNumber</a></code> | <code>*string</code> | The customer's mobile phone number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.partyType">PartyType</a></code> | <code>*string</code> | The customer's party type. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | The customer's phone number, which has not been specified as a mobile, home, or business number. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.postalCode">PostalCode</a></code> | <code>*string</code> | The postal code of a customer address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileArn">ProfileArn</a></code> | <code>*string</code> | The ARN of a customer profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileId">ProfileId</a></code> | <code>*string</code> | The unique identifier of a customer profile. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.province">Province</a></code> | <code>*string</code> | The province in which a customer lives. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress1">ShippingAddress1</a></code> | <code>*string</code> | The first line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress2">ShippingAddress2</a></code> | <code>*string</code> | The second line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress3">ShippingAddress3</a></code> | <code>*string</code> | The third line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress4">ShippingAddress4</a></code> | <code>*string</code> | The fourth line of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCity">ShippingCity</a></code> | <code>*string</code> | The city of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCountry">ShippingCountry</a></code> | <code>*string</code> | The country of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCounty">ShippingCounty</a></code> | <code>*string</code> | The county of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingPostalCode">ShippingPostalCode</a></code> | <code>*string</code> | The postal code of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingProvince">ShippingProvince</a></code> | <code>*string</code> | The province of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingState">ShippingState</a></code> | <code>*string</code> | The state of a customer?s shipping address. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.state">State</a></code> | <code>*string</code> | The state in which a customer lives. |

---

##### `AccountNumber`<sup>Optional</sup> <a name="AccountNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.accountNumber"></a>

```go
AccountNumber *string
```

- *Type:* *string

A unique account number that you have given to the customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#account_number WisdomMessageTemplate#account_number}

---

##### `AdditionalInformation`<sup>Optional</sup> <a name="AdditionalInformation" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.additionalInformation"></a>

```go
AdditionalInformation *string
```

- *Type:* *string

Any additional information relevant to the customer's profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#additional_information WisdomMessageTemplate#additional_information}

---

##### `Address1`<sup>Optional</sup> <a name="Address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address1"></a>

```go
Address1 *string
```

- *Type:* *string

The first line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_1 WisdomMessageTemplate#address_1}

---

##### `Address2`<sup>Optional</sup> <a name="Address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address2"></a>

```go
Address2 *string
```

- *Type:* *string

The second line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_2 WisdomMessageTemplate#address_2}

---

##### `Address3`<sup>Optional</sup> <a name="Address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address3"></a>

```go
Address3 *string
```

- *Type:* *string

The third line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_3 WisdomMessageTemplate#address_3}

---

##### `Address4`<sup>Optional</sup> <a name="Address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.address4"></a>

```go
Address4 *string
```

- *Type:* *string

The fourth line of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address_4 WisdomMessageTemplate#address_4}

---

##### `BillingAddress1`<sup>Optional</sup> <a name="BillingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress1"></a>

```go
BillingAddress1 *string
```

- *Type:* *string

The first line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_1 WisdomMessageTemplate#billing_address_1}

---

##### `BillingAddress2`<sup>Optional</sup> <a name="BillingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress2"></a>

```go
BillingAddress2 *string
```

- *Type:* *string

The second line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_2 WisdomMessageTemplate#billing_address_2}

---

##### `BillingAddress3`<sup>Optional</sup> <a name="BillingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress3"></a>

```go
BillingAddress3 *string
```

- *Type:* *string

The third line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_3 WisdomMessageTemplate#billing_address_3}

---

##### `BillingAddress4`<sup>Optional</sup> <a name="BillingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingAddress4"></a>

```go
BillingAddress4 *string
```

- *Type:* *string

The fourth line of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_address_4 WisdomMessageTemplate#billing_address_4}

---

##### `BillingCity`<sup>Optional</sup> <a name="BillingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCity"></a>

```go
BillingCity *string
```

- *Type:* *string

The city of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_city WisdomMessageTemplate#billing_city}

---

##### `BillingCountry`<sup>Optional</sup> <a name="BillingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCountry"></a>

```go
BillingCountry *string
```

- *Type:* *string

The country of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_country WisdomMessageTemplate#billing_country}

---

##### `BillingCounty`<sup>Optional</sup> <a name="BillingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingCounty"></a>

```go
BillingCounty *string
```

- *Type:* *string

The county of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_county WisdomMessageTemplate#billing_county}

---

##### `BillingPostalCode`<sup>Optional</sup> <a name="BillingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingPostalCode"></a>

```go
BillingPostalCode *string
```

- *Type:* *string

The postal code of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_postal_code WisdomMessageTemplate#billing_postal_code}

---

##### `BillingProvince`<sup>Optional</sup> <a name="BillingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingProvince"></a>

```go
BillingProvince *string
```

- *Type:* *string

The province of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_province WisdomMessageTemplate#billing_province}

---

##### `BillingState`<sup>Optional</sup> <a name="BillingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.billingState"></a>

```go
BillingState *string
```

- *Type:* *string

The state of a customer?s billing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#billing_state WisdomMessageTemplate#billing_state}

---

##### `BirthDate`<sup>Optional</sup> <a name="BirthDate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.birthDate"></a>

```go
BirthDate *string
```

- *Type:* *string

The customer's birth date.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#birth_date WisdomMessageTemplate#birth_date}

---

##### `BusinessEmailAddress`<sup>Optional</sup> <a name="BusinessEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessEmailAddress"></a>

```go
BusinessEmailAddress *string
```

- *Type:* *string

The customer's business email address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#business_email_address WisdomMessageTemplate#business_email_address}

---

##### `BusinessName`<sup>Optional</sup> <a name="BusinessName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessName"></a>

```go
BusinessName *string
```

- *Type:* *string

The name of the customer's business.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#business_name WisdomMessageTemplate#business_name}

---

##### `BusinessPhoneNumber`<sup>Optional</sup> <a name="BusinessPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.businessPhoneNumber"></a>

```go
BusinessPhoneNumber *string
```

- *Type:* *string

The customer's business phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#business_phone_number WisdomMessageTemplate#business_phone_number}

---

##### `City`<sup>Optional</sup> <a name="City" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.city"></a>

```go
City *string
```

- *Type:* *string

The city in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#city WisdomMessageTemplate#city}

---

##### `Country`<sup>Optional</sup> <a name="Country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.country"></a>

```go
Country *string
```

- *Type:* *string

The country in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#country WisdomMessageTemplate#country}

---

##### `County`<sup>Optional</sup> <a name="County" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.county"></a>

```go
County *string
```

- *Type:* *string

The county in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#county WisdomMessageTemplate#county}

---

##### `Custom`<sup>Optional</sup> <a name="Custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.custom"></a>

```go
Custom *map[string]*string
```

- *Type:* *map[string]*string

The custom attributes that are used with the message template.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#custom WisdomMessageTemplate#custom}

---

##### `EmailAddress`<sup>Optional</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.emailAddress"></a>

```go
EmailAddress *string
```

- *Type:* *string

The customer's email address, which has not been specified as a personal or business address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#email_address WisdomMessageTemplate#email_address}

---

##### `FirstName`<sup>Optional</sup> <a name="FirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.firstName"></a>

```go
FirstName *string
```

- *Type:* *string

The customer's first name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#first_name WisdomMessageTemplate#first_name}

---

##### `Gender`<sup>Optional</sup> <a name="Gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.gender"></a>

```go
Gender *string
```

- *Type:* *string

The customer's gender.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#gender WisdomMessageTemplate#gender}

---

##### `HomePhoneNumber`<sup>Optional</sup> <a name="HomePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.homePhoneNumber"></a>

```go
HomePhoneNumber *string
```

- *Type:* *string

The customer's home phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#home_phone_number WisdomMessageTemplate#home_phone_number}

---

##### `LastName`<sup>Optional</sup> <a name="LastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.lastName"></a>

```go
LastName *string
```

- *Type:* *string

The customer's last name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#last_name WisdomMessageTemplate#last_name}

---

##### `MailingAddress1`<sup>Optional</sup> <a name="MailingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress1"></a>

```go
MailingAddress1 *string
```

- *Type:* *string

The first line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_1 WisdomMessageTemplate#mailing_address_1}

---

##### `MailingAddress2`<sup>Optional</sup> <a name="MailingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress2"></a>

```go
MailingAddress2 *string
```

- *Type:* *string

The second line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_2 WisdomMessageTemplate#mailing_address_2}

---

##### `MailingAddress3`<sup>Optional</sup> <a name="MailingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress3"></a>

```go
MailingAddress3 *string
```

- *Type:* *string

The third line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_3 WisdomMessageTemplate#mailing_address_3}

---

##### `MailingAddress4`<sup>Optional</sup> <a name="MailingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingAddress4"></a>

```go
MailingAddress4 *string
```

- *Type:* *string

The fourth line of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_address_4 WisdomMessageTemplate#mailing_address_4}

---

##### `MailingCity`<sup>Optional</sup> <a name="MailingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCity"></a>

```go
MailingCity *string
```

- *Type:* *string

The city of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_city WisdomMessageTemplate#mailing_city}

---

##### `MailingCountry`<sup>Optional</sup> <a name="MailingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCountry"></a>

```go
MailingCountry *string
```

- *Type:* *string

The country of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_country WisdomMessageTemplate#mailing_country}

---

##### `MailingCounty`<sup>Optional</sup> <a name="MailingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingCounty"></a>

```go
MailingCounty *string
```

- *Type:* *string

The county of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_county WisdomMessageTemplate#mailing_county}

---

##### `MailingPostalCode`<sup>Optional</sup> <a name="MailingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingPostalCode"></a>

```go
MailingPostalCode *string
```

- *Type:* *string

The postal code of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_postal_code WisdomMessageTemplate#mailing_postal_code}

---

##### `MailingProvince`<sup>Optional</sup> <a name="MailingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingProvince"></a>

```go
MailingProvince *string
```

- *Type:* *string

The province of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_province WisdomMessageTemplate#mailing_province}

---

##### `MailingState`<sup>Optional</sup> <a name="MailingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mailingState"></a>

```go
MailingState *string
```

- *Type:* *string

The state of a customer?s mailing address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mailing_state WisdomMessageTemplate#mailing_state}

---

##### `MiddleName`<sup>Optional</sup> <a name="MiddleName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.middleName"></a>

```go
MiddleName *string
```

- *Type:* *string

The customer's middle name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#middle_name WisdomMessageTemplate#middle_name}

---

##### `MobilePhoneNumber`<sup>Optional</sup> <a name="MobilePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.mobilePhoneNumber"></a>

```go
MobilePhoneNumber *string
```

- *Type:* *string

The customer's mobile phone number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#mobile_phone_number WisdomMessageTemplate#mobile_phone_number}

---

##### `PartyType`<sup>Optional</sup> <a name="PartyType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.partyType"></a>

```go
PartyType *string
```

- *Type:* *string

The customer's party type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#party_type WisdomMessageTemplate#party_type}

---

##### `PhoneNumber`<sup>Optional</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.phoneNumber"></a>

```go
PhoneNumber *string
```

- *Type:* *string

The customer's phone number, which has not been specified as a mobile, home, or business number.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#phone_number WisdomMessageTemplate#phone_number}

---

##### `PostalCode`<sup>Optional</sup> <a name="PostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.postalCode"></a>

```go
PostalCode *string
```

- *Type:* *string

The postal code of a customer address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#postal_code WisdomMessageTemplate#postal_code}

---

##### `ProfileArn`<sup>Optional</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileArn"></a>

```go
ProfileArn *string
```

- *Type:* *string

The ARN of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#profile_arn WisdomMessageTemplate#profile_arn}

---

##### `ProfileId`<sup>Optional</sup> <a name="ProfileId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.profileId"></a>

```go
ProfileId *string
```

- *Type:* *string

The unique identifier of a customer profile.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#profile_id WisdomMessageTemplate#profile_id}

---

##### `Province`<sup>Optional</sup> <a name="Province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.province"></a>

```go
Province *string
```

- *Type:* *string

The province in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#province WisdomMessageTemplate#province}

---

##### `ShippingAddress1`<sup>Optional</sup> <a name="ShippingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress1"></a>

```go
ShippingAddress1 *string
```

- *Type:* *string

The first line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_1 WisdomMessageTemplate#shipping_address_1}

---

##### `ShippingAddress2`<sup>Optional</sup> <a name="ShippingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress2"></a>

```go
ShippingAddress2 *string
```

- *Type:* *string

The second line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_2 WisdomMessageTemplate#shipping_address_2}

---

##### `ShippingAddress3`<sup>Optional</sup> <a name="ShippingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress3"></a>

```go
ShippingAddress3 *string
```

- *Type:* *string

The third line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_3 WisdomMessageTemplate#shipping_address_3}

---

##### `ShippingAddress4`<sup>Optional</sup> <a name="ShippingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingAddress4"></a>

```go
ShippingAddress4 *string
```

- *Type:* *string

The fourth line of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_address_4 WisdomMessageTemplate#shipping_address_4}

---

##### `ShippingCity`<sup>Optional</sup> <a name="ShippingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCity"></a>

```go
ShippingCity *string
```

- *Type:* *string

The city of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_city WisdomMessageTemplate#shipping_city}

---

##### `ShippingCountry`<sup>Optional</sup> <a name="ShippingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCountry"></a>

```go
ShippingCountry *string
```

- *Type:* *string

The country of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_country WisdomMessageTemplate#shipping_country}

---

##### `ShippingCounty`<sup>Optional</sup> <a name="ShippingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingCounty"></a>

```go
ShippingCounty *string
```

- *Type:* *string

The county of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_county WisdomMessageTemplate#shipping_county}

---

##### `ShippingPostalCode`<sup>Optional</sup> <a name="ShippingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingPostalCode"></a>

```go
ShippingPostalCode *string
```

- *Type:* *string

The postal code of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_postal_code WisdomMessageTemplate#shipping_postal_code}

---

##### `ShippingProvince`<sup>Optional</sup> <a name="ShippingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingProvince"></a>

```go
ShippingProvince *string
```

- *Type:* *string

The province of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_province WisdomMessageTemplate#shipping_province}

---

##### `ShippingState`<sup>Optional</sup> <a name="ShippingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.shippingState"></a>

```go
ShippingState *string
```

- *Type:* *string

The state of a customer?s shipping address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#shipping_state WisdomMessageTemplate#shipping_state}

---

##### `State`<sup>Optional</sup> <a name="State" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes.property.state"></a>

```go
State *string
```

- *Type:* *string

The state in which a customer lives.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#state WisdomMessageTemplate#state}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributes <a name="WisdomMessageTemplateDefaultAttributesSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes {
	CustomerEndpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint,
	Name: *string,
	SystemEndpoint: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.customerEndpoint">CustomerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a></code> | The CustomerEndpoint attribute. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.name">Name</a></code> | <code>*string</code> | The name of the task. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.systemEndpoint">SystemEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a></code> | The SystemEndpoint attribute. |

---

##### `CustomerEndpoint`<sup>Optional</sup> <a name="CustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.customerEndpoint"></a>

```go
CustomerEndpoint WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

The CustomerEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#customer_endpoint WisdomMessageTemplate#customer_endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the task.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#name WisdomMessageTemplate#name}

---

##### `SystemEndpoint`<sup>Optional</sup> <a name="SystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes.property.systemEndpoint"></a>

```go
SystemEndpoint WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

The SystemEndpoint attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#system_endpoint WisdomMessageTemplate#system_endpoint}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint {
	Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.property.address">Address</a></code> | <code>*string</code> | The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint.property.address"></a>

```go
Address *string
```

- *Type:* *string

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

### WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint {
	Address: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.property.address">Address</a></code> | <code>*string</code> | The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint. |

---

##### `Address`<sup>Optional</sup> <a name="Address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint.property.address"></a>

```go
Address *string
```

- *Type:* *string

The customer's phone number if used with customerEndpoint, or the number the customer dialed to call your contact center if used with systemEndpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#address WisdomMessageTemplate#address}

---

### WisdomMessageTemplateGroupingConfiguration <a name="WisdomMessageTemplateGroupingConfiguration" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateGroupingConfiguration {
	Criteria: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.criteria">Criteria</a></code> | <code>*string</code> | The criteria used for grouping Amazon Q in Connect users. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.values">Values</a></code> | <code>*[]*string</code> | The list of values that define different groups of Amazon Q in Connect users. |

---

##### `Criteria`<sup>Optional</sup> <a name="Criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.criteria"></a>

```go
Criteria *string
```

- *Type:* *string

The criteria used for grouping Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#criteria WisdomMessageTemplate#criteria}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfiguration.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The list of values that define different groups of Amazon Q in Connect users.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#values WisdomMessageTemplate#values}

---

### WisdomMessageTemplateMessageTemplateAttachments <a name="WisdomMessageTemplateMessageTemplateAttachments" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateMessageTemplateAttachments {
	AttachmentId: *string,
	AttachmentName: *string,
	S3PresignedUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#attachment_id WisdomMessageTemplate#attachment_id}. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentName">AttachmentName</a></code> | <code>*string</code> | The name of the attachment file being uploaded. The name should include the file extension. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.s3PresignedUrl">S3PresignedUrl</a></code> | <code>*string</code> | The S3 Presigned URL for the attachment file. |

---

##### `AttachmentId`<sup>Optional</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentId"></a>

```go
AttachmentId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#attachment_id WisdomMessageTemplate#attachment_id}.

---

##### `AttachmentName`<sup>Optional</sup> <a name="AttachmentName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.attachmentName"></a>

```go
AttachmentName *string
```

- *Type:* *string

The name of the attachment file being uploaded. The name should include the file extension.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#attachment_name WisdomMessageTemplate#attachment_name}

---

##### `S3PresignedUrl`<sup>Optional</sup> <a name="S3PresignedUrl" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachments.property.s3PresignedUrl"></a>

```go
S3PresignedUrl *string
```

- *Type:* *string

The S3 Presigned URL for the attachment file.

When generating the PreSignedUrl, please ensure that the expires-in time is set to 30 minutes. The URL can be generated through the AWS Console or through the AWS CLI (https://docs.aws.amazon.com/AmazonS3/latest/userguide/ShareObjectPreSignedURL.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#s3_presigned_url WisdomMessageTemplate#s3_presigned_url}

---

### WisdomMessageTemplateTags <a name="WisdomMessageTemplateTags" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

&wisdommessagetemplate.WisdomMessageTemplateTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#key WisdomMessageTemplate#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/wisdom_message_template#value WisdomMessageTemplate#value}

---

## Classes <a name="Classes" id="Classes"></a>

### WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml">PutHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText">PutPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetHtml">ResetHtml</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetPlainText">ResetPlainText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHtml` <a name="PutHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml"></a>

```go
func PutHtml(value WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putHtml.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtml</a>

---

##### `PutPlainText` <a name="PutPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText"></a>

```go
func PutPlainText(value WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.putPlainText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainText</a>

---

##### `ResetHtml` <a name="ResetHtml" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetHtml"></a>

```go
func ResetHtml()
```

##### `ResetPlainText` <a name="ResetPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.resetPlainText"></a>

```go
func ResetPlainText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html">Html</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.htmlInput">HtmlInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainTextInput">PlainTextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Html`<sup>Required</sup> <a name="Html" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.html"></a>

```go
func Html() WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyHtmlOutputReference</a>

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainText"></a>

```go
func PlainText() WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `HtmlInput`<sup>Optional</sup> <a name="HtmlInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.htmlInput"></a>

```go
func HtmlInput() interface{}
```

- *Type:* interface{}

---

##### `PlainTextInput`<sup>Optional</sup> <a name="PlainTextInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.plainTextInput"></a>

```go
func PlainTextInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentEmailMessageTemplateContentHeadersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get"></a>

```go
func Get(index *f64) WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentEmailMessageTemplateContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders">PutHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetBody">ResetBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetHeaders">ResetHeaders</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetSubject">ResetSubject</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody"></a>

```go
func PutBody(value WisdomMessageTemplateContentEmailMessageTemplateContentBody)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBody">WisdomMessageTemplateContentEmailMessageTemplateContentBody</a>

---

##### `PutHeaders` <a name="PutHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders"></a>

```go
func PutHeaders(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.putHeaders.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetBody"></a>

```go
func ResetBody()
```

##### `ResetHeaders` <a name="ResetHeaders" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetHeaders"></a>

```go
func ResetHeaders()
```

##### `ResetSubject` <a name="ResetSubject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.resetSubject"></a>

```go
func ResetSubject()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers">Headers</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.bodyInput">BodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headersInput">HeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subjectInput">SubjectInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject">Subject</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.body"></a>

```go
func Body() WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentBodyOutputReference</a>

---

##### `Headers`<sup>Required</sup> <a name="Headers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headers"></a>

```go
func Headers() WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList">WisdomMessageTemplateContentEmailMessageTemplateContentHeadersList</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.bodyInput"></a>

```go
func BodyInput() interface{}
```

- *Type:* interface{}

---

##### `HeadersInput`<sup>Optional</sup> <a name="HeadersInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.headersInput"></a>

```go
func HeadersInput() interface{}
```

- *Type:* interface{}

---

##### `SubjectInput`<sup>Optional</sup> <a name="SubjectInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subjectInput"></a>

```go
func SubjectInput() *string
```

- *Type:* *string

---

##### `Subject`<sup>Required</sup> <a name="Subject" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.subject"></a>

```go
func Subject() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent">PutEmailMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent">PutSmsMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetEmailMessageTemplateContent">ResetEmailMessageTemplateContent</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetSmsMessageTemplateContent">ResetSmsMessageTemplateContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutEmailMessageTemplateContent` <a name="PutEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent"></a>

```go
func PutEmailMessageTemplateContent(value WisdomMessageTemplateContentEmailMessageTemplateContent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putEmailMessageTemplateContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContent">WisdomMessageTemplateContentEmailMessageTemplateContent</a>

---

##### `PutSmsMessageTemplateContent` <a name="PutSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent"></a>

```go
func PutSmsMessageTemplateContent(value WisdomMessageTemplateContentSmsMessageTemplateContent)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.putSmsMessageTemplateContent.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContent">WisdomMessageTemplateContentSmsMessageTemplateContent</a>

---

##### `ResetEmailMessageTemplateContent` <a name="ResetEmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetEmailMessageTemplateContent"></a>

```go
func ResetEmailMessageTemplateContent()
```

##### `ResetSmsMessageTemplateContent` <a name="ResetSmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.resetSmsMessageTemplateContent"></a>

```go
func ResetSmsMessageTemplateContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent">EmailMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent">SmsMessageTemplateContent</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContentInput">EmailMessageTemplateContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContentInput">SmsMessageTemplateContentInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EmailMessageTemplateContent`<sup>Required</sup> <a name="EmailMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContent"></a>

```go
func EmailMessageTemplateContent() WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference">WisdomMessageTemplateContentEmailMessageTemplateContentOutputReference</a>

---

##### `SmsMessageTemplateContent`<sup>Required</sup> <a name="SmsMessageTemplateContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContent"></a>

```go
func SmsMessageTemplateContent() WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference</a>

---

##### `EmailMessageTemplateContentInput`<sup>Optional</sup> <a name="EmailMessageTemplateContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.emailMessageTemplateContentInput"></a>

```go
func EmailMessageTemplateContentInput() interface{}
```

- *Type:* interface{}

---

##### `SmsMessageTemplateContentInput`<sup>Optional</sup> <a name="SmsMessageTemplateContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.smsMessageTemplateContentInput"></a>

```go
func SmsMessageTemplateContentInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText">PutPlainText</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resetPlainText">ResetPlainText</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutPlainText` <a name="PutPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText"></a>

```go
func PutPlainText(value WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.putPlainText.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainText</a>

---

##### `ResetPlainText` <a name="ResetPlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.resetPlainText"></a>

```go
func ResetPlainText()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText">PlainText</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainTextInput">PlainTextInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PlainText`<sup>Required</sup> <a name="PlainText" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainText"></a>

```go
func PlainText() WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference</a>

---

##### `PlainTextInput`<sup>Optional</sup> <a name="PlainTextInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.plainTextInput"></a>

```go
func PlainTextInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resetContent">ResetContent</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContent` <a name="ResetContent" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.resetContent"></a>

```go
func ResetContent()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.contentInput">ContentInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content">Content</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentInput`<sup>Optional</sup> <a name="ContentInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.contentInput"></a>

```go
func ContentInput() *string
```

- *Type:* *string

---

##### `Content`<sup>Required</sup> <a name="Content" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.content"></a>

```go
func Content() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyPlainTextOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference <a name="WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateContentSmsMessageTemplateContentOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody">PutBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resetBody">ResetBody</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBody` <a name="PutBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody"></a>

```go
func PutBody(value WisdomMessageTemplateContentSmsMessageTemplateContentBody)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.putBody.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBody">WisdomMessageTemplateContentSmsMessageTemplateContentBody</a>

---

##### `ResetBody` <a name="ResetBody" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.resetBody"></a>

```go
func ResetBody()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body">Body</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.bodyInput">BodyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Body`<sup>Required</sup> <a name="Body" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.body"></a>

```go
func Body() WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference">WisdomMessageTemplateContentSmsMessageTemplateContentBodyOutputReference</a>

---

##### `BodyInput`<sup>Optional</sup> <a name="BodyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.bodyInput"></a>

```go
func BodyInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateContentSmsMessageTemplateContentOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.resetLastName"></a>

```go
func ResetLastName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAccountNumber">ResetAccountNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAdditionalInformation">ResetAdditionalInformation</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress1">ResetAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress2">ResetAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress3">ResetAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress4">ResetAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress1">ResetBillingAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress2">ResetBillingAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress3">ResetBillingAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress4">ResetBillingAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCity">ResetBillingCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCountry">ResetBillingCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCounty">ResetBillingCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingPostalCode">ResetBillingPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingProvince">ResetBillingProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingState">ResetBillingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBirthDate">ResetBirthDate</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessEmailAddress">ResetBusinessEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessName">ResetBusinessName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessPhoneNumber">ResetBusinessPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCity">ResetCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCountry">ResetCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCounty">ResetCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCustom">ResetCustom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetEmailAddress">ResetEmailAddress</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetFirstName">ResetFirstName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetGender">ResetGender</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetHomePhoneNumber">ResetHomePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetLastName">ResetLastName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress1">ResetMailingAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress2">ResetMailingAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress3">ResetMailingAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress4">ResetMailingAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCity">ResetMailingCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCountry">ResetMailingCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCounty">ResetMailingCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingPostalCode">ResetMailingPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingProvince">ResetMailingProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingState">ResetMailingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMiddleName">ResetMiddleName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMobilePhoneNumber">ResetMobilePhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPartyType">ResetPartyType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPhoneNumber">ResetPhoneNumber</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPostalCode">ResetPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileArn">ResetProfileArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileId">ResetProfileId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProvince">ResetProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress1">ResetShippingAddress1</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress2">ResetShippingAddress2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress3">ResetShippingAddress3</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress4">ResetShippingAddress4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCity">ResetShippingCity</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCountry">ResetShippingCountry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCounty">ResetShippingCounty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingPostalCode">ResetShippingPostalCode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingProvince">ResetShippingProvince</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingState">ResetShippingState</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetState">ResetState</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountNumber` <a name="ResetAccountNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAccountNumber"></a>

```go
func ResetAccountNumber()
```

##### `ResetAdditionalInformation` <a name="ResetAdditionalInformation" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAdditionalInformation"></a>

```go
func ResetAdditionalInformation()
```

##### `ResetAddress1` <a name="ResetAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress1"></a>

```go
func ResetAddress1()
```

##### `ResetAddress2` <a name="ResetAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress2"></a>

```go
func ResetAddress2()
```

##### `ResetAddress3` <a name="ResetAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress3"></a>

```go
func ResetAddress3()
```

##### `ResetAddress4` <a name="ResetAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetAddress4"></a>

```go
func ResetAddress4()
```

##### `ResetBillingAddress1` <a name="ResetBillingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress1"></a>

```go
func ResetBillingAddress1()
```

##### `ResetBillingAddress2` <a name="ResetBillingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress2"></a>

```go
func ResetBillingAddress2()
```

##### `ResetBillingAddress3` <a name="ResetBillingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress3"></a>

```go
func ResetBillingAddress3()
```

##### `ResetBillingAddress4` <a name="ResetBillingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingAddress4"></a>

```go
func ResetBillingAddress4()
```

##### `ResetBillingCity` <a name="ResetBillingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCity"></a>

```go
func ResetBillingCity()
```

##### `ResetBillingCountry` <a name="ResetBillingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCountry"></a>

```go
func ResetBillingCountry()
```

##### `ResetBillingCounty` <a name="ResetBillingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingCounty"></a>

```go
func ResetBillingCounty()
```

##### `ResetBillingPostalCode` <a name="ResetBillingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingPostalCode"></a>

```go
func ResetBillingPostalCode()
```

##### `ResetBillingProvince` <a name="ResetBillingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingProvince"></a>

```go
func ResetBillingProvince()
```

##### `ResetBillingState` <a name="ResetBillingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBillingState"></a>

```go
func ResetBillingState()
```

##### `ResetBirthDate` <a name="ResetBirthDate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBirthDate"></a>

```go
func ResetBirthDate()
```

##### `ResetBusinessEmailAddress` <a name="ResetBusinessEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessEmailAddress"></a>

```go
func ResetBusinessEmailAddress()
```

##### `ResetBusinessName` <a name="ResetBusinessName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessName"></a>

```go
func ResetBusinessName()
```

##### `ResetBusinessPhoneNumber` <a name="ResetBusinessPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetBusinessPhoneNumber"></a>

```go
func ResetBusinessPhoneNumber()
```

##### `ResetCity` <a name="ResetCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCity"></a>

```go
func ResetCity()
```

##### `ResetCountry` <a name="ResetCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCountry"></a>

```go
func ResetCountry()
```

##### `ResetCounty` <a name="ResetCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCounty"></a>

```go
func ResetCounty()
```

##### `ResetCustom` <a name="ResetCustom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetCustom"></a>

```go
func ResetCustom()
```

##### `ResetEmailAddress` <a name="ResetEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetEmailAddress"></a>

```go
func ResetEmailAddress()
```

##### `ResetFirstName` <a name="ResetFirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetFirstName"></a>

```go
func ResetFirstName()
```

##### `ResetGender` <a name="ResetGender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetGender"></a>

```go
func ResetGender()
```

##### `ResetHomePhoneNumber` <a name="ResetHomePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetHomePhoneNumber"></a>

```go
func ResetHomePhoneNumber()
```

##### `ResetLastName` <a name="ResetLastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetLastName"></a>

```go
func ResetLastName()
```

##### `ResetMailingAddress1` <a name="ResetMailingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress1"></a>

```go
func ResetMailingAddress1()
```

##### `ResetMailingAddress2` <a name="ResetMailingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress2"></a>

```go
func ResetMailingAddress2()
```

##### `ResetMailingAddress3` <a name="ResetMailingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress3"></a>

```go
func ResetMailingAddress3()
```

##### `ResetMailingAddress4` <a name="ResetMailingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingAddress4"></a>

```go
func ResetMailingAddress4()
```

##### `ResetMailingCity` <a name="ResetMailingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCity"></a>

```go
func ResetMailingCity()
```

##### `ResetMailingCountry` <a name="ResetMailingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCountry"></a>

```go
func ResetMailingCountry()
```

##### `ResetMailingCounty` <a name="ResetMailingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingCounty"></a>

```go
func ResetMailingCounty()
```

##### `ResetMailingPostalCode` <a name="ResetMailingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingPostalCode"></a>

```go
func ResetMailingPostalCode()
```

##### `ResetMailingProvince` <a name="ResetMailingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingProvince"></a>

```go
func ResetMailingProvince()
```

##### `ResetMailingState` <a name="ResetMailingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMailingState"></a>

```go
func ResetMailingState()
```

##### `ResetMiddleName` <a name="ResetMiddleName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMiddleName"></a>

```go
func ResetMiddleName()
```

##### `ResetMobilePhoneNumber` <a name="ResetMobilePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetMobilePhoneNumber"></a>

```go
func ResetMobilePhoneNumber()
```

##### `ResetPartyType` <a name="ResetPartyType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPartyType"></a>

```go
func ResetPartyType()
```

##### `ResetPhoneNumber` <a name="ResetPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPhoneNumber"></a>

```go
func ResetPhoneNumber()
```

##### `ResetPostalCode` <a name="ResetPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetPostalCode"></a>

```go
func ResetPostalCode()
```

##### `ResetProfileArn` <a name="ResetProfileArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileArn"></a>

```go
func ResetProfileArn()
```

##### `ResetProfileId` <a name="ResetProfileId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProfileId"></a>

```go
func ResetProfileId()
```

##### `ResetProvince` <a name="ResetProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetProvince"></a>

```go
func ResetProvince()
```

##### `ResetShippingAddress1` <a name="ResetShippingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress1"></a>

```go
func ResetShippingAddress1()
```

##### `ResetShippingAddress2` <a name="ResetShippingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress2"></a>

```go
func ResetShippingAddress2()
```

##### `ResetShippingAddress3` <a name="ResetShippingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress3"></a>

```go
func ResetShippingAddress3()
```

##### `ResetShippingAddress4` <a name="ResetShippingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingAddress4"></a>

```go
func ResetShippingAddress4()
```

##### `ResetShippingCity` <a name="ResetShippingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCity"></a>

```go
func ResetShippingCity()
```

##### `ResetShippingCountry` <a name="ResetShippingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCountry"></a>

```go
func ResetShippingCountry()
```

##### `ResetShippingCounty` <a name="ResetShippingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingCounty"></a>

```go
func ResetShippingCounty()
```

##### `ResetShippingPostalCode` <a name="ResetShippingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingPostalCode"></a>

```go
func ResetShippingPostalCode()
```

##### `ResetShippingProvince` <a name="ResetShippingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingProvince"></a>

```go
func ResetShippingProvince()
```

##### `ResetShippingState` <a name="ResetShippingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetShippingState"></a>

```go
func ResetShippingState()
```

##### `ResetState` <a name="ResetState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.resetState"></a>

```go
func ResetState()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumberInput">AccountNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformationInput">AdditionalInformationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1Input">Address1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2Input">Address2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3Input">Address3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4Input">Address4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1Input">BillingAddress1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2Input">BillingAddress2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3Input">BillingAddress3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4Input">BillingAddress4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCityInput">BillingCityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountryInput">BillingCountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountyInput">BillingCountyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCodeInput">BillingPostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvinceInput">BillingProvinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingStateInput">BillingStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDateInput">BirthDateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddressInput">BusinessEmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessNameInput">BusinessNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumberInput">BusinessPhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.cityInput">CityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countryInput">CountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countyInput">CountyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.customInput">CustomInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddressInput">EmailAddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstNameInput">FirstNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.genderInput">GenderInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumberInput">HomePhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastNameInput">LastNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1Input">MailingAddress1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2Input">MailingAddress2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3Input">MailingAddress3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4Input">MailingAddress4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCityInput">MailingCityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountryInput">MailingCountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountyInput">MailingCountyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCodeInput">MailingPostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvinceInput">MailingProvinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingStateInput">MailingStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleNameInput">MiddleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumberInput">MobilePhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyTypeInput">PartyTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumberInput">PhoneNumberInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCodeInput">PostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArnInput">ProfileArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileIdInput">ProfileIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.provinceInput">ProvinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1Input">ShippingAddress1Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2Input">ShippingAddress2Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3Input">ShippingAddress3Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4Input">ShippingAddress4Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCityInput">ShippingCityInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountryInput">ShippingCountryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountyInput">ShippingCountyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCodeInput">ShippingPostalCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvinceInput">ShippingProvinceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingStateInput">ShippingStateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.stateInput">StateInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber">AccountNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation">AdditionalInformation</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1">Address1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2">Address2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3">Address3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4">Address4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1">BillingAddress1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2">BillingAddress2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3">BillingAddress3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4">BillingAddress4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity">BillingCity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry">BillingCountry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty">BillingCounty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode">BillingPostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince">BillingProvince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState">BillingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate">BirthDate</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress">BusinessEmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName">BusinessName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber">BusinessPhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city">City</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country">Country</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county">County</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom">Custom</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress">EmailAddress</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName">FirstName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender">Gender</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber">HomePhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName">LastName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1">MailingAddress1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2">MailingAddress2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3">MailingAddress3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4">MailingAddress4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity">MailingCity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry">MailingCountry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty">MailingCounty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode">MailingPostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince">MailingProvince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState">MailingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName">MiddleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber">MobilePhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType">PartyType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber">PhoneNumber</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode">PostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn">ProfileArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId">ProfileId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province">Province</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1">ShippingAddress1</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2">ShippingAddress2</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3">ShippingAddress3</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4">ShippingAddress4</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity">ShippingCity</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry">ShippingCountry</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty">ShippingCounty</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode">ShippingPostalCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince">ShippingProvince</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState">ShippingState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountNumberInput`<sup>Optional</sup> <a name="AccountNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumberInput"></a>

```go
func AccountNumberInput() *string
```

- *Type:* *string

---

##### `AdditionalInformationInput`<sup>Optional</sup> <a name="AdditionalInformationInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformationInput"></a>

```go
func AdditionalInformationInput() *string
```

- *Type:* *string

---

##### `Address1Input`<sup>Optional</sup> <a name="Address1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1Input"></a>

```go
func Address1Input() *string
```

- *Type:* *string

---

##### `Address2Input`<sup>Optional</sup> <a name="Address2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2Input"></a>

```go
func Address2Input() *string
```

- *Type:* *string

---

##### `Address3Input`<sup>Optional</sup> <a name="Address3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3Input"></a>

```go
func Address3Input() *string
```

- *Type:* *string

---

##### `Address4Input`<sup>Optional</sup> <a name="Address4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4Input"></a>

```go
func Address4Input() *string
```

- *Type:* *string

---

##### `BillingAddress1Input`<sup>Optional</sup> <a name="BillingAddress1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1Input"></a>

```go
func BillingAddress1Input() *string
```

- *Type:* *string

---

##### `BillingAddress2Input`<sup>Optional</sup> <a name="BillingAddress2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2Input"></a>

```go
func BillingAddress2Input() *string
```

- *Type:* *string

---

##### `BillingAddress3Input`<sup>Optional</sup> <a name="BillingAddress3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3Input"></a>

```go
func BillingAddress3Input() *string
```

- *Type:* *string

---

##### `BillingAddress4Input`<sup>Optional</sup> <a name="BillingAddress4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4Input"></a>

```go
func BillingAddress4Input() *string
```

- *Type:* *string

---

##### `BillingCityInput`<sup>Optional</sup> <a name="BillingCityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCityInput"></a>

```go
func BillingCityInput() *string
```

- *Type:* *string

---

##### `BillingCountryInput`<sup>Optional</sup> <a name="BillingCountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountryInput"></a>

```go
func BillingCountryInput() *string
```

- *Type:* *string

---

##### `BillingCountyInput`<sup>Optional</sup> <a name="BillingCountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountyInput"></a>

```go
func BillingCountyInput() *string
```

- *Type:* *string

---

##### `BillingPostalCodeInput`<sup>Optional</sup> <a name="BillingPostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCodeInput"></a>

```go
func BillingPostalCodeInput() *string
```

- *Type:* *string

---

##### `BillingProvinceInput`<sup>Optional</sup> <a name="BillingProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvinceInput"></a>

```go
func BillingProvinceInput() *string
```

- *Type:* *string

---

##### `BillingStateInput`<sup>Optional</sup> <a name="BillingStateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingStateInput"></a>

```go
func BillingStateInput() *string
```

- *Type:* *string

---

##### `BirthDateInput`<sup>Optional</sup> <a name="BirthDateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDateInput"></a>

```go
func BirthDateInput() *string
```

- *Type:* *string

---

##### `BusinessEmailAddressInput`<sup>Optional</sup> <a name="BusinessEmailAddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddressInput"></a>

```go
func BusinessEmailAddressInput() *string
```

- *Type:* *string

---

##### `BusinessNameInput`<sup>Optional</sup> <a name="BusinessNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessNameInput"></a>

```go
func BusinessNameInput() *string
```

- *Type:* *string

---

##### `BusinessPhoneNumberInput`<sup>Optional</sup> <a name="BusinessPhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumberInput"></a>

```go
func BusinessPhoneNumberInput() *string
```

- *Type:* *string

---

##### `CityInput`<sup>Optional</sup> <a name="CityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.cityInput"></a>

```go
func CityInput() *string
```

- *Type:* *string

---

##### `CountryInput`<sup>Optional</sup> <a name="CountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countryInput"></a>

```go
func CountryInput() *string
```

- *Type:* *string

---

##### `CountyInput`<sup>Optional</sup> <a name="CountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.countyInput"></a>

```go
func CountyInput() *string
```

- *Type:* *string

---

##### `CustomInput`<sup>Optional</sup> <a name="CustomInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.customInput"></a>

```go
func CustomInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EmailAddressInput`<sup>Optional</sup> <a name="EmailAddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddressInput"></a>

```go
func EmailAddressInput() *string
```

- *Type:* *string

---

##### `FirstNameInput`<sup>Optional</sup> <a name="FirstNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstNameInput"></a>

```go
func FirstNameInput() *string
```

- *Type:* *string

---

##### `GenderInput`<sup>Optional</sup> <a name="GenderInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.genderInput"></a>

```go
func GenderInput() *string
```

- *Type:* *string

---

##### `HomePhoneNumberInput`<sup>Optional</sup> <a name="HomePhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumberInput"></a>

```go
func HomePhoneNumberInput() *string
```

- *Type:* *string

---

##### `LastNameInput`<sup>Optional</sup> <a name="LastNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastNameInput"></a>

```go
func LastNameInput() *string
```

- *Type:* *string

---

##### `MailingAddress1Input`<sup>Optional</sup> <a name="MailingAddress1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1Input"></a>

```go
func MailingAddress1Input() *string
```

- *Type:* *string

---

##### `MailingAddress2Input`<sup>Optional</sup> <a name="MailingAddress2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2Input"></a>

```go
func MailingAddress2Input() *string
```

- *Type:* *string

---

##### `MailingAddress3Input`<sup>Optional</sup> <a name="MailingAddress3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3Input"></a>

```go
func MailingAddress3Input() *string
```

- *Type:* *string

---

##### `MailingAddress4Input`<sup>Optional</sup> <a name="MailingAddress4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4Input"></a>

```go
func MailingAddress4Input() *string
```

- *Type:* *string

---

##### `MailingCityInput`<sup>Optional</sup> <a name="MailingCityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCityInput"></a>

```go
func MailingCityInput() *string
```

- *Type:* *string

---

##### `MailingCountryInput`<sup>Optional</sup> <a name="MailingCountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountryInput"></a>

```go
func MailingCountryInput() *string
```

- *Type:* *string

---

##### `MailingCountyInput`<sup>Optional</sup> <a name="MailingCountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountyInput"></a>

```go
func MailingCountyInput() *string
```

- *Type:* *string

---

##### `MailingPostalCodeInput`<sup>Optional</sup> <a name="MailingPostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCodeInput"></a>

```go
func MailingPostalCodeInput() *string
```

- *Type:* *string

---

##### `MailingProvinceInput`<sup>Optional</sup> <a name="MailingProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvinceInput"></a>

```go
func MailingProvinceInput() *string
```

- *Type:* *string

---

##### `MailingStateInput`<sup>Optional</sup> <a name="MailingStateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingStateInput"></a>

```go
func MailingStateInput() *string
```

- *Type:* *string

---

##### `MiddleNameInput`<sup>Optional</sup> <a name="MiddleNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleNameInput"></a>

```go
func MiddleNameInput() *string
```

- *Type:* *string

---

##### `MobilePhoneNumberInput`<sup>Optional</sup> <a name="MobilePhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumberInput"></a>

```go
func MobilePhoneNumberInput() *string
```

- *Type:* *string

---

##### `PartyTypeInput`<sup>Optional</sup> <a name="PartyTypeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyTypeInput"></a>

```go
func PartyTypeInput() *string
```

- *Type:* *string

---

##### `PhoneNumberInput`<sup>Optional</sup> <a name="PhoneNumberInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumberInput"></a>

```go
func PhoneNumberInput() *string
```

- *Type:* *string

---

##### `PostalCodeInput`<sup>Optional</sup> <a name="PostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCodeInput"></a>

```go
func PostalCodeInput() *string
```

- *Type:* *string

---

##### `ProfileArnInput`<sup>Optional</sup> <a name="ProfileArnInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArnInput"></a>

```go
func ProfileArnInput() *string
```

- *Type:* *string

---

##### `ProfileIdInput`<sup>Optional</sup> <a name="ProfileIdInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileIdInput"></a>

```go
func ProfileIdInput() *string
```

- *Type:* *string

---

##### `ProvinceInput`<sup>Optional</sup> <a name="ProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.provinceInput"></a>

```go
func ProvinceInput() *string
```

- *Type:* *string

---

##### `ShippingAddress1Input`<sup>Optional</sup> <a name="ShippingAddress1Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1Input"></a>

```go
func ShippingAddress1Input() *string
```

- *Type:* *string

---

##### `ShippingAddress2Input`<sup>Optional</sup> <a name="ShippingAddress2Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2Input"></a>

```go
func ShippingAddress2Input() *string
```

- *Type:* *string

---

##### `ShippingAddress3Input`<sup>Optional</sup> <a name="ShippingAddress3Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3Input"></a>

```go
func ShippingAddress3Input() *string
```

- *Type:* *string

---

##### `ShippingAddress4Input`<sup>Optional</sup> <a name="ShippingAddress4Input" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4Input"></a>

```go
func ShippingAddress4Input() *string
```

- *Type:* *string

---

##### `ShippingCityInput`<sup>Optional</sup> <a name="ShippingCityInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCityInput"></a>

```go
func ShippingCityInput() *string
```

- *Type:* *string

---

##### `ShippingCountryInput`<sup>Optional</sup> <a name="ShippingCountryInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountryInput"></a>

```go
func ShippingCountryInput() *string
```

- *Type:* *string

---

##### `ShippingCountyInput`<sup>Optional</sup> <a name="ShippingCountyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountyInput"></a>

```go
func ShippingCountyInput() *string
```

- *Type:* *string

---

##### `ShippingPostalCodeInput`<sup>Optional</sup> <a name="ShippingPostalCodeInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCodeInput"></a>

```go
func ShippingPostalCodeInput() *string
```

- *Type:* *string

---

##### `ShippingProvinceInput`<sup>Optional</sup> <a name="ShippingProvinceInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvinceInput"></a>

```go
func ShippingProvinceInput() *string
```

- *Type:* *string

---

##### `ShippingStateInput`<sup>Optional</sup> <a name="ShippingStateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingStateInput"></a>

```go
func ShippingStateInput() *string
```

- *Type:* *string

---

##### `StateInput`<sup>Optional</sup> <a name="StateInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.stateInput"></a>

```go
func StateInput() *string
```

- *Type:* *string

---

##### `AccountNumber`<sup>Required</sup> <a name="AccountNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.accountNumber"></a>

```go
func AccountNumber() *string
```

- *Type:* *string

---

##### `AdditionalInformation`<sup>Required</sup> <a name="AdditionalInformation" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.additionalInformation"></a>

```go
func AdditionalInformation() *string
```

- *Type:* *string

---

##### `Address1`<sup>Required</sup> <a name="Address1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address1"></a>

```go
func Address1() *string
```

- *Type:* *string

---

##### `Address2`<sup>Required</sup> <a name="Address2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address2"></a>

```go
func Address2() *string
```

- *Type:* *string

---

##### `Address3`<sup>Required</sup> <a name="Address3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address3"></a>

```go
func Address3() *string
```

- *Type:* *string

---

##### `Address4`<sup>Required</sup> <a name="Address4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.address4"></a>

```go
func Address4() *string
```

- *Type:* *string

---

##### `BillingAddress1`<sup>Required</sup> <a name="BillingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress1"></a>

```go
func BillingAddress1() *string
```

- *Type:* *string

---

##### `BillingAddress2`<sup>Required</sup> <a name="BillingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress2"></a>

```go
func BillingAddress2() *string
```

- *Type:* *string

---

##### `BillingAddress3`<sup>Required</sup> <a name="BillingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress3"></a>

```go
func BillingAddress3() *string
```

- *Type:* *string

---

##### `BillingAddress4`<sup>Required</sup> <a name="BillingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingAddress4"></a>

```go
func BillingAddress4() *string
```

- *Type:* *string

---

##### `BillingCity`<sup>Required</sup> <a name="BillingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCity"></a>

```go
func BillingCity() *string
```

- *Type:* *string

---

##### `BillingCountry`<sup>Required</sup> <a name="BillingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCountry"></a>

```go
func BillingCountry() *string
```

- *Type:* *string

---

##### `BillingCounty`<sup>Required</sup> <a name="BillingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingCounty"></a>

```go
func BillingCounty() *string
```

- *Type:* *string

---

##### `BillingPostalCode`<sup>Required</sup> <a name="BillingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingPostalCode"></a>

```go
func BillingPostalCode() *string
```

- *Type:* *string

---

##### `BillingProvince`<sup>Required</sup> <a name="BillingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingProvince"></a>

```go
func BillingProvince() *string
```

- *Type:* *string

---

##### `BillingState`<sup>Required</sup> <a name="BillingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.billingState"></a>

```go
func BillingState() *string
```

- *Type:* *string

---

##### `BirthDate`<sup>Required</sup> <a name="BirthDate" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.birthDate"></a>

```go
func BirthDate() *string
```

- *Type:* *string

---

##### `BusinessEmailAddress`<sup>Required</sup> <a name="BusinessEmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessEmailAddress"></a>

```go
func BusinessEmailAddress() *string
```

- *Type:* *string

---

##### `BusinessName`<sup>Required</sup> <a name="BusinessName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessName"></a>

```go
func BusinessName() *string
```

- *Type:* *string

---

##### `BusinessPhoneNumber`<sup>Required</sup> <a name="BusinessPhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.businessPhoneNumber"></a>

```go
func BusinessPhoneNumber() *string
```

- *Type:* *string

---

##### `City`<sup>Required</sup> <a name="City" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.city"></a>

```go
func City() *string
```

- *Type:* *string

---

##### `Country`<sup>Required</sup> <a name="Country" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.country"></a>

```go
func Country() *string
```

- *Type:* *string

---

##### `County`<sup>Required</sup> <a name="County" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.county"></a>

```go
func County() *string
```

- *Type:* *string

---

##### `Custom`<sup>Required</sup> <a name="Custom" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.custom"></a>

```go
func Custom() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `EmailAddress`<sup>Required</sup> <a name="EmailAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.emailAddress"></a>

```go
func EmailAddress() *string
```

- *Type:* *string

---

##### `FirstName`<sup>Required</sup> <a name="FirstName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.firstName"></a>

```go
func FirstName() *string
```

- *Type:* *string

---

##### `Gender`<sup>Required</sup> <a name="Gender" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.gender"></a>

```go
func Gender() *string
```

- *Type:* *string

---

##### `HomePhoneNumber`<sup>Required</sup> <a name="HomePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.homePhoneNumber"></a>

```go
func HomePhoneNumber() *string
```

- *Type:* *string

---

##### `LastName`<sup>Required</sup> <a name="LastName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.lastName"></a>

```go
func LastName() *string
```

- *Type:* *string

---

##### `MailingAddress1`<sup>Required</sup> <a name="MailingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress1"></a>

```go
func MailingAddress1() *string
```

- *Type:* *string

---

##### `MailingAddress2`<sup>Required</sup> <a name="MailingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress2"></a>

```go
func MailingAddress2() *string
```

- *Type:* *string

---

##### `MailingAddress3`<sup>Required</sup> <a name="MailingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress3"></a>

```go
func MailingAddress3() *string
```

- *Type:* *string

---

##### `MailingAddress4`<sup>Required</sup> <a name="MailingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingAddress4"></a>

```go
func MailingAddress4() *string
```

- *Type:* *string

---

##### `MailingCity`<sup>Required</sup> <a name="MailingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCity"></a>

```go
func MailingCity() *string
```

- *Type:* *string

---

##### `MailingCountry`<sup>Required</sup> <a name="MailingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCountry"></a>

```go
func MailingCountry() *string
```

- *Type:* *string

---

##### `MailingCounty`<sup>Required</sup> <a name="MailingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingCounty"></a>

```go
func MailingCounty() *string
```

- *Type:* *string

---

##### `MailingPostalCode`<sup>Required</sup> <a name="MailingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingPostalCode"></a>

```go
func MailingPostalCode() *string
```

- *Type:* *string

---

##### `MailingProvince`<sup>Required</sup> <a name="MailingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingProvince"></a>

```go
func MailingProvince() *string
```

- *Type:* *string

---

##### `MailingState`<sup>Required</sup> <a name="MailingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mailingState"></a>

```go
func MailingState() *string
```

- *Type:* *string

---

##### `MiddleName`<sup>Required</sup> <a name="MiddleName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.middleName"></a>

```go
func MiddleName() *string
```

- *Type:* *string

---

##### `MobilePhoneNumber`<sup>Required</sup> <a name="MobilePhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.mobilePhoneNumber"></a>

```go
func MobilePhoneNumber() *string
```

- *Type:* *string

---

##### `PartyType`<sup>Required</sup> <a name="PartyType" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.partyType"></a>

```go
func PartyType() *string
```

- *Type:* *string

---

##### `PhoneNumber`<sup>Required</sup> <a name="PhoneNumber" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.phoneNumber"></a>

```go
func PhoneNumber() *string
```

- *Type:* *string

---

##### `PostalCode`<sup>Required</sup> <a name="PostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.postalCode"></a>

```go
func PostalCode() *string
```

- *Type:* *string

---

##### `ProfileArn`<sup>Required</sup> <a name="ProfileArn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileArn"></a>

```go
func ProfileArn() *string
```

- *Type:* *string

---

##### `ProfileId`<sup>Required</sup> <a name="ProfileId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.profileId"></a>

```go
func ProfileId() *string
```

- *Type:* *string

---

##### `Province`<sup>Required</sup> <a name="Province" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.province"></a>

```go
func Province() *string
```

- *Type:* *string

---

##### `ShippingAddress1`<sup>Required</sup> <a name="ShippingAddress1" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress1"></a>

```go
func ShippingAddress1() *string
```

- *Type:* *string

---

##### `ShippingAddress2`<sup>Required</sup> <a name="ShippingAddress2" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress2"></a>

```go
func ShippingAddress2() *string
```

- *Type:* *string

---

##### `ShippingAddress3`<sup>Required</sup> <a name="ShippingAddress3" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress3"></a>

```go
func ShippingAddress3() *string
```

- *Type:* *string

---

##### `ShippingAddress4`<sup>Required</sup> <a name="ShippingAddress4" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingAddress4"></a>

```go
func ShippingAddress4() *string
```

- *Type:* *string

---

##### `ShippingCity`<sup>Required</sup> <a name="ShippingCity" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCity"></a>

```go
func ShippingCity() *string
```

- *Type:* *string

---

##### `ShippingCountry`<sup>Required</sup> <a name="ShippingCountry" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCountry"></a>

```go
func ShippingCountry() *string
```

- *Type:* *string

---

##### `ShippingCounty`<sup>Required</sup> <a name="ShippingCounty" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingCounty"></a>

```go
func ShippingCounty() *string
```

- *Type:* *string

---

##### `ShippingPostalCode`<sup>Required</sup> <a name="ShippingPostalCode" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingPostalCode"></a>

```go
func ShippingPostalCode() *string
```

- *Type:* *string

---

##### `ShippingProvince`<sup>Required</sup> <a name="ShippingProvince" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingProvince"></a>

```go
func ShippingProvince() *string
```

- *Type:* *string

---

##### `ShippingState`<sup>Required</sup> <a name="ShippingState" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.shippingState"></a>

```go
func ShippingState() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateDefaultAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateDefaultAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateDefaultAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes">PutAgentAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes">PutCustomerProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes">PutSystemAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetAgentAttributes">ResetAgentAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomAttributes">ResetCustomAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomerProfileAttributes">ResetCustomerProfileAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetSystemAttributes">ResetSystemAttributes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAgentAttributes` <a name="PutAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes"></a>

```go
func PutAgentAttributes(value WisdomMessageTemplateDefaultAttributesAgentAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putAgentAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributes">WisdomMessageTemplateDefaultAttributesAgentAttributes</a>

---

##### `PutCustomerProfileAttributes` <a name="PutCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes"></a>

```go
func PutCustomerProfileAttributes(value WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putCustomerProfileAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributes</a>

---

##### `PutSystemAttributes` <a name="PutSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes"></a>

```go
func PutSystemAttributes(value WisdomMessageTemplateDefaultAttributesSystemAttributes)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.putSystemAttributes.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributes">WisdomMessageTemplateDefaultAttributesSystemAttributes</a>

---

##### `ResetAgentAttributes` <a name="ResetAgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetAgentAttributes"></a>

```go
func ResetAgentAttributes()
```

##### `ResetCustomAttributes` <a name="ResetCustomAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomAttributes"></a>

```go
func ResetCustomAttributes()
```

##### `ResetCustomerProfileAttributes` <a name="ResetCustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetCustomerProfileAttributes"></a>

```go
func ResetCustomerProfileAttributes()
```

##### `ResetSystemAttributes` <a name="ResetSystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.resetSystemAttributes"></a>

```go
func ResetSystemAttributes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes">AgentAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes">CustomerProfileAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes">SystemAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributesInput">AgentAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributesInput">CustomAttributesInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributesInput">CustomerProfileAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributesInput">SystemAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes">CustomAttributes</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AgentAttributes`<sup>Required</sup> <a name="AgentAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributes"></a>

```go
func AgentAttributes() WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference">WisdomMessageTemplateDefaultAttributesAgentAttributesOutputReference</a>

---

##### `CustomerProfileAttributes`<sup>Required</sup> <a name="CustomerProfileAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributes"></a>

```go
func CustomerProfileAttributes() WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference">WisdomMessageTemplateDefaultAttributesCustomerProfileAttributesOutputReference</a>

---

##### `SystemAttributes`<sup>Required</sup> <a name="SystemAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributes"></a>

```go
func SystemAttributes() WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference</a>

---

##### `AgentAttributesInput`<sup>Optional</sup> <a name="AgentAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.agentAttributesInput"></a>

```go
func AgentAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `CustomAttributesInput`<sup>Optional</sup> <a name="CustomAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributesInput"></a>

```go
func CustomAttributesInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `CustomerProfileAttributesInput`<sup>Optional</sup> <a name="CustomerProfileAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customerProfileAttributesInput"></a>

```go
func CustomerProfileAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `SystemAttributesInput`<sup>Optional</sup> <a name="SystemAttributesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.systemAttributesInput"></a>

```go
func SystemAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `CustomAttributes`<sup>Required</sup> <a name="CustomAttributes" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.customAttributes"></a>

```go
func CustomAttributes() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.resetAddress"></a>

```go
func ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint">PutCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint">PutSystemEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetCustomerEndpoint">ResetCustomerEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetSystemEndpoint">ResetSystemEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomerEndpoint` <a name="PutCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint"></a>

```go
func PutCustomerEndpoint(value WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putCustomerEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpoint</a>

---

##### `PutSystemEndpoint` <a name="PutSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint"></a>

```go
func PutSystemEndpoint(value WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.putSystemEndpoint.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpoint</a>

---

##### `ResetCustomerEndpoint` <a name="ResetCustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetCustomerEndpoint"></a>

```go
func ResetCustomerEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetSystemEndpoint` <a name="ResetSystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.resetSystemEndpoint"></a>

```go
func ResetSystemEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint">CustomerEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint">SystemEndpoint</a></code> | <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpointInput">CustomerEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpointInput">SystemEndpointInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerEndpoint`<sup>Required</sup> <a name="CustomerEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpoint"></a>

```go
func CustomerEndpoint() WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesCustomerEndpointOutputReference</a>

---

##### `SystemEndpoint`<sup>Required</sup> <a name="SystemEndpoint" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpoint"></a>

```go
func SystemEndpoint() WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference">WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference</a>

---

##### `CustomerEndpointInput`<sup>Optional</sup> <a name="CustomerEndpointInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.customerEndpointInput"></a>

```go
func CustomerEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `SystemEndpointInput`<sup>Optional</sup> <a name="SystemEndpointInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.systemEndpointInput"></a>

```go
func SystemEndpointInput() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference <a name="WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resetAddress">ResetAddress</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAddress` <a name="ResetAddress" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.resetAddress"></a>

```go
func ResetAddress()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.addressInput">AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address">Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AddressInput`<sup>Optional</sup> <a name="AddressInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.addressInput"></a>

```go
func AddressInput() *string
```

- *Type:* *string

---

##### `Address`<sup>Required</sup> <a name="Address" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.address"></a>

```go
func Address() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateDefaultAttributesSystemAttributesSystemEndpointOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateGroupingConfigurationOutputReference <a name="WisdomMessageTemplateGroupingConfigurationOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateGroupingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) WisdomMessageTemplateGroupingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetCriteria">ResetCriteria</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCriteria` <a name="ResetCriteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetCriteria"></a>

```go
func ResetCriteria()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteriaInput">CriteriaInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria">Criteria</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CriteriaInput`<sup>Optional</sup> <a name="CriteriaInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteriaInput"></a>

```go
func CriteriaInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Criteria`<sup>Required</sup> <a name="Criteria" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.criteria"></a>

```go
func Criteria() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateGroupingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateMessageTemplateAttachmentsList <a name="WisdomMessageTemplateMessageTemplateAttachmentsList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateMessageTemplateAttachmentsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomMessageTemplateMessageTemplateAttachmentsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get"></a>

```go
func Get(index *f64) WisdomMessageTemplateMessageTemplateAttachmentsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateMessageTemplateAttachmentsOutputReference <a name="WisdomMessageTemplateMessageTemplateAttachmentsOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateMessageTemplateAttachmentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomMessageTemplateMessageTemplateAttachmentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentId">ResetAttachmentId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentName">ResetAttachmentName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetS3PresignedUrl">ResetS3PresignedUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAttachmentId` <a name="ResetAttachmentId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentId"></a>

```go
func ResetAttachmentId()
```

##### `ResetAttachmentName` <a name="ResetAttachmentName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetAttachmentName"></a>

```go
func ResetAttachmentName()
```

##### `ResetS3PresignedUrl` <a name="ResetS3PresignedUrl" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.resetS3PresignedUrl"></a>

```go
func ResetS3PresignedUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentIdInput">AttachmentIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentNameInput">AttachmentNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrlInput">S3PresignedUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId">AttachmentId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName">AttachmentName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl">S3PresignedUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttachmentIdInput`<sup>Optional</sup> <a name="AttachmentIdInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentIdInput"></a>

```go
func AttachmentIdInput() *string
```

- *Type:* *string

---

##### `AttachmentNameInput`<sup>Optional</sup> <a name="AttachmentNameInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentNameInput"></a>

```go
func AttachmentNameInput() *string
```

- *Type:* *string

---

##### `S3PresignedUrlInput`<sup>Optional</sup> <a name="S3PresignedUrlInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrlInput"></a>

```go
func S3PresignedUrlInput() *string
```

- *Type:* *string

---

##### `AttachmentId`<sup>Required</sup> <a name="AttachmentId" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentId"></a>

```go
func AttachmentId() *string
```

- *Type:* *string

---

##### `AttachmentName`<sup>Required</sup> <a name="AttachmentName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.attachmentName"></a>

```go
func AttachmentName() *string
```

- *Type:* *string

---

##### `S3PresignedUrl`<sup>Required</sup> <a name="S3PresignedUrl" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.s3PresignedUrl"></a>

```go
func S3PresignedUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateMessageTemplateAttachmentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateTagsList <a name="WisdomMessageTemplateTagsList" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) WisdomMessageTemplateTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get"></a>

```go
func Get(index *f64) WisdomMessageTemplateTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### WisdomMessageTemplateTagsOutputReference <a name="WisdomMessageTemplateTagsOutputReference" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/wisdommessagetemplate"

wisdommessagetemplate.NewWisdomMessageTemplateTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) WisdomMessageTemplateTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.wisdomMessageTemplate.WisdomMessageTemplateTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



