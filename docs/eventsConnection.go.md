# `eventsConnection` Submodule <a name="`eventsConnection` Submodule" id="@cdktn/provider-awscc.eventsConnection"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### EventsConnection <a name="EventsConnection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection awscc_events_connection}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnection(scope Construct, id *string, config EventsConnectionConfig) EventsConnection
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig">EventsConnectionConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig">EventsConnectionConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters">PutAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters">PutInvocationConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthorizationType">ResetAuthorizationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthParameters">ResetAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetInvocationConnectivityParameters">ResetInvocationConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetKmsKeyIdentifier">ResetKmsKeyIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.resetName">ResetName</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthParameters` <a name="PutAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters"></a>

```go
func PutAuthParameters(value EventsConnectionAuthParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

---

##### `PutInvocationConnectivityParameters` <a name="PutInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters"></a>

```go
func PutInvocationConnectivityParameters(value EventsConnectionInvocationConnectivityParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.putInvocationConnectivityParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

---

##### `ResetAuthorizationType` <a name="ResetAuthorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthorizationType"></a>

```go
func ResetAuthorizationType()
```

##### `ResetAuthParameters` <a name="ResetAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetAuthParameters"></a>

```go
func ResetAuthParameters()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetInvocationConnectivityParameters` <a name="ResetInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetInvocationConnectivityParameters"></a>

```go
func ResetInvocationConnectivityParameters()
```

##### `ResetKmsKeyIdentifier` <a name="ResetKmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetKmsKeyIdentifier"></a>

```go
func ResetKmsKeyIdentifier()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.resetName"></a>

```go
func ResetName()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a EventsConnection resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.EventsConnection_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.EventsConnection_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.EventsConnection_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.EventsConnection_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a EventsConnection resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the EventsConnection to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing EventsConnection that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the EventsConnection to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arnForPolicy">ArnForPolicy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParameters">AuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference">EventsConnectionAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParameters">InvocationConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference">EventsConnectionInvocationConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.secretArn">SecretArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationTypeInput">AuthorizationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParametersInput">AuthParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParametersInput">InvocationConnectivityParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifierInput">KmsKeyIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `ArnForPolicy`<sup>Required</sup> <a name="ArnForPolicy" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.arnForPolicy"></a>

```go
func ArnForPolicy() *string
```

- *Type:* *string

---

##### `AuthParameters`<sup>Required</sup> <a name="AuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParameters"></a>

```go
func AuthParameters() EventsConnectionAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference">EventsConnectionAuthParametersOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InvocationConnectivityParameters`<sup>Required</sup> <a name="InvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParameters"></a>

```go
func InvocationConnectivityParameters() EventsConnectionInvocationConnectivityParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference">EventsConnectionInvocationConnectivityParametersOutputReference</a>

---

##### `SecretArn`<sup>Required</sup> <a name="SecretArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.secretArn"></a>

```go
func SecretArn() *string
```

- *Type:* *string

---

##### `AuthorizationTypeInput`<sup>Optional</sup> <a name="AuthorizationTypeInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationTypeInput"></a>

```go
func AuthorizationTypeInput() *string
```

- *Type:* *string

---

##### `AuthParametersInput`<sup>Optional</sup> <a name="AuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authParametersInput"></a>

```go
func AuthParametersInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `InvocationConnectivityParametersInput`<sup>Optional</sup> <a name="InvocationConnectivityParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.invocationConnectivityParametersInput"></a>

```go
func InvocationConnectivityParametersInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyIdentifierInput`<sup>Optional</sup> <a name="KmsKeyIdentifierInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifierInput"></a>

```go
func KmsKeyIdentifierInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `AuthorizationType`<sup>Required</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.authorizationType"></a>

```go
func AuthorizationType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyIdentifier`<sup>Required</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.kmsKeyIdentifier"></a>

```go
func KmsKeyIdentifier() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnection.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.eventsConnection.EventsConnection.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### EventsConnectionAuthParameters <a name="EventsConnectionAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParameters {
	ApiKeyAuthParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters,
	BasicAuthParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters,
	ConnectivityParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters,
	InvocationHttpParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters,
	OAuthParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.apiKeyAuthParameters">ApiKeyAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.basicAuthParameters">BasicAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.connectivityParameters">ConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.invocationHttpParameters">InvocationHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.oAuthParameters">OAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}. |

---

##### `ApiKeyAuthParameters`<sup>Optional</sup> <a name="ApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.apiKeyAuthParameters"></a>

```go
ApiKeyAuthParameters EventsConnectionAuthParametersApiKeyAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_auth_parameters EventsConnection#api_key_auth_parameters}.

---

##### `BasicAuthParameters`<sup>Optional</sup> <a name="BasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.basicAuthParameters"></a>

```go
BasicAuthParameters EventsConnectionAuthParametersBasicAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#basic_auth_parameters EventsConnection#basic_auth_parameters}.

---

##### `ConnectivityParameters`<sup>Optional</sup> <a name="ConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.connectivityParameters"></a>

```go
ConnectivityParameters EventsConnectionAuthParametersConnectivityParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#connectivity_parameters EventsConnection#connectivity_parameters}.

---

##### `InvocationHttpParameters`<sup>Optional</sup> <a name="InvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.invocationHttpParameters"></a>

```go
InvocationHttpParameters EventsConnectionAuthParametersInvocationHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#invocation_http_parameters EventsConnection#invocation_http_parameters}.

---

##### `OAuthParameters`<sup>Optional</sup> <a name="OAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters.property.oAuthParameters"></a>

```go
OAuthParameters EventsConnectionAuthParametersOAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#o_auth_parameters EventsConnection#o_auth_parameters}.

---

### EventsConnectionAuthParametersApiKeyAuthParameters <a name="EventsConnectionAuthParametersApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersApiKeyAuthParameters {
	ApiKeyName: *string,
	ApiKeyValue: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyName">ApiKeyName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyValue">ApiKeyValue</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}. |

---

##### `ApiKeyName`<sup>Optional</sup> <a name="ApiKeyName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyName"></a>

```go
ApiKeyName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_name EventsConnection#api_key_name}.

---

##### `ApiKeyValue`<sup>Optional</sup> <a name="ApiKeyValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters.property.apiKeyValue"></a>

```go
ApiKeyValue *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#api_key_value EventsConnection#api_key_value}.

---

### EventsConnectionAuthParametersBasicAuthParameters <a name="EventsConnectionAuthParametersBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersBasicAuthParameters {
	Password: *string,
	Username: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.password">Password</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#password EventsConnection#password}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.username">Username</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#username EventsConnection#username}. |

---

##### `Password`<sup>Optional</sup> <a name="Password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.password"></a>

```go
Password *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#password EventsConnection#password}.

---

##### `Username`<sup>Optional</sup> <a name="Username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters.property.username"></a>

```go
Username *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#username EventsConnection#username}.

---

### EventsConnectionAuthParametersConnectivityParameters <a name="EventsConnectionAuthParametersConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersConnectivityParameters {
	ResourceParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}. |

---

##### `ResourceParameters`<sup>Optional</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters.property.resourceParameters"></a>

```go
ResourceParameters EventsConnectionAuthParametersConnectivityParametersResourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

### EventsConnectionAuthParametersConnectivityParametersResourceParameters <a name="EventsConnectionAuthParametersConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters {
	ResourceConfigurationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}. |

---

##### `ResourceConfigurationArn`<sup>Optional</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters.property.resourceConfigurationArn"></a>

```go
ResourceConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

### EventsConnectionAuthParametersInvocationHttpParameters <a name="EventsConnectionAuthParametersInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersInvocationHttpParameters {
	BodyParameters: interface{},
	HeaderParameters: interface{},
	QueryStringParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.bodyParameters">BodyParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.headerParameters">HeaderParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.queryStringParameters">QueryStringParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}. |

---

##### `BodyParameters`<sup>Optional</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.bodyParameters"></a>

```go
BodyParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

##### `HeaderParameters`<sup>Optional</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.headerParameters"></a>

```go
HeaderParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

##### `QueryStringParameters`<sup>Optional</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters.property.queryStringParameters"></a>

```go
QueryStringParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

### EventsConnectionAuthParametersInvocationHttpParametersBodyParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParameters <a name="EventsConnectionAuthParametersOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersOAuthParameters {
	AuthorizationEndpoint: *string,
	ClientParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters,
	HttpMethod: *string,
	OAuthHttpParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.clientParameters">ClientParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#http_method EventsConnection#http_method}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.oAuthHttpParameters">OAuthHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}. |

---

##### `AuthorizationEndpoint`<sup>Optional</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#authorization_endpoint EventsConnection#authorization_endpoint}.

---

##### `ClientParameters`<sup>Optional</sup> <a name="ClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.clientParameters"></a>

```go
ClientParameters EventsConnectionAuthParametersOAuthParametersClientParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_parameters EventsConnection#client_parameters}.

---

##### `HttpMethod`<sup>Optional</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.httpMethod"></a>

```go
HttpMethod *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#http_method EventsConnection#http_method}.

---

##### `OAuthHttpParameters`<sup>Optional</sup> <a name="OAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters.property.oAuthHttpParameters"></a>

```go
OAuthHttpParameters EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#o_auth_http_parameters EventsConnection#o_auth_http_parameters}.

---

### EventsConnectionAuthParametersOAuthParametersClientParameters <a name="EventsConnectionAuthParametersOAuthParametersClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersOAuthParametersClientParameters {
	ClientId: *string,
	ClientSecret: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientId">ClientId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_id EventsConnection#client_id}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}. |

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_id EventsConnection#client_id}.

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#client_secret EventsConnection#client_secret}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters {
	BodyParameters: interface{},
	HeaderParameters: interface{},
	QueryStringParameters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.bodyParameters">BodyParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.headerParameters">HeaderParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.queryStringParameters">QueryStringParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}. |

---

##### `BodyParameters`<sup>Optional</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.bodyParameters"></a>

```go
BodyParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#body_parameters EventsConnection#body_parameters}.

---

##### `HeaderParameters`<sup>Optional</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.headerParameters"></a>

```go
HeaderParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#header_parameters EventsConnection#header_parameters}.

---

##### `QueryStringParameters`<sup>Optional</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters.property.queryStringParameters"></a>

```go
QueryStringParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#query_string_parameters EventsConnection#query_string_parameters}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters {
	IsValueSecret: interface{},
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}. |

---

##### `IsValueSecret`<sup>Optional</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.isValueSecret"></a>

```go
IsValueSecret interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#is_value_secret EventsConnection#is_value_secret}.

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#key EventsConnection#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#value EventsConnection#value}.

---

### EventsConnectionConfig <a name="EventsConnectionConfig" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizationType: *string,
	AuthParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionAuthParameters,
	Description: *string,
	InvocationConnectivityParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters,
	KmsKeyIdentifier: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authorizationType">AuthorizationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authParameters">AuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.description">Description</a></code> | <code>*string</code> | Description of the connection. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.invocationConnectivityParameters">InvocationConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a></code> | The private resource the HTTP request will be sent to. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.kmsKeyIdentifier">KmsKeyIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.name">Name</a></code> | <code>*string</code> | Name of the connection. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizationType`<sup>Optional</sup> <a name="AuthorizationType" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authorizationType"></a>

```go
AuthorizationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#authorization_type EventsConnection#authorization_type}.

---

##### `AuthParameters`<sup>Optional</sup> <a name="AuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.authParameters"></a>

```go
AuthParameters EventsConnectionAuthParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParameters">EventsConnectionAuthParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#auth_parameters EventsConnection#auth_parameters}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Description of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#description EventsConnection#description}

---

##### `InvocationConnectivityParameters`<sup>Optional</sup> <a name="InvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.invocationConnectivityParameters"></a>

```go
InvocationConnectivityParameters EventsConnectionInvocationConnectivityParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters">EventsConnectionInvocationConnectivityParameters</a>

The private resource the HTTP request will be sent to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#invocation_connectivity_parameters EventsConnection#invocation_connectivity_parameters}

---

##### `KmsKeyIdentifier`<sup>Optional</sup> <a name="KmsKeyIdentifier" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.kmsKeyIdentifier"></a>

```go
KmsKeyIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#kms_key_identifier EventsConnection#kms_key_identifier}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Name of the connection.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#name EventsConnection#name}

---

### EventsConnectionInvocationConnectivityParameters <a name="EventsConnectionInvocationConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionInvocationConnectivityParameters {
	ResourceParameters: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}. |

---

##### `ResourceParameters`<sup>Optional</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParameters.property.resourceParameters"></a>

```go
ResourceParameters EventsConnectionInvocationConnectivityParametersResourceParameters
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_parameters EventsConnection#resource_parameters}.

---

### EventsConnectionInvocationConnectivityParametersResourceParameters <a name="EventsConnectionInvocationConnectivityParametersResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

&eventsconnection.EventsConnectionInvocationConnectivityParametersResourceParameters {
	ResourceConfigurationArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}. |

---

##### `ResourceConfigurationArn`<sup>Optional</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters.property.resourceConfigurationArn"></a>

```go
ResourceConfigurationArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/events_connection#resource_configuration_arn EventsConnection#resource_configuration_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### EventsConnectionAuthParametersApiKeyAuthParametersOutputReference <a name="EventsConnectionAuthParametersApiKeyAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersApiKeyAuthParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionAuthParametersApiKeyAuthParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyName">ResetApiKeyName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyValue">ResetApiKeyValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetApiKeyName` <a name="ResetApiKeyName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyName"></a>

```go
func ResetApiKeyName()
```

##### `ResetApiKeyValue` <a name="ResetApiKeyValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.resetApiKeyValue"></a>

```go
func ResetApiKeyValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyNameInput">ApiKeyNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValueInput">ApiKeyValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName">ApiKeyName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue">ApiKeyValue</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyNameInput`<sup>Optional</sup> <a name="ApiKeyNameInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyNameInput"></a>

```go
func ApiKeyNameInput() *string
```

- *Type:* *string

---

##### `ApiKeyValueInput`<sup>Optional</sup> <a name="ApiKeyValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValueInput"></a>

```go
func ApiKeyValueInput() *string
```

- *Type:* *string

---

##### `ApiKeyName`<sup>Required</sup> <a name="ApiKeyName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyName"></a>

```go
func ApiKeyName() *string
```

- *Type:* *string

---

##### `ApiKeyValue`<sup>Required</sup> <a name="ApiKeyValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.apiKeyValue"></a>

```go
func ApiKeyValue() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersBasicAuthParametersOutputReference <a name="EventsConnectionAuthParametersBasicAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersBasicAuthParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionAuthParametersBasicAuthParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetPassword">ResetPassword</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetUsername">ResetUsername</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassword` <a name="ResetPassword" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetPassword"></a>

```go
func ResetPassword()
```

##### `ResetUsername` <a name="ResetUsername" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.resetUsername"></a>

```go
func ResetUsername()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.passwordInput">PasswordInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.usernameInput">UsernameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password">Password</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username">Username</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PasswordInput`<sup>Optional</sup> <a name="PasswordInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.passwordInput"></a>

```go
func PasswordInput() *string
```

- *Type:* *string

---

##### `UsernameInput`<sup>Optional</sup> <a name="UsernameInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.usernameInput"></a>

```go
func UsernameInput() *string
```

- *Type:* *string

---

##### `Password`<sup>Required</sup> <a name="Password" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.password"></a>

```go
func Password() *string
```

- *Type:* *string

---

##### `Username`<sup>Required</sup> <a name="Username" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.username"></a>

```go
func Username() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersConnectivityParametersOutputReference <a name="EventsConnectionAuthParametersConnectivityParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersConnectivityParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionAuthParametersConnectivityParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters">PutResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resetResourceParameters">ResetResourceParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceParameters` <a name="PutResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters"></a>

```go
func PutResourceParameters(value EventsConnectionAuthParametersConnectivityParametersResourceParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.putResourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParameters">EventsConnectionAuthParametersConnectivityParametersResourceParameters</a>

---

##### `ResetResourceParameters` <a name="ResetResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.resetResourceParameters"></a>

```go
func ResetResourceParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParametersInput">ResourceParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceParameters`<sup>Required</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParameters"></a>

```go
func ResourceParameters() EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference</a>

---

##### `ResourceParametersInput`<sup>Optional</sup> <a name="ResourceParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.resourceParametersInput"></a>

```go
func ResourceParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference <a name="EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn">ResetResourceConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationArn` <a name="ResetResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn"></a>

```go
func ResetResourceConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">ResourceAssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput">ResourceConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceAssociationArn`<sup>Required</sup> <a name="ResourceAssociationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```go
func ResourceAssociationArn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationArnInput`<sup>Optional</sup> <a name="ResourceConfigurationArnInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput"></a>

```go
func ResourceConfigurationArnInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationArn`<sup>Required</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```go
func ResourceConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersInvocationHttpParametersBodyParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get"></a>

```go
func Get(index *f64) EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get"></a>

```go
func Get(index *f64) EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersInvocationHttpParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersInvocationHttpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionAuthParametersInvocationHttpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters">PutBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters">PutHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters">PutQueryStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetBodyParameters">ResetBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeaderParameters">ResetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryStringParameters">ResetQueryStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBodyParameters` <a name="PutBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters"></a>

```go
func PutBodyParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putBodyParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHeaderParameters` <a name="PutHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters"></a>

```go
func PutHeaderParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putHeaderParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryStringParameters` <a name="PutQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters"></a>

```go
func PutQueryStringParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.putQueryStringParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBodyParameters` <a name="ResetBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetBodyParameters"></a>

```go
func ResetBodyParameters()
```

##### `ResetHeaderParameters` <a name="ResetHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetHeaderParameters"></a>

```go
func ResetHeaderParameters()
```

##### `ResetQueryStringParameters` <a name="ResetQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.resetQueryStringParameters"></a>

```go
func ResetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters">BodyParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParametersInput">BodyParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParametersInput">HeaderParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParametersInput">QueryStringParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BodyParameters`<sup>Required</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParameters"></a>

```go
func BodyParameters() EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList">EventsConnectionAuthParametersInvocationHttpParametersBodyParametersList</a>

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParameters"></a>

```go
func HeaderParameters() EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList">EventsConnectionAuthParametersInvocationHttpParametersHeaderParametersList</a>

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParameters"></a>

```go
func QueryStringParameters() EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList">EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList</a>

---

##### `BodyParametersInput`<sup>Optional</sup> <a name="BodyParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.bodyParametersInput"></a>

```go
func BodyParametersInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderParametersInput`<sup>Optional</sup> <a name="HeaderParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.headerParametersInput"></a>

```go
func HeaderParametersInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringParametersInput`<sup>Optional</sup> <a name="QueryStringParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.queryStringParametersInput"></a>

```go
func QueryStringParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get"></a>

```go
func Get(index *f64) EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference <a name="EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOAuthParametersClientParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get"></a>

```go
func Get(index *f64) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get"></a>

```go
func Get(index *f64) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters">PutBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters">PutHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters">PutQueryStringParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetBodyParameters">ResetBodyParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetHeaderParameters">ResetHeaderParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetQueryStringParameters">ResetQueryStringParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutBodyParameters` <a name="PutBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters"></a>

```go
func PutBodyParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putBodyParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutHeaderParameters` <a name="PutHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters"></a>

```go
func PutHeaderParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putHeaderParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutQueryStringParameters` <a name="PutQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters"></a>

```go
func PutQueryStringParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.putQueryStringParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBodyParameters` <a name="ResetBodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetBodyParameters"></a>

```go
func ResetBodyParameters()
```

##### `ResetHeaderParameters` <a name="ResetHeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetHeaderParameters"></a>

```go
func ResetHeaderParameters()
```

##### `ResetQueryStringParameters` <a name="ResetQueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.resetQueryStringParameters"></a>

```go
func ResetQueryStringParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters">BodyParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters">HeaderParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters">QueryStringParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParametersInput">BodyParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParametersInput">HeaderParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParametersInput">QueryStringParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BodyParameters`<sup>Required</sup> <a name="BodyParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParameters"></a>

```go
func BodyParameters() EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersBodyParametersList</a>

---

##### `HeaderParameters`<sup>Required</sup> <a name="HeaderParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParameters"></a>

```go
func HeaderParameters() EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersHeaderParametersList</a>

---

##### `QueryStringParameters`<sup>Required</sup> <a name="QueryStringParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParameters"></a>

```go
func QueryStringParameters() EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList</a>

---

##### `BodyParametersInput`<sup>Optional</sup> <a name="BodyParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.bodyParametersInput"></a>

```go
func BodyParametersInput() interface{}
```

- *Type:* interface{}

---

##### `HeaderParametersInput`<sup>Optional</sup> <a name="HeaderParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.headerParametersInput"></a>

```go
func HeaderParametersInput() interface{}
```

- *Type:* interface{}

---

##### `QueryStringParametersInput`<sup>Optional</sup> <a name="QueryStringParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.queryStringParametersInput"></a>

```go
func QueryStringParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get"></a>

```go
func Get(index *f64) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetIsValueSecret">ResetIsValueSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIsValueSecret` <a name="ResetIsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetIsValueSecret"></a>

```go
func ResetIsValueSecret()
```

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput">IsValueSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret">IsValueSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IsValueSecretInput`<sup>Optional</sup> <a name="IsValueSecretInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecretInput"></a>

```go
func IsValueSecretInput() interface{}
```

- *Type:* interface{}

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `IsValueSecret`<sup>Required</sup> <a name="IsValueSecret" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.isValueSecret"></a>

```go
func IsValueSecret() interface{}
```

- *Type:* interface{}

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersQueryStringParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOAuthParametersOutputReference <a name="EventsConnectionAuthParametersOAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOAuthParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionAuthParametersOAuthParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters">PutClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters">PutOAuthHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetAuthorizationEndpoint">ResetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetClientParameters">ResetClientParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetHttpMethod">ResetHttpMethod</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetOAuthHttpParameters">ResetOAuthHttpParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClientParameters` <a name="PutClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters"></a>

```go
func PutClientParameters(value EventsConnectionAuthParametersOAuthParametersClientParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putClientParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParameters">EventsConnectionAuthParametersOAuthParametersClientParameters</a>

---

##### `PutOAuthHttpParameters` <a name="PutOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters"></a>

```go
func PutOAuthHttpParameters(value EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.putOAuthHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters">EventsConnectionAuthParametersOAuthParametersOAuthHttpParameters</a>

---

##### `ResetAuthorizationEndpoint` <a name="ResetAuthorizationEndpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetAuthorizationEndpoint"></a>

```go
func ResetAuthorizationEndpoint()
```

##### `ResetClientParameters` <a name="ResetClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetClientParameters"></a>

```go
func ResetClientParameters()
```

##### `ResetHttpMethod` <a name="ResetHttpMethod" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetHttpMethod"></a>

```go
func ResetHttpMethod()
```

##### `ResetOAuthHttpParameters` <a name="ResetOAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.resetOAuthHttpParameters"></a>

```go
func ResetOAuthHttpParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters">ClientParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters">OAuthHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParametersInput">ClientParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethodInput">HttpMethodInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParametersInput">OAuthHttpParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod">HttpMethod</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClientParameters`<sup>Required</sup> <a name="ClientParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParameters"></a>

```go
func ClientParameters() EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference">EventsConnectionAuthParametersOAuthParametersClientParametersOutputReference</a>

---

##### `OAuthHttpParameters`<sup>Required</sup> <a name="OAuthHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParameters"></a>

```go
func OAuthHttpParameters() EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOAuthHttpParametersOutputReference</a>

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientParametersInput`<sup>Optional</sup> <a name="ClientParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.clientParametersInput"></a>

```go
func ClientParametersInput() interface{}
```

- *Type:* interface{}

---

##### `HttpMethodInput`<sup>Optional</sup> <a name="HttpMethodInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethodInput"></a>

```go
func HttpMethodInput() *string
```

- *Type:* *string

---

##### `OAuthHttpParametersInput`<sup>Optional</sup> <a name="OAuthHttpParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.oAuthHttpParametersInput"></a>

```go
func OAuthHttpParametersInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `HttpMethod`<sup>Required</sup> <a name="HttpMethod" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.httpMethod"></a>

```go
func HttpMethod() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionAuthParametersOutputReference <a name="EventsConnectionAuthParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionAuthParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionAuthParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters">PutApiKeyAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters">PutBasicAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters">PutConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters">PutInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters">PutOAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetApiKeyAuthParameters">ResetApiKeyAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetBasicAuthParameters">ResetBasicAuthParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetConnectivityParameters">ResetConnectivityParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetInvocationHttpParameters">ResetInvocationHttpParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetOAuthParameters">ResetOAuthParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutApiKeyAuthParameters` <a name="PutApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters"></a>

```go
func PutApiKeyAuthParameters(value EventsConnectionAuthParametersApiKeyAuthParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putApiKeyAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParameters">EventsConnectionAuthParametersApiKeyAuthParameters</a>

---

##### `PutBasicAuthParameters` <a name="PutBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters"></a>

```go
func PutBasicAuthParameters(value EventsConnectionAuthParametersBasicAuthParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putBasicAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParameters">EventsConnectionAuthParametersBasicAuthParameters</a>

---

##### `PutConnectivityParameters` <a name="PutConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters"></a>

```go
func PutConnectivityParameters(value EventsConnectionAuthParametersConnectivityParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putConnectivityParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParameters">EventsConnectionAuthParametersConnectivityParameters</a>

---

##### `PutInvocationHttpParameters` <a name="PutInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters"></a>

```go
func PutInvocationHttpParameters(value EventsConnectionAuthParametersInvocationHttpParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putInvocationHttpParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParameters">EventsConnectionAuthParametersInvocationHttpParameters</a>

---

##### `PutOAuthParameters` <a name="PutOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters"></a>

```go
func PutOAuthParameters(value EventsConnectionAuthParametersOAuthParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.putOAuthParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParameters">EventsConnectionAuthParametersOAuthParameters</a>

---

##### `ResetApiKeyAuthParameters` <a name="ResetApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetApiKeyAuthParameters"></a>

```go
func ResetApiKeyAuthParameters()
```

##### `ResetBasicAuthParameters` <a name="ResetBasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetBasicAuthParameters"></a>

```go
func ResetBasicAuthParameters()
```

##### `ResetConnectivityParameters` <a name="ResetConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetConnectivityParameters"></a>

```go
func ResetConnectivityParameters()
```

##### `ResetInvocationHttpParameters` <a name="ResetInvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetInvocationHttpParameters"></a>

```go
func ResetInvocationHttpParameters()
```

##### `ResetOAuthParameters` <a name="ResetOAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.resetOAuthParameters"></a>

```go
func ResetOAuthParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters">ApiKeyAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference">EventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParameters">BasicAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference">EventsConnectionAuthParametersBasicAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParameters">ConnectivityParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParameters">InvocationHttpParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference">EventsConnectionAuthParametersInvocationHttpParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParameters">OAuthParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParametersInput">ApiKeyAuthParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParametersInput">BasicAuthParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParametersInput">ConnectivityParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParametersInput">InvocationHttpParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParametersInput">OAuthParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ApiKeyAuthParameters`<sup>Required</sup> <a name="ApiKeyAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParameters"></a>

```go
func ApiKeyAuthParameters() EventsConnectionAuthParametersApiKeyAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersApiKeyAuthParametersOutputReference">EventsConnectionAuthParametersApiKeyAuthParametersOutputReference</a>

---

##### `BasicAuthParameters`<sup>Required</sup> <a name="BasicAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParameters"></a>

```go
func BasicAuthParameters() EventsConnectionAuthParametersBasicAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersBasicAuthParametersOutputReference">EventsConnectionAuthParametersBasicAuthParametersOutputReference</a>

---

##### `ConnectivityParameters`<sup>Required</sup> <a name="ConnectivityParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParameters"></a>

```go
func ConnectivityParameters() EventsConnectionAuthParametersConnectivityParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersConnectivityParametersOutputReference">EventsConnectionAuthParametersConnectivityParametersOutputReference</a>

---

##### `InvocationHttpParameters`<sup>Required</sup> <a name="InvocationHttpParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParameters"></a>

```go
func InvocationHttpParameters() EventsConnectionAuthParametersInvocationHttpParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersInvocationHttpParametersOutputReference">EventsConnectionAuthParametersInvocationHttpParametersOutputReference</a>

---

##### `OAuthParameters`<sup>Required</sup> <a name="OAuthParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParameters"></a>

```go
func OAuthParameters() EventsConnectionAuthParametersOAuthParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOAuthParametersOutputReference">EventsConnectionAuthParametersOAuthParametersOutputReference</a>

---

##### `ApiKeyAuthParametersInput`<sup>Optional</sup> <a name="ApiKeyAuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.apiKeyAuthParametersInput"></a>

```go
func ApiKeyAuthParametersInput() interface{}
```

- *Type:* interface{}

---

##### `BasicAuthParametersInput`<sup>Optional</sup> <a name="BasicAuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.basicAuthParametersInput"></a>

```go
func BasicAuthParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ConnectivityParametersInput`<sup>Optional</sup> <a name="ConnectivityParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.connectivityParametersInput"></a>

```go
func ConnectivityParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InvocationHttpParametersInput`<sup>Optional</sup> <a name="InvocationHttpParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.invocationHttpParametersInput"></a>

```go
func InvocationHttpParametersInput() interface{}
```

- *Type:* interface{}

---

##### `OAuthParametersInput`<sup>Optional</sup> <a name="OAuthParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.oAuthParametersInput"></a>

```go
func OAuthParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionAuthParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionInvocationConnectivityParametersOutputReference <a name="EventsConnectionInvocationConnectivityParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionInvocationConnectivityParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionInvocationConnectivityParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters">PutResourceParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resetResourceParameters">ResetResourceParameters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResourceParameters` <a name="PutResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters"></a>

```go
func PutResourceParameters(value EventsConnectionInvocationConnectivityParametersResourceParameters)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.putResourceParameters.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParameters">EventsConnectionInvocationConnectivityParametersResourceParameters</a>

---

##### `ResetResourceParameters` <a name="ResetResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.resetResourceParameters"></a>

```go
func ResetResourceParameters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters">ResourceParameters</a></code> | <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParametersInput">ResourceParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceParameters`<sup>Required</sup> <a name="ResourceParameters" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParameters"></a>

```go
func ResourceParameters() EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference">EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference</a>

---

##### `ResourceParametersInput`<sup>Optional</sup> <a name="ResourceParametersInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.resourceParametersInput"></a>

```go
func ResourceParametersInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference <a name="EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/eventsconnection"

eventsconnection.NewEventsConnectionInvocationConnectivityParametersResourceParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn">ResetResourceConfigurationArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceConfigurationArn` <a name="ResetResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.resetResourceConfigurationArn"></a>

```go
func ResetResourceConfigurationArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn">ResourceAssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput">ResourceConfigurationArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn">ResourceConfigurationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceAssociationArn`<sup>Required</sup> <a name="ResourceAssociationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceAssociationArn"></a>

```go
func ResourceAssociationArn() *string
```

- *Type:* *string

---

##### `ResourceConfigurationArnInput`<sup>Optional</sup> <a name="ResourceConfigurationArnInput" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArnInput"></a>

```go
func ResourceConfigurationArnInput() *string
```

- *Type:* *string

---

##### `ResourceConfigurationArn`<sup>Required</sup> <a name="ResourceConfigurationArn" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.resourceConfigurationArn"></a>

```go
func ResourceConfigurationArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.eventsConnection.EventsConnectionInvocationConnectivityParametersResourceParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



