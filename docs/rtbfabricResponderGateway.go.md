# `rtbfabricResponderGateway` Submodule <a name="`rtbfabricResponderGateway` Submodule" id="@cdktn/provider-awscc.rtbfabricResponderGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### RtbfabricResponderGateway <a name="RtbfabricResponderGateway" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway awscc_rtbfabric_responder_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.NewRtbfabricResponderGateway(scope Construct, id *string, config RtbfabricResponderGatewayConfig) RtbfabricResponderGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig">RtbfabricResponderGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig">RtbfabricResponderGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig">PutListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration">PutManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration">PutTrustStoreConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn">ResetAcmCertificateArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName">ResetDomainName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType">ResetGatewayType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig">ResetListenerConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration">ResetManagedEndpointConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration">ResetTrustStoreConfiguration</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutListenerConfig` <a name="PutListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig"></a>

```go
func PutListenerConfig(value RtbfabricResponderGatewayListenerConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putListenerConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

---

##### `PutManagedEndpointConfiguration` <a name="PutManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration"></a>

```go
func PutManagedEndpointConfiguration(value RtbfabricResponderGatewayManagedEndpointConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putManagedEndpointConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTrustStoreConfiguration` <a name="PutTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration"></a>

```go
func PutTrustStoreConfiguration(value RtbfabricResponderGatewayTrustStoreConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.putTrustStoreConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

---

##### `ResetAcmCertificateArn` <a name="ResetAcmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetAcmCertificateArn"></a>

```go
func ResetAcmCertificateArn()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDomainName` <a name="ResetDomainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetDomainName"></a>

```go
func ResetDomainName()
```

##### `ResetGatewayType` <a name="ResetGatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetGatewayType"></a>

```go
func ResetGatewayType()
```

##### `ResetListenerConfig` <a name="ResetListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetListenerConfig"></a>

```go
func ResetListenerConfig()
```

##### `ResetManagedEndpointConfiguration` <a name="ResetManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetManagedEndpointConfiguration"></a>

```go
func ResetManagedEndpointConfiguration()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTrustStoreConfiguration` <a name="ResetTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.resetTrustStoreConfiguration"></a>

```go
func ResetTrustStoreConfiguration()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.RtbfabricResponderGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.RtbfabricResponderGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.RtbfabricResponderGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.RtbfabricResponderGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a RtbfabricResponderGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the RtbfabricResponderGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing RtbfabricResponderGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the RtbfabricResponderGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus">CertificateAssociationStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp">CreatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint">ExternalInboundEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId">GatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig">ListenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration">ManagedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus">ResponderGatewayStatus</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration">TrustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp">UpdatedTimestamp</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput">AcmCertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput">DomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput">GatewayTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput">ListenerConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput">ManagedEndpointConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput">SecurityGroupIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput">SubnetIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput">TrustStoreConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn">AcmCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName">DomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType">GatewayType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CertificateAssociationStatus`<sup>Required</sup> <a name="CertificateAssociationStatus" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.certificateAssociationStatus"></a>

```go
func CertificateAssociationStatus() *string
```

- *Type:* *string

---

##### `CreatedTimestamp`<sup>Required</sup> <a name="CreatedTimestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.createdTimestamp"></a>

```go
func CreatedTimestamp() *string
```

- *Type:* *string

---

##### `ExternalInboundEndpoint`<sup>Required</sup> <a name="ExternalInboundEndpoint" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.externalInboundEndpoint"></a>

```go
func ExternalInboundEndpoint() *string
```

- *Type:* *string

---

##### `GatewayId`<sup>Required</sup> <a name="GatewayId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayId"></a>

```go
func GatewayId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListenerConfig`<sup>Required</sup> <a name="ListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfig"></a>

```go
func ListenerConfig() RtbfabricResponderGatewayListenerConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference">RtbfabricResponderGatewayListenerConfigOutputReference</a>

---

##### `ManagedEndpointConfiguration`<sup>Required</sup> <a name="ManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfiguration"></a>

```go
func ManagedEndpointConfiguration() RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference</a>

---

##### `ResponderGatewayStatus`<sup>Required</sup> <a name="ResponderGatewayStatus" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.responderGatewayStatus"></a>

```go
func ResponderGatewayStatus() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tags"></a>

```go
func Tags() RtbfabricResponderGatewayTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList">RtbfabricResponderGatewayTagsList</a>

---

##### `TrustStoreConfiguration`<sup>Required</sup> <a name="TrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfiguration"></a>

```go
func TrustStoreConfiguration() RtbfabricResponderGatewayTrustStoreConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference">RtbfabricResponderGatewayTrustStoreConfigurationOutputReference</a>

---

##### `UpdatedTimestamp`<sup>Required</sup> <a name="UpdatedTimestamp" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.updatedTimestamp"></a>

```go
func UpdatedTimestamp() *string
```

- *Type:* *string

---

##### `AcmCertificateArnInput`<sup>Optional</sup> <a name="AcmCertificateArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArnInput"></a>

```go
func AcmCertificateArnInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DomainNameInput`<sup>Optional</sup> <a name="DomainNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainNameInput"></a>

```go
func DomainNameInput() *string
```

- *Type:* *string

---

##### `GatewayTypeInput`<sup>Optional</sup> <a name="GatewayTypeInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayTypeInput"></a>

```go
func GatewayTypeInput() *string
```

- *Type:* *string

---

##### `ListenerConfigInput`<sup>Optional</sup> <a name="ListenerConfigInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.listenerConfigInput"></a>

```go
func ListenerConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ManagedEndpointConfigurationInput`<sup>Optional</sup> <a name="ManagedEndpointConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.managedEndpointConfigurationInput"></a>

```go
func ManagedEndpointConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SecurityGroupIdsInput`<sup>Optional</sup> <a name="SecurityGroupIdsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIdsInput"></a>

```go
func SecurityGroupIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIdsInput`<sup>Optional</sup> <a name="SubnetIdsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIdsInput"></a>

```go
func SubnetIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustStoreConfigurationInput`<sup>Optional</sup> <a name="TrustStoreConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.trustStoreConfigurationInput"></a>

```go
func TrustStoreConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `AcmCertificateArn`<sup>Required</sup> <a name="AcmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.acmCertificateArn"></a>

```go
func AcmCertificateArn() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DomainName`<sup>Required</sup> <a name="DomainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.domainName"></a>

```go
func DomainName() *string
```

- *Type:* *string

---

##### `GatewayType`<sup>Required</sup> <a name="GatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.gatewayType"></a>

```go
func GatewayType() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.securityGroupIds"></a>

```go
func SecurityGroupIds() *[]*string
```

- *Type:* *[]*string

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.subnetIds"></a>

```go
func SubnetIds() *[]*string
```

- *Type:* *[]*string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### RtbfabricResponderGatewayConfig <a name="RtbfabricResponderGatewayConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

&rtbfabricrespondergateway.RtbfabricResponderGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Port: *f64,
	Protocol: *string,
	SecurityGroupIds: *[]*string,
	SubnetIds: *[]*string,
	VpcId: *string,
	AcmCertificateArn: *string,
	Description: *string,
	DomainName: *string,
	GatewayType: *string,
	ListenerConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig,
	ManagedEndpointConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration,
	Tags: interface{},
	TrustStoreConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds">SecurityGroupIds</a></code> | <code>*[]*string</code> | The ID of one or more security groups in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds">SubnetIds</a></code> | <code>*[]*string</code> | The ID of one or more subnets in order to create a gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn">AcmCertificateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName">DomainName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType">GatewayType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig">ListenerConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration">ManagedEndpointConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the Responder Gateway. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration">TrustStoreConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `SecurityGroupIds`<sup>Required</sup> <a name="SecurityGroupIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.securityGroupIds"></a>

```go
SecurityGroupIds *[]*string
```

- *Type:* *[]*string

The ID of one or more security groups in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#security_group_ids RtbfabricResponderGateway#security_group_ids}

---

##### `SubnetIds`<sup>Required</sup> <a name="SubnetIds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.subnetIds"></a>

```go
SubnetIds *[]*string
```

- *Type:* *[]*string

The ID of one or more subnets in order to create a gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#subnet_ids RtbfabricResponderGateway#subnet_ids}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#vpc_id RtbfabricResponderGateway#vpc_id}.

---

##### `AcmCertificateArn`<sup>Optional</sup> <a name="AcmCertificateArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.acmCertificateArn"></a>

```go
AcmCertificateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#acm_certificate_arn RtbfabricResponderGateway#acm_certificate_arn}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#description RtbfabricResponderGateway#description}.

---

##### `DomainName`<sup>Optional</sup> <a name="DomainName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.domainName"></a>

```go
DomainName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#domain_name RtbfabricResponderGateway#domain_name}.

---

##### `GatewayType`<sup>Optional</sup> <a name="GatewayType" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.gatewayType"></a>

```go
GatewayType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#gateway_type RtbfabricResponderGateway#gateway_type}.

---

##### `ListenerConfig`<sup>Optional</sup> <a name="ListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.listenerConfig"></a>

```go
ListenerConfig RtbfabricResponderGatewayListenerConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig">RtbfabricResponderGatewayListenerConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#listener_config RtbfabricResponderGateway#listener_config}.

---

##### `ManagedEndpointConfiguration`<sup>Optional</sup> <a name="ManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.managedEndpointConfiguration"></a>

```go
ManagedEndpointConfiguration RtbfabricResponderGatewayManagedEndpointConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration">RtbfabricResponderGatewayManagedEndpointConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#managed_endpoint_configuration RtbfabricResponderGateway#managed_endpoint_configuration}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the Responder Gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#tags RtbfabricResponderGateway#tags}

---

##### `TrustStoreConfiguration`<sup>Optional</sup> <a name="TrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayConfig.property.trustStoreConfiguration"></a>

```go
TrustStoreConfiguration RtbfabricResponderGatewayTrustStoreConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration">RtbfabricResponderGatewayTrustStoreConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#trust_store_configuration RtbfabricResponderGateway#trust_store_configuration}.

---

### RtbfabricResponderGatewayListenerConfig <a name="RtbfabricResponderGatewayListenerConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

&rtbfabricrespondergateway.RtbfabricResponderGatewayListenerConfig {
	Protocols: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols">Protocols</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}. |

---

##### `Protocols`<sup>Optional</sup> <a name="Protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfig.property.protocols"></a>

```go
Protocols *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#protocols RtbfabricResponderGateway#protocols}.

---

### RtbfabricResponderGatewayManagedEndpointConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

&rtbfabricrespondergateway.RtbfabricResponderGatewayManagedEndpointConfiguration {
	AutoScalingGroupsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration,
	EksEndpointsConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration">AutoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration">EksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}. |

---

##### `AutoScalingGroupsConfiguration`<sup>Optional</sup> <a name="AutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.autoScalingGroupsConfiguration"></a>

```go
AutoScalingGroupsConfiguration RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_groups_configuration RtbfabricResponderGateway#auto_scaling_groups_configuration}.

---

##### `EksEndpointsConfiguration`<sup>Optional</sup> <a name="EksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfiguration.property.eksEndpointsConfiguration"></a>

```go
EksEndpointsConfiguration RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#eks_endpoints_configuration RtbfabricResponderGateway#eks_endpoints_configuration}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

&rtbfabricrespondergateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration {
	AutoScalingGroupNameList: *[]*string,
	HealthCheckConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList">AutoScalingGroupNameList</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `AutoScalingGroupNameList`<sup>Optional</sup> <a name="AutoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.autoScalingGroupNameList"></a>

```go
AutoScalingGroupNameList *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#auto_scaling_group_name_list RtbfabricResponderGateway#auto_scaling_group_name_list}.

---

##### `HealthCheckConfig`<sup>Optional</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.healthCheckConfig"></a>

```go
HealthCheckConfig RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#health_check_config RtbfabricResponderGateway#health_check_config}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

&rtbfabricrespondergateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig {
	HealthyThresholdCount: *f64,
	IntervalSeconds: *f64,
	Path: *string,
	Port: *f64,
	Protocol: *string,
	StatusCodeMatcher: *string,
	TimeoutMs: *f64,
	UnhealthyThresholdCount: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount">HealthyThresholdCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path">Path</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port">Port</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol">Protocol</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs">TimeoutMs</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount">UnhealthyThresholdCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}. |

---

##### `HealthyThresholdCount`<sup>Optional</sup> <a name="HealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.healthyThresholdCount"></a>

```go
HealthyThresholdCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#healthy_threshold_count RtbfabricResponderGateway#healthy_threshold_count}.

---

##### `IntervalSeconds`<sup>Optional</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.intervalSeconds"></a>

```go
IntervalSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#interval_seconds RtbfabricResponderGateway#interval_seconds}.

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#path RtbfabricResponderGateway#path}.

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#port RtbfabricResponderGateway#port}.

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#protocol RtbfabricResponderGateway#protocol}.

---

##### `StatusCodeMatcher`<sup>Optional</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.statusCodeMatcher"></a>

```go
StatusCodeMatcher *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#status_code_matcher RtbfabricResponderGateway#status_code_matcher}.

---

##### `TimeoutMs`<sup>Optional</sup> <a name="TimeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.timeoutMs"></a>

```go
TimeoutMs *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#timeout_ms RtbfabricResponderGateway#timeout_ms}.

---

##### `UnhealthyThresholdCount`<sup>Optional</sup> <a name="UnhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig.property.unhealthyThresholdCount"></a>

```go
UnhealthyThresholdCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#unhealthy_threshold_count RtbfabricResponderGateway#unhealthy_threshold_count}.

---

### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

&rtbfabricrespondergateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration {
	ClusterApiServerCaCertificateChain: *string,
	ClusterApiServerEndpointUri: *string,
	ClusterName: *string,
	EndpointsResourceName: *string,
	EndpointsResourceNamespace: *string,
	RoleArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain">ClusterApiServerCaCertificateChain</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri">ClusterApiServerEndpointUri</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName">ClusterName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName">EndpointsResourceName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace">EndpointsResourceNamespace</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}. |

---

##### `ClusterApiServerCaCertificateChain`<sup>Optional</sup> <a name="ClusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerCaCertificateChain"></a>

```go
ClusterApiServerCaCertificateChain *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_ca_certificate_chain RtbfabricResponderGateway#cluster_api_server_ca_certificate_chain}.

---

##### `ClusterApiServerEndpointUri`<sup>Optional</sup> <a name="ClusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterApiServerEndpointUri"></a>

```go
ClusterApiServerEndpointUri *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#cluster_api_server_endpoint_uri RtbfabricResponderGateway#cluster_api_server_endpoint_uri}.

---

##### `ClusterName`<sup>Optional</sup> <a name="ClusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.clusterName"></a>

```go
ClusterName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#cluster_name RtbfabricResponderGateway#cluster_name}.

---

##### `EndpointsResourceName`<sup>Optional</sup> <a name="EndpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceName"></a>

```go
EndpointsResourceName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_name RtbfabricResponderGateway#endpoints_resource_name}.

---

##### `EndpointsResourceNamespace`<sup>Optional</sup> <a name="EndpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.endpointsResourceNamespace"></a>

```go
EndpointsResourceNamespace *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#endpoints_resource_namespace RtbfabricResponderGateway#endpoints_resource_namespace}.

---

##### `RoleArn`<sup>Optional</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#role_arn RtbfabricResponderGateway#role_arn}.

---

### RtbfabricResponderGatewayTags <a name="RtbfabricResponderGatewayTags" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

&rtbfabricrespondergateway.RtbfabricResponderGatewayTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#key RtbfabricResponderGateway#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#value RtbfabricResponderGateway#value}

---

### RtbfabricResponderGatewayTrustStoreConfiguration <a name="RtbfabricResponderGatewayTrustStoreConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

&rtbfabricrespondergateway.RtbfabricResponderGatewayTrustStoreConfiguration {
	CertificateAuthorityCertificates: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates">CertificateAuthorityCertificates</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}. |

---

##### `CertificateAuthorityCertificates`<sup>Optional</sup> <a name="CertificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfiguration.property.certificateAuthorityCertificates"></a>

```go
CertificateAuthorityCertificates *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/rtbfabric_responder_gateway#certificate_authority_certificates RtbfabricResponderGateway#certificate_authority_certificates}.

---

## Classes <a name="Classes" id="Classes"></a>

### RtbfabricResponderGatewayListenerConfigOutputReference <a name="RtbfabricResponderGatewayListenerConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.NewRtbfabricResponderGatewayListenerConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricResponderGatewayListenerConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols">ResetProtocols</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetProtocols` <a name="ResetProtocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.resetProtocols"></a>

```go
func ResetProtocols()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput">ProtocolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols">Protocols</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ProtocolsInput`<sup>Optional</sup> <a name="ProtocolsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocolsInput"></a>

```go
func ProtocolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Protocols`<sup>Required</sup> <a name="Protocols" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.protocols"></a>

```go
func Protocols() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayListenerConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.NewRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount">ResetHealthyThresholdCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds">ResetIntervalSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher">ResetStatusCodeMatcher</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs">ResetTimeoutMs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount">ResetUnhealthyThresholdCount</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHealthyThresholdCount` <a name="ResetHealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetHealthyThresholdCount"></a>

```go
func ResetHealthyThresholdCount()
```

##### `ResetIntervalSeconds` <a name="ResetIntervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetIntervalSeconds"></a>

```go
func ResetIntervalSeconds()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetStatusCodeMatcher` <a name="ResetStatusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetStatusCodeMatcher"></a>

```go
func ResetStatusCodeMatcher()
```

##### `ResetTimeoutMs` <a name="ResetTimeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetTimeoutMs"></a>

```go
func ResetTimeoutMs()
```

##### `ResetUnhealthyThresholdCount` <a name="ResetUnhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.resetUnhealthyThresholdCount"></a>

```go
func ResetUnhealthyThresholdCount()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput">HealthyThresholdCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput">IntervalSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput">StatusCodeMatcherInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput">TimeoutMsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput">UnhealthyThresholdCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount">HealthyThresholdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds">IntervalSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher">StatusCodeMatcher</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs">TimeoutMs</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount">UnhealthyThresholdCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthyThresholdCountInput`<sup>Optional</sup> <a name="HealthyThresholdCountInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCountInput"></a>

```go
func HealthyThresholdCountInput() *f64
```

- *Type:* *f64

---

##### `IntervalSecondsInput`<sup>Optional</sup> <a name="IntervalSecondsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSecondsInput"></a>

```go
func IntervalSecondsInput() *f64
```

- *Type:* *f64

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `StatusCodeMatcherInput`<sup>Optional</sup> <a name="StatusCodeMatcherInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcherInput"></a>

```go
func StatusCodeMatcherInput() *string
```

- *Type:* *string

---

##### `TimeoutMsInput`<sup>Optional</sup> <a name="TimeoutMsInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMsInput"></a>

```go
func TimeoutMsInput() *f64
```

- *Type:* *f64

---

##### `UnhealthyThresholdCountInput`<sup>Optional</sup> <a name="UnhealthyThresholdCountInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCountInput"></a>

```go
func UnhealthyThresholdCountInput() *f64
```

- *Type:* *f64

---

##### `HealthyThresholdCount`<sup>Required</sup> <a name="HealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.healthyThresholdCount"></a>

```go
func HealthyThresholdCount() *f64
```

- *Type:* *f64

---

##### `IntervalSeconds`<sup>Required</sup> <a name="IntervalSeconds" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.intervalSeconds"></a>

```go
func IntervalSeconds() *f64
```

- *Type:* *f64

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `StatusCodeMatcher`<sup>Required</sup> <a name="StatusCodeMatcher" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.statusCodeMatcher"></a>

```go
func StatusCodeMatcher() *string
```

- *Type:* *string

---

##### `TimeoutMs`<sup>Required</sup> <a name="TimeoutMs" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.timeoutMs"></a>

```go
func TimeoutMs() *f64
```

- *Type:* *f64

---

##### `UnhealthyThresholdCount`<sup>Required</sup> <a name="UnhealthyThresholdCount" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.unhealthyThresholdCount"></a>

```go
func UnhealthyThresholdCount() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.NewRtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig">PutHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList">ResetAutoScalingGroupNameList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig">ResetHealthCheckConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutHealthCheckConfig` <a name="PutHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig"></a>

```go
func PutHealthCheckConfig(value RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.putHealthCheckConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfig</a>

---

##### `ResetAutoScalingGroupNameList` <a name="ResetAutoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetAutoScalingGroupNameList"></a>

```go
func ResetAutoScalingGroupNameList()
```

##### `ResetHealthCheckConfig` <a name="ResetHealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetHealthCheckConfig"></a>

```go
func ResetHealthCheckConfig()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig">HealthCheckConfig</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput">AutoScalingGroupNameListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput">HealthCheckConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList">AutoScalingGroupNameList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HealthCheckConfig`<sup>Required</sup> <a name="HealthCheckConfig" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfig"></a>

```go
func HealthCheckConfig() RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationHealthCheckConfigOutputReference</a>

---

##### `AutoScalingGroupNameListInput`<sup>Optional</sup> <a name="AutoScalingGroupNameListInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameListInput"></a>

```go
func AutoScalingGroupNameListInput() *[]*string
```

- *Type:* *[]*string

---

##### `HealthCheckConfigInput`<sup>Optional</sup> <a name="HealthCheckConfigInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.healthCheckConfigInput"></a>

```go
func HealthCheckConfigInput() interface{}
```

- *Type:* interface{}

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `AutoScalingGroupNameList`<sup>Required</sup> <a name="AutoScalingGroupNameList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.autoScalingGroupNameList"></a>

```go
func AutoScalingGroupNameList() *[]*string
```

- *Type:* *[]*string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.NewRtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain">ResetClusterApiServerCaCertificateChain</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri">ResetClusterApiServerEndpointUri</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName">ResetClusterName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName">ResetEndpointsResourceName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace">ResetEndpointsResourceNamespace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn">ResetRoleArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetClusterApiServerCaCertificateChain` <a name="ResetClusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerCaCertificateChain"></a>

```go
func ResetClusterApiServerCaCertificateChain()
```

##### `ResetClusterApiServerEndpointUri` <a name="ResetClusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterApiServerEndpointUri"></a>

```go
func ResetClusterApiServerEndpointUri()
```

##### `ResetClusterName` <a name="ResetClusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetClusterName"></a>

```go
func ResetClusterName()
```

##### `ResetEndpointsResourceName` <a name="ResetEndpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceName"></a>

```go
func ResetEndpointsResourceName()
```

##### `ResetEndpointsResourceNamespace` <a name="ResetEndpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetEndpointsResourceNamespace"></a>

```go
func ResetEndpointsResourceNamespace()
```

##### `ResetRoleArn` <a name="ResetRoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.resetRoleArn"></a>

```go
func ResetRoleArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput">ClusterApiServerCaCertificateChainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput">ClusterApiServerEndpointUriInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput">ClusterNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput">EndpointsResourceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput">EndpointsResourceNamespaceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain">ClusterApiServerCaCertificateChain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri">ClusterApiServerEndpointUri</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName">ClusterName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName">EndpointsResourceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace">EndpointsResourceNamespace</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClusterApiServerCaCertificateChainInput`<sup>Optional</sup> <a name="ClusterApiServerCaCertificateChainInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChainInput"></a>

```go
func ClusterApiServerCaCertificateChainInput() *string
```

- *Type:* *string

---

##### `ClusterApiServerEndpointUriInput`<sup>Optional</sup> <a name="ClusterApiServerEndpointUriInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUriInput"></a>

```go
func ClusterApiServerEndpointUriInput() *string
```

- *Type:* *string

---

##### `ClusterNameInput`<sup>Optional</sup> <a name="ClusterNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterNameInput"></a>

```go
func ClusterNameInput() *string
```

- *Type:* *string

---

##### `EndpointsResourceNameInput`<sup>Optional</sup> <a name="EndpointsResourceNameInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNameInput"></a>

```go
func EndpointsResourceNameInput() *string
```

- *Type:* *string

---

##### `EndpointsResourceNamespaceInput`<sup>Optional</sup> <a name="EndpointsResourceNamespaceInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespaceInput"></a>

```go
func EndpointsResourceNamespaceInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `ClusterApiServerCaCertificateChain`<sup>Required</sup> <a name="ClusterApiServerCaCertificateChain" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerCaCertificateChain"></a>

```go
func ClusterApiServerCaCertificateChain() *string
```

- *Type:* *string

---

##### `ClusterApiServerEndpointUri`<sup>Required</sup> <a name="ClusterApiServerEndpointUri" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterApiServerEndpointUri"></a>

```go
func ClusterApiServerEndpointUri() *string
```

- *Type:* *string

---

##### `ClusterName`<sup>Required</sup> <a name="ClusterName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.clusterName"></a>

```go
func ClusterName() *string
```

- *Type:* *string

---

##### `EndpointsResourceName`<sup>Required</sup> <a name="EndpointsResourceName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceName"></a>

```go
func EndpointsResourceName() *string
```

- *Type:* *string

---

##### `EndpointsResourceNamespace`<sup>Required</sup> <a name="EndpointsResourceNamespace" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.endpointsResourceNamespace"></a>

```go
func EndpointsResourceNamespace() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference <a name="RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.NewRtbfabricResponderGatewayManagedEndpointConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration">PutAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration">PutEksEndpointsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration">ResetAutoScalingGroupsConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration">ResetEksEndpointsConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAutoScalingGroupsConfiguration` <a name="PutAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration"></a>

```go
func PutAutoScalingGroupsConfiguration(value RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putAutoScalingGroupsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfiguration</a>

---

##### `PutEksEndpointsConfiguration` <a name="PutEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration"></a>

```go
func PutEksEndpointsConfiguration(value RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.putEksEndpointsConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfiguration</a>

---

##### `ResetAutoScalingGroupsConfiguration` <a name="ResetAutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetAutoScalingGroupsConfiguration"></a>

```go
func ResetAutoScalingGroupsConfiguration()
```

##### `ResetEksEndpointsConfiguration` <a name="ResetEksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.resetEksEndpointsConfiguration"></a>

```go
func ResetEksEndpointsConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration">AutoScalingGroupsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration">EksEndpointsConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput">AutoScalingGroupsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput">EksEndpointsConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoScalingGroupsConfiguration`<sup>Required</sup> <a name="AutoScalingGroupsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfiguration"></a>

```go
func AutoScalingGroupsConfiguration() RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationAutoScalingGroupsConfigurationOutputReference</a>

---

##### `EksEndpointsConfiguration`<sup>Required</sup> <a name="EksEndpointsConfiguration" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfiguration"></a>

```go
func EksEndpointsConfiguration() RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference">RtbfabricResponderGatewayManagedEndpointConfigurationEksEndpointsConfigurationOutputReference</a>

---

##### `AutoScalingGroupsConfigurationInput`<sup>Optional</sup> <a name="AutoScalingGroupsConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.autoScalingGroupsConfigurationInput"></a>

```go
func AutoScalingGroupsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `EksEndpointsConfigurationInput`<sup>Optional</sup> <a name="EksEndpointsConfigurationInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.eksEndpointsConfigurationInput"></a>

```go
func EksEndpointsConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayManagedEndpointConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricResponderGatewayTagsList <a name="RtbfabricResponderGatewayTagsList" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.NewRtbfabricResponderGatewayTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) RtbfabricResponderGatewayTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get"></a>

```go
func Get(index *f64) RtbfabricResponderGatewayTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricResponderGatewayTagsOutputReference <a name="RtbfabricResponderGatewayTagsOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.NewRtbfabricResponderGatewayTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) RtbfabricResponderGatewayTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### RtbfabricResponderGatewayTrustStoreConfigurationOutputReference <a name="RtbfabricResponderGatewayTrustStoreConfigurationOutputReference" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/rtbfabricrespondergateway"

rtbfabricrespondergateway.NewRtbfabricResponderGatewayTrustStoreConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) RtbfabricResponderGatewayTrustStoreConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates">ResetCertificateAuthorityCertificates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateAuthorityCertificates` <a name="ResetCertificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.resetCertificateAuthorityCertificates"></a>

```go
func ResetCertificateAuthorityCertificates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput">CertificateAuthorityCertificatesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates">CertificateAuthorityCertificates</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateAuthorityCertificatesInput`<sup>Optional</sup> <a name="CertificateAuthorityCertificatesInput" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificatesInput"></a>

```go
func CertificateAuthorityCertificatesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateAuthorityCertificates`<sup>Required</sup> <a name="CertificateAuthorityCertificates" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.certificateAuthorityCertificates"></a>

```go
func CertificateAuthorityCertificates() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.rtbfabricResponderGateway.RtbfabricResponderGatewayTrustStoreConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



