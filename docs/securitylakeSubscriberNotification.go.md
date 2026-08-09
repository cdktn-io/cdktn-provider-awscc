# `securitylakeSubscriberNotification` Submodule <a name="`securitylakeSubscriberNotification` Submodule" id="@cdktn/provider-awscc.securitylakeSubscriberNotification"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SecuritylakeSubscriberNotification <a name="SecuritylakeSubscriberNotification" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification awscc_securitylake_subscriber_notification}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotification(scope Construct, id *string, config SecuritylakeSubscriberNotificationConfig) SecuritylakeSubscriberNotification
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig">SecuritylakeSubscriberNotificationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig">SecuritylakeSubscriberNotificationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration">PutNotificationConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutNotificationConfiguration` <a name="PutNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration"></a>

```go
func PutNotificationConfiguration(value SecuritylakeSubscriberNotificationNotificationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.putNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

securitylakesubscribernotification.SecuritylakeSubscriberNotification_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

securitylakesubscribernotification.SecuritylakeSubscriberNotification_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

securitylakesubscribernotification.SecuritylakeSubscriberNotification_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

securitylakesubscribernotification.SecuritylakeSubscriberNotification_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SecuritylakeSubscriberNotification resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SecuritylakeSubscriberNotification to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SecuritylakeSubscriberNotification that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SecuritylakeSubscriberNotification to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberEndpoint">SubscriberEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfigurationInput">NotificationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArnInput">SubscriberArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArn">SubscriberArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NotificationConfiguration`<sup>Required</sup> <a name="NotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfiguration"></a>

```go
func NotificationConfiguration() SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference</a>

---

##### `SubscriberEndpoint`<sup>Required</sup> <a name="SubscriberEndpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberEndpoint"></a>

```go
func SubscriberEndpoint() *string
```

- *Type:* *string

---

##### `NotificationConfigurationInput`<sup>Optional</sup> <a name="NotificationConfigurationInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.notificationConfigurationInput"></a>

```go
func NotificationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SubscriberArnInput`<sup>Optional</sup> <a name="SubscriberArnInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArnInput"></a>

```go
func SubscriberArnInput() *string
```

- *Type:* *string

---

##### `SubscriberArn`<sup>Required</sup> <a name="SubscriberArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.subscriberArn"></a>

```go
func SubscriberArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotification.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SecuritylakeSubscriberNotificationConfig <a name="SecuritylakeSubscriberNotificationConfig" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

&securitylakesubscribernotification.SecuritylakeSubscriberNotificationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	NotificationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration,
	SubscriberArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.notificationConfiguration">NotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#notification_configuration SecuritylakeSubscriberNotification#notification_configuration}. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberArn">SubscriberArn</a></code> | <code>*string</code> | The ARN for the subscriber. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `NotificationConfiguration`<sup>Required</sup> <a name="NotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.notificationConfiguration"></a>

```go
NotificationConfiguration SecuritylakeSubscriberNotificationNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#notification_configuration SecuritylakeSubscriberNotification#notification_configuration}.

---

##### `SubscriberArn`<sup>Required</sup> <a name="SubscriberArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationConfig.property.subscriberArn"></a>

```go
SubscriberArn *string
```

- *Type:* *string

The ARN for the subscriber.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#subscriber_arn SecuritylakeSubscriberNotification#subscriber_arn}

---

### SecuritylakeSubscriberNotificationNotificationConfiguration <a name="SecuritylakeSubscriberNotificationNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

&securitylakesubscribernotification.SecuritylakeSubscriberNotificationNotificationConfiguration {
	HttpsNotificationConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration,
	SqsNotificationConfiguration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.httpsNotificationConfiguration">HttpsNotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a></code> | The configuration for HTTPS subscriber notification. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.sqsNotificationConfiguration">SqsNotificationConfiguration</a></code> | <code>*string</code> | The configurations for SQS subscriber notification. The members of this structure are context-dependent. |

---

##### `HttpsNotificationConfiguration`<sup>Optional</sup> <a name="HttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.httpsNotificationConfiguration"></a>

```go
HttpsNotificationConfiguration SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

The configuration for HTTPS subscriber notification.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#https_notification_configuration SecuritylakeSubscriberNotification#https_notification_configuration}

---

##### `SqsNotificationConfiguration`<sup>Optional</sup> <a name="SqsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfiguration.property.sqsNotificationConfiguration"></a>

```go
SqsNotificationConfiguration *string
```

- *Type:* *string

The configurations for SQS subscriber notification. The members of this structure are context-dependent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#sqs_notification_configuration SecuritylakeSubscriberNotification#sqs_notification_configuration}

---

### SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration <a name="SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

&securitylakesubscribernotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration {
	AuthorizationApiKeyName: *string,
	AuthorizationApiKeyValue: *string,
	Endpoint: *string,
	HttpMethod: *string,
	TargetRoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName">AuthorizationApiKeyName</a></code> | <code>*string</code> | The key name for the notification subscription. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue">AuthorizationApiKeyValue</a></code> | <code>*string</code> | The key value for the notification subscription. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.endpoint">Endpoint</a></code> | <code>*string</code> | The subscription endpoint in Security Lake. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | The HTTPS method used for the notification subscription. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn">TargetRoleArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created. |

---

##### `AuthorizationApiKeyName`<sup>Optional</sup> <a name="AuthorizationApiKeyName" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyName"></a>

```go
AuthorizationApiKeyName *string
```

- *Type:* *string

The key name for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_name SecuritylakeSubscriberNotification#authorization_api_key_name}

---

##### `AuthorizationApiKeyValue`<sup>Optional</sup> <a name="AuthorizationApiKeyValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.authorizationApiKeyValue"></a>

```go
AuthorizationApiKeyValue *string
```

- *Type:* *string

The key value for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#authorization_api_key_value SecuritylakeSubscriberNotification#authorization_api_key_value}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

The subscription endpoint in Security Lake.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#endpoint SecuritylakeSubscriberNotification#endpoint}

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

The HTTPS method used for the notification subscription.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#http_method SecuritylakeSubscriberNotification#http_method}

---

##### `TargetRoleArn`<sup>Optional</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration.property.targetRoleArn"></a>

```go
TargetRoleArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the EventBridge API destinations IAM role that you created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/securitylake_subscriber_notification#target_role_arn SecuritylakeSubscriberNotification#target_role_arn}

---

## Classes <a name="Classes" id="Classes"></a>

### SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName">ResetAuthorizationApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue">ResetAuthorizationApiKeyValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetTargetRoleArn">ResetTargetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationApiKeyName` <a name="ResetAuthorizationApiKeyName" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyName"></a>

```go
func ResetAuthorizationApiKeyName()
```

##### `ResetAuthorizationApiKeyValue` <a name="ResetAuthorizationApiKeyValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetAuthorizationApiKeyValue"></a>

```go
func ResetAuthorizationApiKeyValue()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetTargetRoleArn` <a name="ResetTargetRoleArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.resetTargetRoleArn"></a>

```go
func ResetTargetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput">AuthorizationApiKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput">AuthorizationApiKeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput">TargetRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName">AuthorizationApiKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue">AuthorizationApiKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn">TargetRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationApiKeyNameInput`<sup>Optional</sup> <a name="AuthorizationApiKeyNameInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyNameInput"></a>

```go
func AuthorizationApiKeyNameInput() *string
```

- *Type:* *string

---

##### `AuthorizationApiKeyValueInput`<sup>Optional</sup> <a name="AuthorizationApiKeyValueInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValueInput"></a>

```go
func AuthorizationApiKeyValueInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `TargetRoleArnInput`<sup>Optional</sup> <a name="TargetRoleArnInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArnInput"></a>

```go
func TargetRoleArnInput() *string
```

- *Type:* *string

---

##### `AuthorizationApiKeyName`<sup>Required</sup> <a name="AuthorizationApiKeyName" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyName"></a>

```go
func AuthorizationApiKeyName() *string
```

- *Type:* *string

---

##### `AuthorizationApiKeyValue`<sup>Required</sup> <a name="AuthorizationApiKeyValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.authorizationApiKeyValue"></a>

```go
func AuthorizationApiKeyValue() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `TargetRoleArn`<sup>Required</sup> <a name="TargetRoleArn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.targetRoleArn"></a>

```go
func TargetRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference <a name="SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/securitylakesubscribernotification"

securitylakesubscribernotification.NewSecuritylakeSubscriberNotificationNotificationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration">PutHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration">ResetHttpsNotificationConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetSqsNotificationConfiguration">ResetSqsNotificationConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHttpsNotificationConfiguration` <a name="PutHttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration"></a>

```go
func PutHttpsNotificationConfiguration(value SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.putHttpsNotificationConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfiguration</a>

---

##### `ResetHttpsNotificationConfiguration` <a name="ResetHttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetHttpsNotificationConfiguration"></a>

```go
func ResetHttpsNotificationConfiguration()
```

##### `ResetSqsNotificationConfiguration` <a name="ResetSqsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.resetSqsNotificationConfiguration"></a>

```go
func ResetSqsNotificationConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration">HttpsNotificationConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput">HttpsNotificationConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput">SqsNotificationConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration">SqsNotificationConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HttpsNotificationConfiguration`<sup>Required</sup> <a name="HttpsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfiguration"></a>

```go
func HttpsNotificationConfiguration() SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference">SecuritylakeSubscriberNotificationNotificationConfigurationHttpsNotificationConfigurationOutputReference</a>

---

##### `HttpsNotificationConfigurationInput`<sup>Optional</sup> <a name="HttpsNotificationConfigurationInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.httpsNotificationConfigurationInput"></a>

```go
func HttpsNotificationConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SqsNotificationConfigurationInput`<sup>Optional</sup> <a name="SqsNotificationConfigurationInput" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfigurationInput"></a>

```go
func SqsNotificationConfigurationInput() *string
```

- *Type:* *string

---

##### `SqsNotificationConfiguration`<sup>Required</sup> <a name="SqsNotificationConfiguration" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.sqsNotificationConfiguration"></a>

```go
func SqsNotificationConfiguration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.securitylakeSubscriberNotification.SecuritylakeSubscriberNotificationNotificationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



