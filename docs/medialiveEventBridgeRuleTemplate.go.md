# `medialiveEventBridgeRuleTemplate` Submodule <a name="`medialiveEventBridgeRuleTemplate` Submodule" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveEventBridgeRuleTemplate <a name="MedialiveEventBridgeRuleTemplate" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_event_bridge_rule_template awscc_medialive_event_bridge_rule_template}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialiveeventbridgeruletemplate"

medialiveeventbridgeruletemplate.NewMedialiveEventBridgeRuleTemplate(scope Construct, id *string, config MedialiveEventBridgeRuleTemplateConfig) MedialiveEventBridgeRuleTemplate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig">MedialiveEventBridgeRuleTemplateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig">MedialiveEventBridgeRuleTemplateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.putEventTargets">PutEventTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetEventTargets">ResetEventTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetGroupIdentifier">ResetGroupIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutEventTargets` <a name="PutEventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.putEventTargets"></a>

```go
func PutEventTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.putEventTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEventTargets` <a name="ResetEventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetEventTargets"></a>

```go
func ResetEventTargets()
```

##### `ResetGroupIdentifier` <a name="ResetGroupIdentifier" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetGroupIdentifier"></a>

```go
func ResetGroupIdentifier()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveEventBridgeRuleTemplate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialiveeventbridgeruletemplate"

medialiveeventbridgeruletemplate.MedialiveEventBridgeRuleTemplate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialiveeventbridgeruletemplate"

medialiveeventbridgeruletemplate.MedialiveEventBridgeRuleTemplate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialiveeventbridgeruletemplate"

medialiveeventbridgeruletemplate.MedialiveEventBridgeRuleTemplate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialiveeventbridgeruletemplate"

medialiveeventbridgeruletemplate.MedialiveEventBridgeRuleTemplate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MedialiveEventBridgeRuleTemplate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MedialiveEventBridgeRuleTemplate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MedialiveEventBridgeRuleTemplate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_event_bridge_rule_template#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveEventBridgeRuleTemplate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventBridgeRuleTemplateId">EventBridgeRuleTemplateId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTargets">EventTargets</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList">MedialiveEventBridgeRuleTemplateEventTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupId">GroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTargetsInput">EventTargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupIdentifierInput">GroupIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupIdentifier">GroupIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `EventBridgeRuleTemplateId`<sup>Required</sup> <a name="EventBridgeRuleTemplateId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventBridgeRuleTemplateId"></a>

```go
func EventBridgeRuleTemplateId() *string
```

- *Type:* *string

---

##### `EventTargets`<sup>Required</sup> <a name="EventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTargets"></a>

```go
func EventTargets() MedialiveEventBridgeRuleTemplateEventTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList">MedialiveEventBridgeRuleTemplateEventTargetsList</a>

---

##### `GroupId`<sup>Required</sup> <a name="GroupId" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupId"></a>

```go
func GroupId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EventTargetsInput`<sup>Optional</sup> <a name="EventTargetsInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTargetsInput"></a>

```go
func EventTargetsInput() interface{}
```

- *Type:* interface{}

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `GroupIdentifierInput`<sup>Optional</sup> <a name="GroupIdentifierInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupIdentifierInput"></a>

```go
func GroupIdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `GroupIdentifier`<sup>Required</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.groupIdentifier"></a>

```go
func GroupIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveEventBridgeRuleTemplateConfig <a name="MedialiveEventBridgeRuleTemplateConfig" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialiveeventbridgeruletemplate"

&medialiveeventbridgeruletemplate.MedialiveEventBridgeRuleTemplateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EventType: *string,
	Name: *string,
	Description: *string,
	EventTargets: interface{},
	GroupIdentifier: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.eventType">EventType</a></code> | <code>*string</code> | The type of event to match with the rule. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.name">Name</a></code> | <code>*string</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.description">Description</a></code> | <code>*string</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.eventTargets">EventTargets</a></code> | <code>interface{}</code> | Placeholder documentation for __listOfEventBridgeRuleTemplateTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.groupIdentifier">GroupIdentifier</a></code> | <code>*string</code> | An eventbridge rule template group's identifier. Can be either be its id or current name. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Represents the tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

The type of event to match with the rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_event_bridge_rule_template#event_type MedialiveEventBridgeRuleTemplate#event_type}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_event_bridge_rule_template#name MedialiveEventBridgeRuleTemplate#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_event_bridge_rule_template#description MedialiveEventBridgeRuleTemplate#description}

---

##### `EventTargets`<sup>Optional</sup> <a name="EventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.eventTargets"></a>

```go
EventTargets interface{}
```

- *Type:* interface{}

Placeholder documentation for __listOfEventBridgeRuleTemplateTarget.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_event_bridge_rule_template#event_targets MedialiveEventBridgeRuleTemplate#event_targets}

---

##### `GroupIdentifier`<sup>Optional</sup> <a name="GroupIdentifier" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.groupIdentifier"></a>

```go
GroupIdentifier *string
```

- *Type:* *string

An eventbridge rule template group's identifier. Can be either be its id or current name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_event_bridge_rule_template#group_identifier MedialiveEventBridgeRuleTemplate#group_identifier}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_event_bridge_rule_template#tags MedialiveEventBridgeRuleTemplate#tags}

---

### MedialiveEventBridgeRuleTemplateEventTargets <a name="MedialiveEventBridgeRuleTemplateEventTargets" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialiveeventbridgeruletemplate"

&medialiveeventbridgeruletemplate.MedialiveEventBridgeRuleTemplateEventTargets {
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets.property.arn">Arn</a></code> | <code>*string</code> | Target ARNs must be either an SNS topic or CloudWatch log group. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargets.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Target ARNs must be either an SNS topic or CloudWatch log group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/medialive_event_bridge_rule_template#arn MedialiveEventBridgeRuleTemplate#arn}

---

## Classes <a name="Classes" id="Classes"></a>

### MedialiveEventBridgeRuleTemplateEventTargetsList <a name="MedialiveEventBridgeRuleTemplateEventTargetsList" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialiveeventbridgeruletemplate"

medialiveeventbridgeruletemplate.NewMedialiveEventBridgeRuleTemplateEventTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) MedialiveEventBridgeRuleTemplateEventTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.get"></a>

```go
func Get(index *f64) MedialiveEventBridgeRuleTemplateEventTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### MedialiveEventBridgeRuleTemplateEventTargetsOutputReference <a name="MedialiveEventBridgeRuleTemplateEventTargetsOutputReference" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialiveeventbridgeruletemplate"

medialiveeventbridgeruletemplate.NewMedialiveEventBridgeRuleTemplateEventTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) MedialiveEventBridgeRuleTemplateEventTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.resetArn"></a>

```go
func ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.medialiveEventBridgeRuleTemplate.MedialiveEventBridgeRuleTemplateEventTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



