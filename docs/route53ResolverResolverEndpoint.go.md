# `route53ResolverResolverEndpoint` Submodule <a name="`route53ResolverResolverEndpoint` Submodule" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Route53ResolverResolverEndpoint <a name="Route53ResolverResolverEndpoint" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint awscc_route53resolver_resolver_endpoint}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

route53resolverresolverendpoint.NewRoute53ResolverResolverEndpoint(scope Construct, id *string, config Route53ResolverResolverEndpointConfig) Route53ResolverResolverEndpoint
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig">Route53ResolverResolverEndpointConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig">Route53ResolverResolverEndpointConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses">PutIpAddresses</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetDns64Enabled">ResetDns64Enabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetIpv6InternetAccessEnabled">ResetIpv6InternetAccessEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOutpostArn">ResetOutpostArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetPreferredInstanceType">ResetPreferredInstanceType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetProtocols">ResetProtocols</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetResolverEndpointType">ResetResolverEndpointType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetRniEnhancedMetricsEnabled">ResetRniEnhancedMetricsEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTargetNameServerMetricsEnabled">ResetTargetNameServerMetricsEnabled</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutIpAddresses` <a name="PutIpAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses"></a>

```go
func PutIpAddresses(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putIpAddresses.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDns64Enabled` <a name="ResetDns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetDns64Enabled"></a>

```go
func ResetDns64Enabled()
```

##### `ResetIpv6InternetAccessEnabled` <a name="ResetIpv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetIpv6InternetAccessEnabled"></a>

```go
func ResetIpv6InternetAccessEnabled()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetName"></a>

```go
func ResetName()
```

##### `ResetOutpostArn` <a name="ResetOutpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetOutpostArn"></a>

```go
func ResetOutpostArn()
```

##### `ResetPreferredInstanceType` <a name="ResetPreferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetPreferredInstanceType"></a>

```go
func ResetPreferredInstanceType()
```

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetProtocols"></a>

```go
func ResetProtocols()
```

##### `ResetResolverEndpointType` <a name="ResetResolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetResolverEndpointType"></a>

```go
func ResetResolverEndpointType()
```

##### `ResetRniEnhancedMetricsEnabled` <a name="ResetRniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetRniEnhancedMetricsEnabled"></a>

```go
func ResetRniEnhancedMetricsEnabled()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTargetNameServerMetricsEnabled` <a name="ResetTargetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.resetTargetNameServerMetricsEnabled"></a>

```go
func ResetTargetNameServerMetricsEnabled()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Route53ResolverResolverEndpoint resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

route53resolverresolverendpoint.Route53ResolverResolverEndpoint_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

route53resolverresolverendpoint.Route53ResolverResolverEndpoint_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

route53resolverresolverendpoint.Route53ResolverResolverEndpoint_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

route53resolverresolverendpoint.Route53ResolverResolverEndpoint_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Route53ResolverResolverEndpoint resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Route53ResolverResolverEndpoint to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Route53ResolverResolverEndpoint that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Route53ResolverResolverEndpoint to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.hostVpcId">HostVpcId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressCount">IpAddressCount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddresses">IpAddresses</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList">Route53ResolverResolverEndpointIpAddressesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointId">ResolverEndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList">Route53ResolverResolverEndpointTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.directionInput">DirectionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64EnabledInput">Dns64EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressesInput">IpAddressesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabledInput">Ipv6InternetAccessEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArnInput">OutpostArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceTypeInput">PreferredInstanceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointTypeInput">ResolverEndpointTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabledInput">RniEnhancedMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabledInput">TargetNameServerMetricsEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.direction">Direction</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64Enabled">Dns64Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabled">Ipv6InternetAccessEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceType">PreferredInstanceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointType">ResolverEndpointType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabled">RniEnhancedMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabled">TargetNameServerMetricsEnabled</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `HostVpcId`<sup>Required</sup> <a name="HostVpcId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.hostVpcId"></a>

```go
func HostVpcId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpAddressCount`<sup>Required</sup> <a name="IpAddressCount" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressCount"></a>

```go
func IpAddressCount() *string
```

- *Type:* *string

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddresses"></a>

```go
func IpAddresses() Route53ResolverResolverEndpointIpAddressesList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList">Route53ResolverResolverEndpointIpAddressesList</a>

---

##### `ResolverEndpointId`<sup>Required</sup> <a name="ResolverEndpointId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointId"></a>

```go
func ResolverEndpointId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tags"></a>

```go
func Tags() Route53ResolverResolverEndpointTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList">Route53ResolverResolverEndpointTagsList</a>

---

##### `DirectionInput`<sup>Optional</sup> <a name="DirectionInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.directionInput"></a>

```go
func DirectionInput() *string
```

- *Type:* *string

---

##### `Dns64EnabledInput`<sup>Optional</sup> <a name="Dns64EnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64EnabledInput"></a>

```go
func Dns64EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IpAddressesInput`<sup>Optional</sup> <a name="IpAddressesInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipAddressesInput"></a>

```go
func IpAddressesInput() interface{}
```

- *Type:* interface{}

---

##### `Ipv6InternetAccessEnabledInput`<sup>Optional</sup> <a name="Ipv6InternetAccessEnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabledInput"></a>

```go
func Ipv6InternetAccessEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `OutpostArnInput`<sup>Optional</sup> <a name="OutpostArnInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArnInput"></a>

```go
func OutpostArnInput() *string
```

- *Type:* *string

---

##### `PreferredInstanceTypeInput`<sup>Optional</sup> <a name="PreferredInstanceTypeInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceTypeInput"></a>

```go
func PreferredInstanceTypeInput() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ResolverEndpointTypeInput`<sup>Optional</sup> <a name="ResolverEndpointTypeInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointTypeInput"></a>

```go
func ResolverEndpointTypeInput() *string
```

- *Type:* *string

---

##### `RniEnhancedMetricsEnabledInput`<sup>Optional</sup> <a name="RniEnhancedMetricsEnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabledInput"></a>

```go
func RniEnhancedMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetNameServerMetricsEnabledInput`<sup>Optional</sup> <a name="TargetNameServerMetricsEnabledInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabledInput"></a>

```go
func TargetNameServerMetricsEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.direction"></a>

```go
func Direction() *string
```

- *Type:* *string

---

##### `Dns64Enabled`<sup>Required</sup> <a name="Dns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.dns64Enabled"></a>

```go
func Dns64Enabled() interface{}
```

- *Type:* interface{}

---

##### `Ipv6InternetAccessEnabled`<sup>Required</sup> <a name="Ipv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.ipv6InternetAccessEnabled"></a>

```go
func Ipv6InternetAccessEnabled() interface{}
```

- *Type:* interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `OutpostArn`<sup>Required</sup> <a name="OutpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.outpostArn"></a>

```go
func OutpostArn() *string
```

- *Type:* *string

---

##### `PreferredInstanceType`<sup>Required</sup> <a name="PreferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.preferredInstanceType"></a>

```go
func PreferredInstanceType() *string
```

- *Type:* *string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `ResolverEndpointType`<sup>Required</sup> <a name="ResolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.resolverEndpointType"></a>

```go
func ResolverEndpointType() *string
```

- *Type:* *string

---

##### `RniEnhancedMetricsEnabled`<sup>Required</sup> <a name="RniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.rniEnhancedMetricsEnabled"></a>

```go
func RniEnhancedMetricsEnabled() interface{}
```

- *Type:* interface{}

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `TargetNameServerMetricsEnabled`<sup>Required</sup> <a name="TargetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.targetNameServerMetricsEnabled"></a>

```go
func TargetNameServerMetricsEnabled() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpoint.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Route53ResolverResolverEndpointConfig <a name="Route53ResolverResolverEndpointConfig" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

&route53resolverresolverendpoint.Route53ResolverResolverEndpointConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Direction: *string,
	IpAddresses: interface{},
	SecurityGroupIds: *[]*string,
	Dns64Enabled: interface{},
	Ipv6InternetAccessEnabled: interface{},
	Name: *string,
	OutpostArn: *string,
	PreferredInstanceType: *string,
	Protocols: *[]*string,
	ResolverEndpointType: *string,
	RniEnhancedMetricsEnabled: interface{},
	Tags: interface{},
	TargetNameServerMetricsEnabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.direction">Direction</a></code> | <code>*string</code> | Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipAddresses">IpAddresses</a></code> | <code>interface{}</code> | The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints). |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The ID of one or more security groups that control access to this VPC. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dns64Enabled">Dns64Enabled</a></code> | <code>interface{}</code> | Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipv6InternetAccessEnabled">Ipv6InternetAccessEnabled</a></code> | <code>interface{}</code> | Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.name">Name</a></code> | <code>*string</code> | A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.outpostArn">OutpostArn</a></code> | <code>*string</code> | The ARN (Amazon Resource Name) for the Outpost. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.preferredInstanceType">PreferredInstanceType</a></code> | <code>*string</code> | The Amazon EC2 instance type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.resolverEndpointType">ResolverEndpointType</a></code> | <code>*string</code> | The Resolver endpoint IP address type. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.rniEnhancedMetricsEnabled">RniEnhancedMetricsEnabled</a></code> | <code>interface{}</code> | Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.targetNameServerMetricsEnabled">TargetNameServerMetricsEnabled</a></code> | <code>interface{}</code> | Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Direction`<sup>Required</sup> <a name="Direction" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.direction"></a>

```go
Direction *string
```

- *Type:* *string

Indicates whether the Resolver endpoint allows inbound or outbound DNS queries: - INBOUND: allows DNS queries to your VPC from your network  - OUTBOUND: allows DNS queries from your VPC to your network  - INBOUND_DELEGATION: allows DNS queries to your VPC from your network with authoritative answers from private hosted zones.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#direction Route53ResolverResolverEndpoint#direction}

---

##### `IpAddresses`<sup>Required</sup> <a name="IpAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipAddresses"></a>

```go
IpAddresses interface{}
```

- *Type:* interface{}

The subnets and IP addresses in your VPC that DNS queries originate from (for outbound endpoints) or that you forward DNS queries to (for inbound endpoints).

The subnet ID uniquely identifies a VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ip_addresses Route53ResolverResolverEndpoint#ip_addresses}

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The ID of one or more security groups that control access to this VPC.

The security group must include one or more inbound rules (for inbound endpoints) or outbound rules (for outbound endpoints). Inbound and outbound rules must allow TCP and UDP access. For inbound access, open port 53. For outbound access, open the port that you're using for DNS queries on your network.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#security_group_ids Route53ResolverResolverEndpoint#security_group_ids}

---

##### `Dns64Enabled`<sup>Optional</sup> <a name="Dns64Enabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.dns64Enabled"></a>

```go
Dns64Enabled interface{}
```

- *Type:* interface{}

Specifies whether DNS64 is enabled for the Inbound Resolver Endpoint.

When set to true, if a DNS AAAA query is made for a domain that has only an A (IPv4) record, the resolver automatically synthesizes an AAAA (IPv6) response by embedding the IPv4 address into the well-known prefix 64:ff9b::/96. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#dns_64_enabled Route53ResolverResolverEndpoint#dns_64_enabled}

---

##### `Ipv6InternetAccessEnabled`<sup>Optional</sup> <a name="Ipv6InternetAccessEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.ipv6InternetAccessEnabled"></a>

```go
Ipv6InternetAccessEnabled interface{}
```

- *Type:* interface{}

Specifies whether IPv6 Internet Gateway access is enabled through the Outbound Resolver Endpoint.

When set to true, this property allows your Endpoint ENIs to reach public IPv6 target nameservers through an internet gateway. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ipv_6_internet_access_enabled Route53ResolverResolverEndpoint#ipv_6_internet_access_enabled}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A friendly name that lets you easily find a configuration in the Resolver dashboard in the Route 53 console.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#name Route53ResolverResolverEndpoint#name}

---

##### `OutpostArn`<sup>Optional</sup> <a name="OutpostArn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.outpostArn"></a>

```go
OutpostArn *string
```

- *Type:* *string

The ARN (Amazon Resource Name) for the Outpost.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#outpost_arn Route53ResolverResolverEndpoint#outpost_arn}

---

##### `PreferredInstanceType`<sup>Optional</sup> <a name="PreferredInstanceType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.preferredInstanceType"></a>

```go
PreferredInstanceType *string
```

- *Type:* *string

The Amazon EC2 instance type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#preferred_instance_type Route53ResolverResolverEndpoint#preferred_instance_type}

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Protocols used for the endpoint. DoH-FIPS is applicable for inbound endpoints only.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#protocols Route53ResolverResolverEndpoint#protocols}

---

##### `ResolverEndpointType`<sup>Optional</sup> <a name="ResolverEndpointType" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.resolverEndpointType"></a>

```go
ResolverEndpointType *string
```

- *Type:* *string

The Resolver endpoint IP address type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#resolver_endpoint_type Route53ResolverResolverEndpoint#resolver_endpoint_type}

---

##### `RniEnhancedMetricsEnabled`<sup>Optional</sup> <a name="RniEnhancedMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.rniEnhancedMetricsEnabled"></a>

```go
RniEnhancedMetricsEnabled interface{}
```

- *Type:* interface{}

Specifies whether RNI enhanced metrics are enabled for the Resolver Endpoints.

When set to true, one-minute granular metrics are published in CloudWatch for each RNI associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#rni_enhanced_metrics_enabled Route53ResolverResolverEndpoint#rni_enhanced_metrics_enabled}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#tags Route53ResolverResolverEndpoint#tags}

---

##### `TargetNameServerMetricsEnabled`<sup>Optional</sup> <a name="TargetNameServerMetricsEnabled" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointConfig.property.targetNameServerMetricsEnabled"></a>

```go
TargetNameServerMetricsEnabled interface{}
```

- *Type:* interface{}

Specifies whether target name server metrics are enabled for the Outbound Resolver Endpoint.

When set to true, one-minute granular metrics are published in CloudWatch for each target name server associated with this endpoint. When set to false, metrics are not published. Default is false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#target_name_server_metrics_enabled Route53ResolverResolverEndpoint#target_name_server_metrics_enabled}

---

### Route53ResolverResolverEndpointIpAddresses <a name="Route53ResolverResolverEndpointIpAddresses" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

&route53resolverresolverendpoint.Route53ResolverResolverEndpointIpAddresses {
	SubnetId: *string,
	Ip: *string,
	Ipv6: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.subnetId">SubnetId</a></code> | <code>*string</code> | The ID of the subnet that contains the IP address. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ip">Ip</a></code> | <code>*string</code> | The IPv4 address that you want to use for DNS queries. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ipv6">Ipv6</a></code> | <code>*string</code> | The IPv6 address that you want to use for DNS queries. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

The ID of the subnet that contains the IP address.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#subnet_id Route53ResolverResolverEndpoint#subnet_id}

---

##### `Ip`<sup>Optional</sup> <a name="Ip" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ip"></a>

```go
Ip *string
```

- *Type:* *string

The IPv4 address that you want to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ip Route53ResolverResolverEndpoint#ip}

---

##### `Ipv6`<sup>Optional</sup> <a name="Ipv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddresses.property.ipv6"></a>

```go
Ipv6 *string
```

- *Type:* *string

The IPv6 address that you want to use for DNS queries.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#ipv_6 Route53ResolverResolverEndpoint#ipv_6}

---

### Route53ResolverResolverEndpointTags <a name="Route53ResolverResolverEndpointTags" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

&route53resolverresolverendpoint.Route53ResolverResolverEndpointTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.key">Key</a></code> | <code>*string</code> | The name for the tag. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The name for the tag.

For example, if you want to associate Resolver resources with the account IDs of your customers for billing purposes, the value of Key might be account-id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#key Route53ResolverResolverEndpoint#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

For example, if Key is account-id, then Value might be the ID of the customer account that you're creating the resource for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/route53resolver_resolver_endpoint#value Route53ResolverResolverEndpoint#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Route53ResolverResolverEndpointIpAddressesList <a name="Route53ResolverResolverEndpointIpAddressesList" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

route53resolverresolverendpoint.NewRoute53ResolverResolverEndpointIpAddressesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53ResolverResolverEndpointIpAddressesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get"></a>

```go
func Get(index *f64) Route53ResolverResolverEndpointIpAddressesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverResolverEndpointIpAddressesOutputReference <a name="Route53ResolverResolverEndpointIpAddressesOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

route53resolverresolverendpoint.NewRoute53ResolverResolverEndpointIpAddressesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53ResolverResolverEndpointIpAddressesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIp">ResetIp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIpv6">ResetIpv6</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIp` <a name="ResetIp" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIp"></a>

```go
func ResetIp()
```

##### `ResetIpv6` <a name="ResetIpv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.resetIpv6"></a>

```go
func ResetIpv6()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipInput">IpInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6Input">Ipv6Input</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ip">Ip</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6">Ipv6</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpInput`<sup>Optional</sup> <a name="IpInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipInput"></a>

```go
func IpInput() *string
```

- *Type:* *string

---

##### `Ipv6Input`<sup>Optional</sup> <a name="Ipv6Input" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6Input"></a>

```go
func Ipv6Input() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `Ip`<sup>Required</sup> <a name="Ip" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ip"></a>

```go
func Ip() *string
```

- *Type:* *string

---

##### `Ipv6`<sup>Required</sup> <a name="Ipv6" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.ipv6"></a>

```go
func Ipv6() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointIpAddressesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverResolverEndpointTagsList <a name="Route53ResolverResolverEndpointTagsList" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

route53resolverresolverendpoint.NewRoute53ResolverResolverEndpointTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Route53ResolverResolverEndpointTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get"></a>

```go
func Get(index *f64) Route53ResolverResolverEndpointTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Route53ResolverResolverEndpointTagsOutputReference <a name="Route53ResolverResolverEndpointTagsOutputReference" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/route53resolverresolverendpoint"

route53resolverresolverendpoint.NewRoute53ResolverResolverEndpointTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Route53ResolverResolverEndpointTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.route53ResolverResolverEndpoint.Route53ResolverResolverEndpointTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



