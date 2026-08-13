# `notificationsEventRule` Submodule <a name="`notificationsEventRule` Submodule" id="@cdktn/provider-awscc.notificationsEventRule"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NotificationsEventRule <a name="NotificationsEventRule" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule awscc_notifications_event_rule}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationseventrule"

notificationseventrule.NewNotificationsEventRule(scope Construct, id *string, config NotificationsEventRuleConfig) NotificationsEventRule
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig">NotificationsEventRuleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig">NotificationsEventRuleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetEventPattern">ResetEventPattern</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetEventPattern` <a name="ResetEventPattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.resetEventPattern"></a>

```go
func ResetEventPattern()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NotificationsEventRule resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationseventrule"

notificationseventrule.NotificationsEventRule_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationseventrule"

notificationseventrule.NotificationsEventRule_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationseventrule"

notificationseventrule.NotificationsEventRule_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationseventrule"

notificationseventrule.NotificationsEventRule_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NotificationsEventRule resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NotificationsEventRule to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NotificationsEventRule that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NotificationsEventRule to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.managedRules">ManagedRules</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.statusSummaryByRegion">StatusSummaryByRegion</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap">NotificationsEventRuleStatusSummaryByRegionMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPatternInput">EventPatternInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventTypeInput">EventTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArnInput">NotificationConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.sourceInput">SourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPattern">EventPattern</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventType">EventType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArn">NotificationConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.source">Source</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ManagedRules`<sup>Required</sup> <a name="ManagedRules" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.managedRules"></a>

```go
func ManagedRules() *[]*string
```

- *Type:* *[]*string

---

##### `StatusSummaryByRegion`<sup>Required</sup> <a name="StatusSummaryByRegion" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.statusSummaryByRegion"></a>

```go
func StatusSummaryByRegion() NotificationsEventRuleStatusSummaryByRegionMap
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap">NotificationsEventRuleStatusSummaryByRegionMap</a>

---

##### `EventPatternInput`<sup>Optional</sup> <a name="EventPatternInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPatternInput"></a>

```go
func EventPatternInput() *string
```

- *Type:* *string

---

##### `EventTypeInput`<sup>Optional</sup> <a name="EventTypeInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventTypeInput"></a>

```go
func EventTypeInput() *string
```

- *Type:* *string

---

##### `NotificationConfigurationArnInput`<sup>Optional</sup> <a name="NotificationConfigurationArnInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArnInput"></a>

```go
func NotificationConfigurationArnInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SourceInput`<sup>Optional</sup> <a name="SourceInput" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.sourceInput"></a>

```go
func SourceInput() *string
```

- *Type:* *string

---

##### `EventPattern`<sup>Required</sup> <a name="EventPattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventPattern"></a>

```go
func EventPattern() *string
```

- *Type:* *string

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.eventType"></a>

```go
func EventType() *string
```

- *Type:* *string

---

##### `NotificationConfigurationArn`<sup>Required</sup> <a name="NotificationConfigurationArn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.notificationConfigurationArn"></a>

```go
func NotificationConfigurationArn() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.source"></a>

```go
func Source() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRule.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NotificationsEventRuleConfig <a name="NotificationsEventRuleConfig" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationseventrule"

&notificationseventrule.NotificationsEventRuleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	EventType: *string,
	NotificationConfigurationArn: *string,
	Regions: *[]*string,
	Source: *string,
	EventPattern: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventType">EventType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#event_type NotificationsEventRule#event_type}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.notificationConfigurationArn">NotificationConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#notification_configuration_arn NotificationsEventRule#notification_configuration_arn}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.regions">Regions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#regions NotificationsEventRule#regions}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.source">Source</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#source NotificationsEventRule#source}. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventPattern">EventPattern</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#event_pattern NotificationsEventRule#event_pattern}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EventType`<sup>Required</sup> <a name="EventType" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventType"></a>

```go
EventType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#event_type NotificationsEventRule#event_type}.

---

##### `NotificationConfigurationArn`<sup>Required</sup> <a name="NotificationConfigurationArn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.notificationConfigurationArn"></a>

```go
NotificationConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#notification_configuration_arn NotificationsEventRule#notification_configuration_arn}.

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#regions NotificationsEventRule#regions}.

---

##### `Source`<sup>Required</sup> <a name="Source" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.source"></a>

```go
Source *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#source NotificationsEventRule#source}.

---

##### `EventPattern`<sup>Optional</sup> <a name="EventPattern" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleConfig.property.eventPattern"></a>

```go
EventPattern *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/notifications_event_rule#event_pattern NotificationsEventRule#event_pattern}.

---

### NotificationsEventRuleStatusSummaryByRegion <a name="NotificationsEventRuleStatusSummaryByRegion" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationseventrule"

&notificationseventrule.NotificationsEventRuleStatusSummaryByRegion {

}
```


## Classes <a name="Classes" id="Classes"></a>

### NotificationsEventRuleStatusSummaryByRegionMap <a name="NotificationsEventRuleStatusSummaryByRegionMap" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationseventrule"

notificationseventrule.NewNotificationsEventRuleStatusSummaryByRegionMap(terraformResource IInterpolatingParent, terraformAttribute *string) NotificationsEventRuleStatusSummaryByRegionMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.get"></a>

```go
func Get(key *string) NotificationsEventRuleStatusSummaryByRegionOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---


### NotificationsEventRuleStatusSummaryByRegionOutputReference <a name="NotificationsEventRuleStatusSummaryByRegionOutputReference" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/notificationseventrule"

notificationseventrule.NewNotificationsEventRuleStatusSummaryByRegionOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) NotificationsEventRuleStatusSummaryByRegionOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.reason">Reason</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion">NotificationsEventRuleStatusSummaryByRegion</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Reason`<sup>Required</sup> <a name="Reason" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.reason"></a>

```go
func Reason() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegionOutputReference.property.internalValue"></a>

```go
func InternalValue() NotificationsEventRuleStatusSummaryByRegion
```

- *Type:* <a href="#@cdktn/provider-awscc.notificationsEventRule.NotificationsEventRuleStatusSummaryByRegion">NotificationsEventRuleStatusSummaryByRegion</a>

---



