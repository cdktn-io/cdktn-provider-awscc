# `ec2InstanceConnectEndpoint` Submodule <a name="`ec2InstanceConnectEndpoint` Submodule" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2InstanceConnectEndpoint <a name="Ec2InstanceConnectEndpoint" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint awscc_ec2_instance_connect_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.NewEc2InstanceConnectEndpoint(scope Construct, id *string, config Ec2InstanceConnectEndpointConfig) Ec2InstanceConnectEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig">Ec2InstanceConnectEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig">Ec2InstanceConnectEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetPreserveClientIp">ResetPreserveClientIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetSecurityGroupIds">ResetSecurityGroupIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetClientToken"></a>

```go
func ResetClientToken()
```

##### `ResetPreserveClientIp` <a name="ResetPreserveClientIp" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetPreserveClientIp"></a>

```go
func ResetPreserveClientIp()
```

##### `ResetSecurityGroupIds` <a name="ResetSecurityGroupIds" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetSecurityGroupIds"></a>

```go
func ResetSecurityGroupIds()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.Ec2InstanceConnectEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.Ec2InstanceConnectEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.Ec2InstanceConnectEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.Ec2InstanceConnectEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2InstanceConnectEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2InstanceConnectEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2InstanceConnectEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2InstanceConnectEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZone">AvailabilityZone</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZoneId">AvailabilityZoneId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.instanceConnectEndpointArn">InstanceConnectEndpointArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.instanceConnectEndpointId">InstanceConnectEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.networkInterfaceIds">NetworkInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.publicDnsNames">PublicDnsNames</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference">Ec2InstanceConnectEndpointPublicDnsNamesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList">Ec2InstanceConnectEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.clientTokenInput">ClientTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIpInput">PreserveClientIpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIp">PreserveClientIp</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AvailabilityZone`<sup>Required</sup> <a name="AvailabilityZone" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZone"></a>

```go
func AvailabilityZone() *string
```

- *Type:* *string

---

##### `AvailabilityZoneId`<sup>Required</sup> <a name="AvailabilityZoneId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.availabilityZoneId"></a>

```go
func AvailabilityZoneId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InstanceConnectEndpointArn`<sup>Required</sup> <a name="InstanceConnectEndpointArn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.instanceConnectEndpointArn"></a>

```go
func InstanceConnectEndpointArn() *string
```

- *Type:* *string

---

##### `InstanceConnectEndpointId`<sup>Required</sup> <a name="InstanceConnectEndpointId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.instanceConnectEndpointId"></a>

```go
func InstanceConnectEndpointId() *string
```

- *Type:* *string

---

##### `NetworkInterfaceIds`<sup>Required</sup> <a name="NetworkInterfaceIds" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.networkInterfaceIds"></a>

```go
func NetworkInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `PublicDnsNames`<sup>Required</sup> <a name="PublicDnsNames" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.publicDnsNames"></a>

```go
func PublicDnsNames() Ec2InstanceConnectEndpointPublicDnsNamesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference">Ec2InstanceConnectEndpointPublicDnsNamesOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tags"></a>

```go
func Tags() Ec2InstanceConnectEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList">Ec2InstanceConnectEndpointTagsList</a>

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.clientTokenInput"></a>

```go
func ClientTokenInput() *string
```

- *Type:* *string

---

##### `PreserveClientIpInput`<sup>Optional</sup> <a name="PreserveClientIpInput" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIpInput"></a>

```go
func PreserveClientIpInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `PreserveClientIp`<sup>Required</sup> <a name="PreserveClientIp" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.preserveClientIp"></a>

```go
func PreserveClientIp() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2InstanceConnectEndpointConfig <a name="Ec2InstanceConnectEndpointConfig" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

&ec2instanceconnectendpoint.Ec2InstanceConnectEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	SubnetId: *string,
	ClientToken: *string,
	PreserveClientIp: interface{},
	SecurityGroupIds: *[]*string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.subnetId">SubnetId</a></code> | <code>*string</code> | The ID of the subnet in which the EC2 Instance Connect Endpoint was created. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.clientToken">ClientToken</a></code> | <code>*string</code> | The client token of the instance connect endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.preserveClientIp">PreserveClientIp</a></code> | <code>interface{}</code> | Indicates whether your client's IP address is preserved as the source when you connect to a resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The security groups associated with the endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags assigned to the EC2 Instance Connect Endpoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

The ID of the subnet in which the EC2 Instance Connect Endpoint was created.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#subnet_id Ec2InstanceConnectEndpoint#subnet_id}

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.clientToken"></a>

```go
ClientToken *string
```

- *Type:* *string

The client token of the instance connect endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#client_token Ec2InstanceConnectEndpoint#client_token}

---

##### `PreserveClientIp`<sup>Optional</sup> <a name="PreserveClientIp" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.preserveClientIp"></a>

```go
PreserveClientIp interface{}
```

- *Type:* interface{}

Indicates whether your client's IP address is preserved as the source when you connect to a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#preserve_client_ip Ec2InstanceConnectEndpoint#preserve_client_ip}

---

##### `SecurityGroupIds`<sup>Optional</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The security groups associated with the endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#security_group_ids Ec2InstanceConnectEndpoint#security_group_ids}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags assigned to the EC2 Instance Connect Endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#tags Ec2InstanceConnectEndpoint#tags}

---

### Ec2InstanceConnectEndpointPublicDnsNames <a name="Ec2InstanceConnectEndpointPublicDnsNames" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNames"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNames.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

&ec2instanceconnectendpoint.Ec2InstanceConnectEndpointPublicDnsNames {

}
```


### Ec2InstanceConnectEndpointPublicDnsNamesDualstack <a name="Ec2InstanceConnectEndpointPublicDnsNamesDualstack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

&ec2instanceconnectendpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack {

}
```


### Ec2InstanceConnectEndpointPublicDnsNamesIpv4 <a name="Ec2InstanceConnectEndpointPublicDnsNamesIpv4" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

&ec2instanceconnectendpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4 {

}
```


### Ec2InstanceConnectEndpointTags <a name="Ec2InstanceConnectEndpointTags" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

&ec2instanceconnectendpoint.Ec2InstanceConnectEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#key Ec2InstanceConnectEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#value Ec2InstanceConnectEndpoint#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#key Ec2InstanceConnectEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_instance_connect_endpoint#value Ec2InstanceConnectEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference <a name="Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.NewEc2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName">FipsDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack">Ec2InstanceConnectEndpointPublicDnsNamesDualstack</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `FipsDnsName`<sup>Required</sup> <a name="FipsDnsName" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.fipsDnsName"></a>

```go
func FipsDnsName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2InstanceConnectEndpointPublicDnsNamesDualstack
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstack">Ec2InstanceConnectEndpointPublicDnsNamesDualstack</a>

---


### Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference <a name="Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.NewEc2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName">DnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName">FipsDnsName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4">Ec2InstanceConnectEndpointPublicDnsNamesIpv4</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsName`<sup>Required</sup> <a name="DnsName" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.dnsName"></a>

```go
func DnsName() *string
```

- *Type:* *string

---

##### `FipsDnsName`<sup>Required</sup> <a name="FipsDnsName" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.fipsDnsName"></a>

```go
func FipsDnsName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2InstanceConnectEndpointPublicDnsNamesIpv4
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4">Ec2InstanceConnectEndpointPublicDnsNamesIpv4</a>

---


### Ec2InstanceConnectEndpointPublicDnsNamesOutputReference <a name="Ec2InstanceConnectEndpointPublicDnsNamesOutputReference" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.NewEc2InstanceConnectEndpointPublicDnsNamesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2InstanceConnectEndpointPublicDnsNamesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack">Dualstack</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4">Ipv4</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNames">Ec2InstanceConnectEndpointPublicDnsNames</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Dualstack`<sup>Required</sup> <a name="Dualstack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.dualstack"></a>

```go
func Dualstack() Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference">Ec2InstanceConnectEndpointPublicDnsNamesDualstackOutputReference</a>

---

##### `Ipv4`<sup>Required</sup> <a name="Ipv4" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.ipv4"></a>

```go
func Ipv4() Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference">Ec2InstanceConnectEndpointPublicDnsNamesIpv4OutputReference</a>

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNamesOutputReference.property.internalValue"></a>

```go
func InternalValue() Ec2InstanceConnectEndpointPublicDnsNames
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointPublicDnsNames">Ec2InstanceConnectEndpointPublicDnsNames</a>

---


### Ec2InstanceConnectEndpointTagsList <a name="Ec2InstanceConnectEndpointTagsList" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.NewEc2InstanceConnectEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2InstanceConnectEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.get"></a>

```go
func Get(index *f64) Ec2InstanceConnectEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2InstanceConnectEndpointTagsOutputReference <a name="Ec2InstanceConnectEndpointTagsOutputReference" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2instanceconnectendpoint"

ec2instanceconnectendpoint.NewEc2InstanceConnectEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2InstanceConnectEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2InstanceConnectEndpoint.Ec2InstanceConnectEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



