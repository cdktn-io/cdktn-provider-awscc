# `iotsitewiseGateway` Submodule <a name="`iotsitewiseGateway` Submodule" id="@cdktn/provider-awscc.iotsitewiseGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### IotsitewiseGateway <a name="IotsitewiseGateway" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway awscc_iotsitewise_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.NewIotsitewiseGateway(scope Construct, id *string, config IotsitewiseGatewayConfig) IotsitewiseGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig">IotsitewiseGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig">IotsitewiseGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries">PutGatewayCapabilitySummaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform">PutGatewayPlatform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayCapabilitySummaries">ResetGatewayCapabilitySummaries</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayVersion">ResetGatewayVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutGatewayCapabilitySummaries` <a name="PutGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries"></a>

```go
func PutGatewayCapabilitySummaries(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayCapabilitySummaries.parameter.value"></a>

- *Type:* interface{}

---

##### `PutGatewayPlatform` <a name="PutGatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform"></a>

```go
func PutGatewayPlatform(value IotsitewiseGatewayGatewayPlatform)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putGatewayPlatform.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetGatewayCapabilitySummaries` <a name="ResetGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayCapabilitySummaries"></a>

```go
func ResetGatewayCapabilitySummaries()
```

##### `ResetGatewayVersion` <a name="ResetGatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetGatewayVersion"></a>

```go
func ResetGatewayVersion()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a IotsitewiseGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.IotsitewiseGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.IotsitewiseGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.IotsitewiseGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.IotsitewiseGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a IotsitewiseGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the IotsitewiseGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing IotsitewiseGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the IotsitewiseGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummaries">GatewayCapabilitySummaries</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList">IotsitewiseGatewayGatewayCapabilitySummariesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatform">GatewayPlatform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference">IotsitewiseGatewayGatewayPlatformOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList">IotsitewiseGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummariesInput">GatewayCapabilitySummariesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayNameInput">GatewayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatformInput">GatewayPlatformInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersionInput">GatewayVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayName">GatewayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersion">GatewayVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayCapabilitySummaries`<sup>Required</sup> <a name="GatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummaries"></a>

```go
func GatewayCapabilitySummaries() IotsitewiseGatewayGatewayCapabilitySummariesList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList">IotsitewiseGatewayGatewayCapabilitySummariesList</a>

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `GatewayPlatform`<sup>Required</sup> <a name="GatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatform"></a>

```go
func GatewayPlatform() IotsitewiseGatewayGatewayPlatformOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference">IotsitewiseGatewayGatewayPlatformOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tags"></a>

```go
func Tags() IotsitewiseGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList">IotsitewiseGatewayTagsList</a>

---

##### `GatewayCapabilitySummariesInput`<sup>Optional</sup> <a name="GatewayCapabilitySummariesInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayCapabilitySummariesInput"></a>

```go
func GatewayCapabilitySummariesInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayNameInput`<sup>Optional</sup> <a name="GatewayNameInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayNameInput"></a>

```go
func GatewayNameInput() *string
```

- *Type:* *string

---

##### `GatewayPlatformInput`<sup>Optional</sup> <a name="GatewayPlatformInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayPlatformInput"></a>

```go
func GatewayPlatformInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayVersionInput`<sup>Optional</sup> <a name="GatewayVersionInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersionInput"></a>

```go
func GatewayVersionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayName"></a>

```go
func GatewayName() *string
```

- *Type:* *string

---

##### `GatewayVersion`<sup>Required</sup> <a name="GatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.gatewayVersion"></a>

```go
func GatewayVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### IotsitewiseGatewayConfig <a name="IotsitewiseGatewayConfig" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

&iotsitewisegateway.IotsitewiseGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GatewayName: *string,
	GatewayPlatform: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform,
	GatewayCapabilitySummaries: interface{},
	GatewayVersion: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayName">GatewayName</a></code> | <code>*string</code> | A unique, friendly name for the gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayPlatform">GatewayPlatform</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a></code> | The gateway's platform. You can only specify one platform in a gateway. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayCapabilitySummaries">GatewayCapabilitySummaries</a></code> | <code>interface{}</code> | A list of gateway capability summaries that each contain a namespace and status. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayVersion">GatewayVersion</a></code> | <code>*string</code> | The version of the gateway you want to create. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.tags">Tags</a></code> | <code>interface{}</code> | A list of key-value pairs that contain metadata for the gateway. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GatewayName`<sup>Required</sup> <a name="GatewayName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayName"></a>

```go
GatewayName *string
```

- *Type:* *string

A unique, friendly name for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#gateway_name IotsitewiseGateway#gateway_name}

---

##### `GatewayPlatform`<sup>Required</sup> <a name="GatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayPlatform"></a>

```go
GatewayPlatform IotsitewiseGatewayGatewayPlatform
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform">IotsitewiseGatewayGatewayPlatform</a>

The gateway's platform. You can only specify one platform in a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#gateway_platform IotsitewiseGateway#gateway_platform}

---

##### `GatewayCapabilitySummaries`<sup>Optional</sup> <a name="GatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayCapabilitySummaries"></a>

```go
GatewayCapabilitySummaries interface{}
```

- *Type:* interface{}

A list of gateway capability summaries that each contain a namespace and status.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#gateway_capability_summaries IotsitewiseGateway#gateway_capability_summaries}

---

##### `GatewayVersion`<sup>Optional</sup> <a name="GatewayVersion" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.gatewayVersion"></a>

```go
GatewayVersion *string
```

- *Type:* *string

The version of the gateway you want to create.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#gateway_version IotsitewiseGateway#gateway_version}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

A list of key-value pairs that contain metadata for the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#tags IotsitewiseGateway#tags}

---

### IotsitewiseGatewayGatewayCapabilitySummaries <a name="IotsitewiseGatewayGatewayCapabilitySummaries" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

&iotsitewisegateway.IotsitewiseGatewayGatewayCapabilitySummaries {
	CapabilityConfiguration: *string,
	CapabilityNamespace: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityConfiguration">CapabilityConfiguration</a></code> | <code>*string</code> | The JSON document that defines the gateway capability's configuration. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityNamespace">CapabilityNamespace</a></code> | <code>*string</code> | The namespace of the capability configuration. |

---

##### `CapabilityConfiguration`<sup>Optional</sup> <a name="CapabilityConfiguration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityConfiguration"></a>

```go
CapabilityConfiguration *string
```

- *Type:* *string

The JSON document that defines the gateway capability's configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#capability_configuration IotsitewiseGateway#capability_configuration}

---

##### `CapabilityNamespace`<sup>Optional</sup> <a name="CapabilityNamespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummaries.property.capabilityNamespace"></a>

```go
CapabilityNamespace *string
```

- *Type:* *string

The namespace of the capability configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#capability_namespace IotsitewiseGateway#capability_namespace}

---

### IotsitewiseGatewayGatewayPlatform <a name="IotsitewiseGatewayGatewayPlatform" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

&iotsitewisegateway.IotsitewiseGatewayGatewayPlatform {
	GreengrassV2: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2,
	SiemensIe: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.greengrassV2">GreengrassV2</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a></code> | A gateway that runs on AWS IoT Greengrass V2. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.siemensIe">SiemensIe</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a></code> | A gateway that runs on Siemens Industrial Edge. |

---

##### `GreengrassV2`<sup>Optional</sup> <a name="GreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.greengrassV2"></a>

```go
GreengrassV2 IotsitewiseGatewayGatewayPlatformGreengrassV2
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

A gateway that runs on AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#greengrass_v2 IotsitewiseGateway#greengrass_v2}

---

##### `SiemensIe`<sup>Optional</sup> <a name="SiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatform.property.siemensIe"></a>

```go
SiemensIe IotsitewiseGatewayGatewayPlatformSiemensIe
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

A gateway that runs on Siemens Industrial Edge.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#siemens_ie IotsitewiseGateway#siemens_ie}

---

### IotsitewiseGatewayGatewayPlatformGreengrassV2 <a name="IotsitewiseGatewayGatewayPlatformGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

&iotsitewisegateway.IotsitewiseGatewayGatewayPlatformGreengrassV2 {
	CoreDeviceOperatingSystem: *string,
	CoreDeviceThingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceOperatingSystem">CoreDeviceOperatingSystem</a></code> | <code>*string</code> | The operating system of the core device in AWS IoT Greengrass V2. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceThingName">CoreDeviceThingName</a></code> | <code>*string</code> | The name of the CoreDevice in GreenGrass V2. |

---

##### `CoreDeviceOperatingSystem`<sup>Optional</sup> <a name="CoreDeviceOperatingSystem" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceOperatingSystem"></a>

```go
CoreDeviceOperatingSystem *string
```

- *Type:* *string

The operating system of the core device in AWS IoT Greengrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#core_device_operating_system IotsitewiseGateway#core_device_operating_system}

---

##### `CoreDeviceThingName`<sup>Optional</sup> <a name="CoreDeviceThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2.property.coreDeviceThingName"></a>

```go
CoreDeviceThingName *string
```

- *Type:* *string

The name of the CoreDevice in GreenGrass V2.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#core_device_thing_name IotsitewiseGateway#core_device_thing_name}

---

### IotsitewiseGatewayGatewayPlatformSiemensIe <a name="IotsitewiseGatewayGatewayPlatformSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

&iotsitewisegateway.IotsitewiseGatewayGatewayPlatformSiemensIe {
	IotCoreThingName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.property.iotCoreThingName">IotCoreThingName</a></code> | <code>*string</code> | The name of the IoT Core Thing. |

---

##### `IotCoreThingName`<sup>Optional</sup> <a name="IotCoreThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe.property.iotCoreThingName"></a>

```go
IotCoreThingName *string
```

- *Type:* *string

The name of the IoT Core Thing.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#iot_core_thing_name IotsitewiseGateway#iot_core_thing_name}

---

### IotsitewiseGatewayTags <a name="IotsitewiseGatewayTags" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

&iotsitewisegateway.IotsitewiseGatewayTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#key IotsitewiseGateway#key}. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#value IotsitewiseGateway#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#key IotsitewiseGateway#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/iotsitewise_gateway#value IotsitewiseGateway#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### IotsitewiseGatewayGatewayCapabilitySummariesList <a name="IotsitewiseGatewayGatewayCapabilitySummariesList" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.NewIotsitewiseGatewayGatewayCapabilitySummariesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseGatewayGatewayCapabilitySummariesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get"></a>

```go
func Get(index *f64) IotsitewiseGatewayGatewayCapabilitySummariesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseGatewayGatewayCapabilitySummariesOutputReference <a name="IotsitewiseGatewayGatewayCapabilitySummariesOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.NewIotsitewiseGatewayGatewayCapabilitySummariesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseGatewayGatewayCapabilitySummariesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityConfiguration">ResetCapabilityConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityNamespace">ResetCapabilityNamespace</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCapabilityConfiguration` <a name="ResetCapabilityConfiguration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityConfiguration"></a>

```go
func ResetCapabilityConfiguration()
```

##### `ResetCapabilityNamespace` <a name="ResetCapabilityNamespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.resetCapabilityNamespace"></a>

```go
func ResetCapabilityNamespace()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfigurationInput">CapabilityConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespaceInput">CapabilityNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration">CapabilityConfiguration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace">CapabilityNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CapabilityConfigurationInput`<sup>Optional</sup> <a name="CapabilityConfigurationInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfigurationInput"></a>

```go
func CapabilityConfigurationInput() *string
```

- *Type:* *string

---

##### `CapabilityNamespaceInput`<sup>Optional</sup> <a name="CapabilityNamespaceInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespaceInput"></a>

```go
func CapabilityNamespaceInput() *string
```

- *Type:* *string

---

##### `CapabilityConfiguration`<sup>Required</sup> <a name="CapabilityConfiguration" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityConfiguration"></a>

```go
func CapabilityConfiguration() *string
```

- *Type:* *string

---

##### `CapabilityNamespace`<sup>Required</sup> <a name="CapabilityNamespace" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.capabilityNamespace"></a>

```go
func CapabilityNamespace() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayCapabilitySummariesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference <a name="IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.NewIotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceOperatingSystem">ResetCoreDeviceOperatingSystem</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceThingName">ResetCoreDeviceThingName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCoreDeviceOperatingSystem` <a name="ResetCoreDeviceOperatingSystem" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceOperatingSystem"></a>

```go
func ResetCoreDeviceOperatingSystem()
```

##### `ResetCoreDeviceThingName` <a name="ResetCoreDeviceThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.resetCoreDeviceThingName"></a>

```go
func ResetCoreDeviceThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystemInput">CoreDeviceOperatingSystemInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingNameInput">CoreDeviceThingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem">CoreDeviceOperatingSystem</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName">CoreDeviceThingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CoreDeviceOperatingSystemInput`<sup>Optional</sup> <a name="CoreDeviceOperatingSystemInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystemInput"></a>

```go
func CoreDeviceOperatingSystemInput() *string
```

- *Type:* *string

---

##### `CoreDeviceThingNameInput`<sup>Optional</sup> <a name="CoreDeviceThingNameInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingNameInput"></a>

```go
func CoreDeviceThingNameInput() *string
```

- *Type:* *string

---

##### `CoreDeviceOperatingSystem`<sup>Required</sup> <a name="CoreDeviceOperatingSystem" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceOperatingSystem"></a>

```go
func CoreDeviceOperatingSystem() *string
```

- *Type:* *string

---

##### `CoreDeviceThingName`<sup>Required</sup> <a name="CoreDeviceThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.coreDeviceThingName"></a>

```go
func CoreDeviceThingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseGatewayGatewayPlatformOutputReference <a name="IotsitewiseGatewayGatewayPlatformOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.NewIotsitewiseGatewayGatewayPlatformOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseGatewayGatewayPlatformOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2">PutGreengrassV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe">PutSiemensIe</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetGreengrassV2">ResetGreengrassV2</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetSiemensIe">ResetSiemensIe</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutGreengrassV2` <a name="PutGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2"></a>

```go
func PutGreengrassV2(value IotsitewiseGatewayGatewayPlatformGreengrassV2)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putGreengrassV2.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2">IotsitewiseGatewayGatewayPlatformGreengrassV2</a>

---

##### `PutSiemensIe` <a name="PutSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe"></a>

```go
func PutSiemensIe(value IotsitewiseGatewayGatewayPlatformSiemensIe)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.putSiemensIe.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIe">IotsitewiseGatewayGatewayPlatformSiemensIe</a>

---

##### `ResetGreengrassV2` <a name="ResetGreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetGreengrassV2"></a>

```go
func ResetGreengrassV2()
```

##### `ResetSiemensIe` <a name="ResetSiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.resetSiemensIe"></a>

```go
func ResetSiemensIe()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2">GreengrassV2</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe">SiemensIe</a></code> | <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2Input">GreengrassV2Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIeInput">SiemensIeInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `GreengrassV2`<sup>Required</sup> <a name="GreengrassV2" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2"></a>

```go
func GreengrassV2() IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference">IotsitewiseGatewayGatewayPlatformGreengrassV2OutputReference</a>

---

##### `SiemensIe`<sup>Required</sup> <a name="SiemensIe" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIe"></a>

```go
func SiemensIe() IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference">IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference</a>

---

##### `GreengrassV2Input`<sup>Optional</sup> <a name="GreengrassV2Input" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.greengrassV2Input"></a>

```go
func GreengrassV2Input() interface{}
```

- *Type:* interface{}

---

##### `SiemensIeInput`<sup>Optional</sup> <a name="SiemensIeInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.siemensIeInput"></a>

```go
func SiemensIeInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference <a name="IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.NewIotsitewiseGatewayGatewayPlatformSiemensIeOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resetIotCoreThingName">ResetIotCoreThingName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIotCoreThingName` <a name="ResetIotCoreThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.resetIotCoreThingName"></a>

```go
func ResetIotCoreThingName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingNameInput">IotCoreThingNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName">IotCoreThingName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IotCoreThingNameInput`<sup>Optional</sup> <a name="IotCoreThingNameInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingNameInput"></a>

```go
func IotCoreThingNameInput() *string
```

- *Type:* *string

---

##### `IotCoreThingName`<sup>Required</sup> <a name="IotCoreThingName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.iotCoreThingName"></a>

```go
func IotCoreThingName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayGatewayPlatformSiemensIeOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseGatewayTagsList <a name="IotsitewiseGatewayTagsList" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.NewIotsitewiseGatewayTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) IotsitewiseGatewayTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get"></a>

```go
func Get(index *f64) IotsitewiseGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### IotsitewiseGatewayTagsOutputReference <a name="IotsitewiseGatewayTagsOutputReference" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/iotsitewisegateway"

iotsitewisegateway.NewIotsitewiseGatewayTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) IotsitewiseGatewayTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.iotsitewiseGateway.IotsitewiseGatewayTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



