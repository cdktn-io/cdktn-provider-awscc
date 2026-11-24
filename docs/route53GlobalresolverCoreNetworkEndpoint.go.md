# `route53GlobalresolverCoreNetworkEndpoint` Submodule <a name="`route53GlobalresolverCoreNetworkEndpoint` Submodule" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53GlobalresolverCoreNetworkEndpoint <a name="Route53GlobalresolverCoreNetworkEndpoint" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint awscc_route53globalresolver_core_network_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

route53globalresolvercorenetworkendpoint.NewRoute53GlobalresolverCoreNetworkEndpoint(scope Construct, id *string, config Route53GlobalresolverCoreNetworkEndpointConfig) Route53GlobalresolverCoreNetworkEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig">Route53GlobalresolverCoreNetworkEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig">Route53GlobalresolverCoreNetworkEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses">PutIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken">ResetClientToken</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpAddresses` <a name="PutIpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses"></a>

```go
func PutIpAddresses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putIpAddresses.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetClientToken` <a name="ResetClientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetClientToken"></a>

```go
func ResetClientToken()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

route53globalresolvercorenetworkendpoint.Route53GlobalresolverCoreNetworkEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

route53globalresolvercorenetworkendpoint.Route53GlobalresolverCoreNetworkEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

route53globalresolvercorenetworkendpoint.Route53GlobalresolverCoreNetworkEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

route53globalresolvercorenetworkendpoint.Route53GlobalresolverCoreNetworkEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Route53GlobalresolverCoreNetworkEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53GlobalresolverCoreNetworkEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53GlobalresolverCoreNetworkEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Route53GlobalresolverCoreNetworkEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions">AvailableRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId">CoreNetworkEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses">IpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput">ClientTokenInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput">CoreNetworkArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput">GlobalResolverIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput">IpAddressesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken">ClientToken</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId">GlobalResolverId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `AvailableRegions`<sup>Required</sup> <a name="AvailableRegions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.availableRegions"></a>

```go
func AvailableRegions() *[]*string
```

- *Type:* *[]*string

---

##### `CoreNetworkEndpointId`<sup>Required</sup> <a name="CoreNetworkEndpointId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkEndpointId"></a>

```go
func CoreNetworkEndpointId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddresses"></a>

```go
func IpAddresses() Route53GlobalresolverCoreNetworkEndpointIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList">Route53GlobalresolverCoreNetworkEndpointIpAddressesList</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tags"></a>

```go
func Tags() Route53GlobalresolverCoreNetworkEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList">Route53GlobalresolverCoreNetworkEndpointTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `ClientTokenInput`<sup>Optional</sup> <a name="ClientTokenInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientTokenInput"></a>

```go
func ClientTokenInput() *string
```

- *Type:* *string

---

##### `CoreNetworkArnInput`<sup>Optional</sup> <a name="CoreNetworkArnInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArnInput"></a>

```go
func CoreNetworkArnInput() *string
```

- *Type:* *string

---

##### `GlobalResolverIdInput`<sup>Optional</sup> <a name="GlobalResolverIdInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverIdInput"></a>

```go
func GlobalResolverIdInput() *string
```

- *Type:* *string

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.ipAddressesInput"></a>

```go
func IpAddressesInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `ClientToken`<sup>Required</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.clientToken"></a>

```go
func ClientToken() *string
```

- *Type:* *string

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.coreNetworkArn"></a>

```go
func CoreNetworkArn() *string
```

- *Type:* *string

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.globalResolverId"></a>

```go
func GlobalResolverId() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53GlobalresolverCoreNetworkEndpointConfig <a name="Route53GlobalresolverCoreNetworkEndpointConfig" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

&route53globalresolvercorenetworkendpoint.Route53GlobalresolverCoreNetworkEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CoreNetworkArn: *string,
	GlobalResolverId: *string,
	IpAddresses: interface{},
	ClientToken: *string,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn">CoreNetworkArn</a></code> | <code>*string</code> | The ARN of the AWS Cloud WAN core network to connect. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId">GlobalResolverId</a></code> | <code>*string</code> | The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses">IpAddresses</a></code> | <code>interface{}</code> | The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken">ClientToken</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name">Name</a></code> | <code>*string</code> | A name for the core network endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CoreNetworkArn`<sup>Required</sup> <a name="CoreNetworkArn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.coreNetworkArn"></a>

```go
CoreNetworkArn *string
```

- *Type:* *string

The ARN of the AWS Cloud WAN core network to connect.

The core network must be in the same account and AVAILABLE. A core network can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#core_network_arn Route53GlobalresolverCoreNetworkEndpoint#core_network_arn}

---

##### `GlobalResolverId`<sup>Required</sup> <a name="GlobalResolverId" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.globalResolverId"></a>

```go
GlobalResolverId *string
```

- *Type:* *string

The ID of the Global Resolver to connect. A Global Resolver can have one core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#global_resolver_id Route53GlobalresolverCoreNetworkEndpoint#global_resolver_id}

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.ipAddresses"></a>

```go
IpAddresses interface{}
```

- *Type:* interface{}

The private DNS IP addresses of the endpoint (1 to 5). Each IP address can appear once.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ip_addresses Route53GlobalresolverCoreNetworkEndpoint#ip_addresses}

---

##### `ClientToken`<sup>Optional</sup> <a name="ClientToken" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.clientToken"></a>

```go
ClientToken *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#client_token Route53GlobalresolverCoreNetworkEndpoint#client_token}.

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A name for the core network endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#name Route53GlobalresolverCoreNetworkEndpoint#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#tags Route53GlobalresolverCoreNetworkEndpoint#tags}.

---

### Route53GlobalresolverCoreNetworkEndpointIpAddresses <a name="Route53GlobalresolverCoreNetworkEndpointIpAddresses" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

&route53globalresolvercorenetworkendpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses {
	DnsLabel: *string,
	RegionScope: *string,
	Ipv4Address: *string,
	Ipv6Address: *string,
	Regions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel">DnsLabel</a></code> | <code>*string</code> | Lowercase DNS label for the IP address. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope">RegionScope</a></code> | <code>*string</code> | ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions">Regions</a></code> | <code>*[]*string</code> | Regions that serve the IP address. |

---

##### `DnsLabel`<sup>Required</sup> <a name="DnsLabel" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.dnsLabel"></a>

```go
DnsLabel *string
```

- *Type:* *string

Lowercase DNS label for the IP address.

The service appends the endpoint ID to build the DNS name. The label of an existing IP address cannot be changed; to use a new label, change the IP address too.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#dns_label Route53GlobalresolverCoreNetworkEndpoint#dns_label}

---

##### `RegionScope`<sup>Required</sup> <a name="RegionScope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regionScope"></a>

```go
RegionScope *string
```

- *Type:* *string

ALL to serve the IP address in every available region of the endpoint, or REGIONAL to serve it only in Regions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#region_scope Route53GlobalresolverCoreNetworkEndpoint#region_scope}

---

##### `Ipv4Address`<sup>Optional</sup> <a name="Ipv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv4Address"></a>

```go
Ipv4Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_4_address Route53GlobalresolverCoreNetworkEndpoint#ipv_4_address}.

---

##### `Ipv6Address`<sup>Optional</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.ipv6Address"></a>

```go
Ipv6Address *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#ipv_6_address Route53GlobalresolverCoreNetworkEndpoint#ipv_6_address}.

---

##### `Regions`<sup>Optional</sup> <a name="Regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddresses.property.regions"></a>

```go
Regions *[]*string
```

- *Type:* *[]*string

Regions that serve the IP address.

Required when RegionScope is REGIONAL and not allowed when it is ALL. Must be a subset of AvailableRegions.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#regions Route53GlobalresolverCoreNetworkEndpoint#regions}

---

### Route53GlobalresolverCoreNetworkEndpointTags <a name="Route53GlobalresolverCoreNetworkEndpointTags" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

&route53globalresolvercorenetworkendpoint.Route53GlobalresolverCoreNetworkEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#key Route53GlobalresolverCoreNetworkEndpoint#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.111.0/docs/resources/route53globalresolver_core_network_endpoint#value Route53GlobalresolverCoreNetworkEndpoint#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Route53GlobalresolverCoreNetworkEndpointIpAddressesList <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

route53globalresolvercorenetworkendpoint.NewRoute53GlobalresolverCoreNetworkEndpointIpAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53GlobalresolverCoreNetworkEndpointIpAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get"></a>

```go
func Get(index *f64) Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

route53globalresolvercorenetworkendpoint.NewRoute53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address">ResetIpv4Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address">ResetIpv6Address</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions">ResetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpv4Address` <a name="ResetIpv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv4Address"></a>

```go
func ResetIpv4Address()
```

##### `ResetIpv6Address` <a name="ResetIpv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetIpv6Address"></a>

```go
func ResetIpv6Address()
```

##### `ResetRegions` <a name="ResetRegions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.resetRegions"></a>

```go
func ResetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput">DnsLabelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput">Ipv4AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput">Ipv6AddressInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput">RegionScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput">RegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel">DnsLabel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address">Ipv4Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address">Ipv6Address</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions">Regions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope">RegionScope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DnsLabelInput`<sup>Optional</sup> <a name="DnsLabelInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabelInput"></a>

```go
func DnsLabelInput() *string
```

- *Type:* *string

---

##### `Ipv4AddressInput`<sup>Optional</sup> <a name="Ipv4AddressInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4AddressInput"></a>

```go
func Ipv4AddressInput() *string
```

- *Type:* *string

---

##### `Ipv6AddressInput`<sup>Optional</sup> <a name="Ipv6AddressInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6AddressInput"></a>

```go
func Ipv6AddressInput() *string
```

- *Type:* *string

---

##### `RegionScopeInput`<sup>Optional</sup> <a name="RegionScopeInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScopeInput"></a>

```go
func RegionScopeInput() *string
```

- *Type:* *string

---

##### `RegionsInput`<sup>Optional</sup> <a name="RegionsInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionsInput"></a>

```go
func RegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `DnsLabel`<sup>Required</sup> <a name="DnsLabel" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.dnsLabel"></a>

```go
func DnsLabel() *string
```

- *Type:* *string

---

##### `Ipv4Address`<sup>Required</sup> <a name="Ipv4Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv4Address"></a>

```go
func Ipv4Address() *string
```

- *Type:* *string

---

##### `Ipv6Address`<sup>Required</sup> <a name="Ipv6Address" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.ipv6Address"></a>

```go
func Ipv6Address() *string
```

- *Type:* *string

---

##### `Regions`<sup>Required</sup> <a name="Regions" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regions"></a>

```go
func Regions() *[]*string
```

- *Type:* *[]*string

---

##### `RegionScope`<sup>Required</sup> <a name="RegionScope" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.regionScope"></a>

```go
func RegionScope() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointIpAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53GlobalresolverCoreNetworkEndpointTagsList <a name="Route53GlobalresolverCoreNetworkEndpointTagsList" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

route53globalresolvercorenetworkendpoint.NewRoute53GlobalresolverCoreNetworkEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53GlobalresolverCoreNetworkEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get"></a>

```go
func Get(index *f64) Route53GlobalresolverCoreNetworkEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53GlobalresolverCoreNetworkEndpointTagsOutputReference <a name="Route53GlobalresolverCoreNetworkEndpointTagsOutputReference" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/v2/route53globalresolvercorenetworkendpoint"

route53globalresolvercorenetworkendpoint.NewRoute53GlobalresolverCoreNetworkEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53GlobalresolverCoreNetworkEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53GlobalresolverCoreNetworkEndpoint.Route53GlobalresolverCoreNetworkEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



