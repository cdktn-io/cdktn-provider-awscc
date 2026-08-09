# `bedrockagentcoreGateway` Submodule <a name="`bedrockagentcoreGateway` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreGateway"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreGateway <a name="BedrockagentcoreGateway" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway awscc_bedrockagentcore_gateway}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGateway(scope Construct, id *string, config BedrockagentcoreGatewayConfig) BedrockagentcoreGateway
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig">BedrockagentcoreGatewayConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig">BedrockagentcoreGatewayConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration">PutAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putInterceptorConfigurations">PutInterceptorConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putPolicyEngineConfiguration">PutPolicyEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration">PutProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetAuthorizerConfiguration">ResetAuthorizerConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetExceptionLevel">ResetExceptionLevel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetInterceptorConfigurations">ResetInterceptorConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetPolicyEngineConfiguration">ResetPolicyEngineConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolConfiguration">ResetProtocolConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolType">ResetProtocolType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAuthorizerConfiguration` <a name="PutAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration"></a>

```go
func PutAuthorizerConfiguration(value BedrockagentcoreGatewayAuthorizerConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putAuthorizerConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>

---

##### `PutInterceptorConfigurations` <a name="PutInterceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putInterceptorConfigurations"></a>

```go
func PutInterceptorConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putInterceptorConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutPolicyEngineConfiguration` <a name="PutPolicyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putPolicyEngineConfiguration"></a>

```go
func PutPolicyEngineConfiguration(value BedrockagentcoreGatewayPolicyEngineConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putPolicyEngineConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>

---

##### `PutProtocolConfiguration` <a name="PutProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration"></a>

```go
func PutProtocolConfiguration(value BedrockagentcoreGatewayProtocolConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.putProtocolConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>

---

##### `ResetAuthorizerConfiguration` <a name="ResetAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetAuthorizerConfiguration"></a>

```go
func ResetAuthorizerConfiguration()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetExceptionLevel` <a name="ResetExceptionLevel" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetExceptionLevel"></a>

```go
func ResetExceptionLevel()
```

##### `ResetInterceptorConfigurations` <a name="ResetInterceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetInterceptorConfigurations"></a>

```go
func ResetInterceptorConfigurations()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetPolicyEngineConfiguration` <a name="ResetPolicyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetPolicyEngineConfiguration"></a>

```go
func ResetPolicyEngineConfiguration()
```

##### `ResetProtocolConfiguration` <a name="ResetProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolConfiguration"></a>

```go
func ResetProtocolConfiguration()
```

##### `ResetProtocolType` <a name="ResetProtocolType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetProtocolType"></a>

```go
func ResetProtocolType()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreGateway resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.BedrockagentcoreGateway_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.BedrockagentcoreGateway_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.BedrockagentcoreGateway_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.BedrockagentcoreGateway_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockagentcoreGateway resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreGateway to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreGateway that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreGateway to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayArn">GatewayArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayIdentifier">GatewayIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayUrl">GatewayUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurations">InterceptorConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList">BedrockagentcoreGatewayInterceptorConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfiguration">PolicyEngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference">BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.statusReasons">StatusReasons</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.workloadIdentityDetails">WorkloadIdentityDetails</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference">BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfigurationInput">AuthorizerConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerTypeInput">AuthorizerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevelInput">ExceptionLevelInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurationsInput">InterceptorConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfigurationInput">PolicyEngineConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfigurationInput">ProtocolConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolTypeInput">ProtocolTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArnInput">RoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerType">AuthorizerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevel">ExceptionLevel</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolType">ProtocolType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArn">RoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizerConfiguration`<sup>Required</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfiguration"></a>

```go
func AuthorizerConfiguration() BedrockagentcoreGatewayAuthorizerConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `GatewayArn`<sup>Required</sup> <a name="GatewayArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayArn"></a>

```go
func GatewayArn() *string
```

- *Type:* *string

---

##### `GatewayIdentifier`<sup>Required</sup> <a name="GatewayIdentifier" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayIdentifier"></a>

```go
func GatewayIdentifier() *string
```

- *Type:* *string

---

##### `GatewayUrl`<sup>Required</sup> <a name="GatewayUrl" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.gatewayUrl"></a>

```go
func GatewayUrl() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `InterceptorConfigurations`<sup>Required</sup> <a name="InterceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurations"></a>

```go
func InterceptorConfigurations() BedrockagentcoreGatewayInterceptorConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList">BedrockagentcoreGatewayInterceptorConfigurationsList</a>

---

##### `PolicyEngineConfiguration`<sup>Required</sup> <a name="PolicyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfiguration"></a>

```go
func PolicyEngineConfiguration() BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference">BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference</a>

---

##### `ProtocolConfiguration`<sup>Required</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfiguration"></a>

```go
func ProtocolConfiguration() BedrockagentcoreGatewayProtocolConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationOutputReference</a>

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `StatusReasons`<sup>Required</sup> <a name="StatusReasons" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.statusReasons"></a>

```go
func StatusReasons() *[]*string
```

- *Type:* *[]*string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `WorkloadIdentityDetails`<sup>Required</sup> <a name="WorkloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.workloadIdentityDetails"></a>

```go
func WorkloadIdentityDetails() BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference">BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference</a>

---

##### `AuthorizerConfigurationInput`<sup>Optional</sup> <a name="AuthorizerConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerConfigurationInput"></a>

```go
func AuthorizerConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `AuthorizerTypeInput`<sup>Optional</sup> <a name="AuthorizerTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerTypeInput"></a>

```go
func AuthorizerTypeInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `ExceptionLevelInput`<sup>Optional</sup> <a name="ExceptionLevelInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevelInput"></a>

```go
func ExceptionLevelInput() *string
```

- *Type:* *string

---

##### `InterceptorConfigurationsInput`<sup>Optional</sup> <a name="InterceptorConfigurationsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.interceptorConfigurationsInput"></a>

```go
func InterceptorConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `PolicyEngineConfigurationInput`<sup>Optional</sup> <a name="PolicyEngineConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.policyEngineConfigurationInput"></a>

```go
func PolicyEngineConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolConfigurationInput`<sup>Optional</sup> <a name="ProtocolConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolConfigurationInput"></a>

```go
func ProtocolConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `ProtocolTypeInput`<sup>Optional</sup> <a name="ProtocolTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolTypeInput"></a>

```go
func ProtocolTypeInput() *string
```

- *Type:* *string

---

##### `RoleArnInput`<sup>Optional</sup> <a name="RoleArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArnInput"></a>

```go
func RoleArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizerType`<sup>Required</sup> <a name="AuthorizerType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.authorizerType"></a>

```go
func AuthorizerType() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `ExceptionLevel`<sup>Required</sup> <a name="ExceptionLevel" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.exceptionLevel"></a>

```go
func ExceptionLevel() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `ProtocolType`<sup>Required</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.protocolType"></a>

```go
func ProtocolType() *string
```

- *Type:* *string

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.roleArn"></a>

```go
func RoleArn() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGateway.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreGatewayAuthorizerConfiguration <a name="BedrockagentcoreGatewayAuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayAuthorizerConfiguration {
	CustomJwtAuthorizer: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#custom_jwt_authorizer BedrockagentcoreGateway#custom_jwt_authorizer}. |

---

##### `CustomJwtAuthorizer`<sup>Optional</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration.property.customJwtAuthorizer"></a>

```go
CustomJwtAuthorizer BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#custom_jwt_authorizer BedrockagentcoreGateway#custom_jwt_authorizer}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer {
	AllowedAudience: *[]*string,
	AllowedClients: *[]*string,
	AllowedScopes: *[]*string,
	CustomClaims: interface{},
	DiscoveryUrl: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience">AllowedAudience</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_scopes BedrockagentcoreGateway#allowed_scopes}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims">CustomClaims</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#custom_claims BedrockagentcoreGateway#custom_claims}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}. |

---

##### `AllowedAudience`<sup>Optional</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedAudience"></a>

```go
AllowedAudience *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_audience BedrockagentcoreGateway#allowed_audience}.

---

##### `AllowedClients`<sup>Optional</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedClients"></a>

```go
AllowedClients *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_clients BedrockagentcoreGateway#allowed_clients}.

---

##### `AllowedScopes`<sup>Optional</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.allowedScopes"></a>

```go
AllowedScopes *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#allowed_scopes BedrockagentcoreGateway#allowed_scopes}.

---

##### `CustomClaims`<sup>Optional</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.customClaims"></a>

```go
CustomClaims interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#custom_claims BedrockagentcoreGateway#custom_claims}.

---

##### `DiscoveryUrl`<sup>Optional</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer.property.discoveryUrl"></a>

```go
DiscoveryUrl *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#discovery_url BedrockagentcoreGateway#discovery_url}.

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims {
	AuthorizingClaimMatchValue: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue,
	InboundTokenClaimName: *string,
	InboundTokenClaimValueType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a></code> | The value or values in the custom claim to match and relationship of match. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>*string</code> | The name of the custom claim to validate. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>*string</code> | Token claim data type. |

---

##### `AuthorizingClaimMatchValue`<sup>Optional</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.authorizingClaimMatchValue"></a>

```go
AuthorizingClaimMatchValue BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

The value or values in the custom claim to match and relationship of match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizing_claim_match_value BedrockagentcoreGateway#authorizing_claim_match_value}

---

##### `InboundTokenClaimName`<sup>Optional</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimName"></a>

```go
InboundTokenClaimName *string
```

- *Type:* *string

The name of the custom claim to validate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_name BedrockagentcoreGateway#inbound_token_claim_name}

---

##### `InboundTokenClaimValueType`<sup>Optional</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaims.property.inboundTokenClaimValueType"></a>

```go
InboundTokenClaimValueType *string
```

- *Type:* *string

Token claim data type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#inbound_token_claim_value_type BedrockagentcoreGateway#inbound_token_claim_value_type}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue {
	ClaimMatchOperator: *string,
	ClaimMatchValue: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>*string</code> | The relationship between the claim field value and the value or values being matched. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a></code> | The value or values in the custom claim to match for. |

---

##### `ClaimMatchOperator`<sup>Optional</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchOperator"></a>

```go
ClaimMatchOperator *string
```

- *Type:* *string

The relationship between the claim field value and the value or values being matched.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#claim_match_operator BedrockagentcoreGateway#claim_match_operator}

---

##### `ClaimMatchValue`<sup>Optional</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue.property.claimMatchValue"></a>

```go
ClaimMatchValue BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

The value or values in the custom claim to match for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#claim_match_value BedrockagentcoreGateway#claim_match_value}

---

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue {
	MatchValueString: *string,
	MatchValueStringList: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString">MatchValueString</a></code> | <code>*string</code> | The string value to match for. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList">MatchValueStringList</a></code> | <code>*[]*string</code> | The list of strings to check for a match. |

---

##### `MatchValueString`<sup>Optional</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueString"></a>

```go
MatchValueString *string
```

- *Type:* *string

The string value to match for.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#match_value_string BedrockagentcoreGateway#match_value_string}

---

##### `MatchValueStringList`<sup>Optional</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue.property.matchValueStringList"></a>

```go
MatchValueStringList *[]*string
```

- *Type:* *[]*string

The list of strings to check for a match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#match_value_string_list BedrockagentcoreGateway#match_value_string_list}

---

### BedrockagentcoreGatewayConfig <a name="BedrockagentcoreGatewayConfig" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AuthorizerType: *string,
	Name: *string,
	RoleArn: *string,
	AuthorizerConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration,
	Description: *string,
	ExceptionLevel: *string,
	InterceptorConfigurations: interface{},
	KmsKeyArn: *string,
	PolicyEngineConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration,
	ProtocolConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration,
	ProtocolType: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerType">AuthorizerType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.name">Name</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.roleArn">RoleArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerConfiguration">AuthorizerConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizer_configuration BedrockagentcoreGateway#authorizer_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.exceptionLevel">ExceptionLevel</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.interceptorConfigurations">InterceptorConfigurations</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interceptor_configurations BedrockagentcoreGateway#interceptor_configurations}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.policyEngineConfiguration">PolicyEngineConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a></code> | The configuration for a policy engine associated with a gateway. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolConfiguration">ProtocolConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#protocol_configuration BedrockagentcoreGateway#protocol_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolType">ProtocolType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AuthorizerType`<sup>Required</sup> <a name="AuthorizerType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerType"></a>

```go
AuthorizerType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizer_type BedrockagentcoreGateway#authorizer_type}.

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#name BedrockagentcoreGateway#name}.

---

##### `RoleArn`<sup>Required</sup> <a name="RoleArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.roleArn"></a>

```go
RoleArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#role_arn BedrockagentcoreGateway#role_arn}.

---

##### `AuthorizerConfiguration`<sup>Optional</sup> <a name="AuthorizerConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.authorizerConfiguration"></a>

```go
AuthorizerConfiguration BedrockagentcoreGatewayAuthorizerConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfiguration">BedrockagentcoreGatewayAuthorizerConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#authorizer_configuration BedrockagentcoreGateway#authorizer_configuration}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#description BedrockagentcoreGateway#description}.

---

##### `ExceptionLevel`<sup>Optional</sup> <a name="ExceptionLevel" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.exceptionLevel"></a>

```go
ExceptionLevel *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#exception_level BedrockagentcoreGateway#exception_level}.

---

##### `InterceptorConfigurations`<sup>Optional</sup> <a name="InterceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.interceptorConfigurations"></a>

```go
InterceptorConfigurations interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interceptor_configurations BedrockagentcoreGateway#interceptor_configurations}.

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#kms_key_arn BedrockagentcoreGateway#kms_key_arn}.

---

##### `PolicyEngineConfiguration`<sup>Optional</sup> <a name="PolicyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.policyEngineConfiguration"></a>

```go
PolicyEngineConfiguration BedrockagentcoreGatewayPolicyEngineConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration">BedrockagentcoreGatewayPolicyEngineConfiguration</a>

The configuration for a policy engine associated with a gateway.

A policy engine is a collection of policies that evaluates and authorizes agent tool calls. When associated with a gateway, the policy engine intercepts all agent requests and determines whether to allow or deny each action based on the defined policies.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#policy_engine_configuration BedrockagentcoreGateway#policy_engine_configuration}

---

##### `ProtocolConfiguration`<sup>Optional</sup> <a name="ProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolConfiguration"></a>

```go
ProtocolConfiguration BedrockagentcoreGatewayProtocolConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration">BedrockagentcoreGatewayProtocolConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#protocol_configuration BedrockagentcoreGateway#protocol_configuration}.

---

##### `ProtocolType`<sup>Optional</sup> <a name="ProtocolType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.protocolType"></a>

```go
ProtocolType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#protocol_type BedrockagentcoreGateway#protocol_type}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#tags BedrockagentcoreGateway#tags}.

---

### BedrockagentcoreGatewayInterceptorConfigurations <a name="BedrockagentcoreGatewayInterceptorConfigurations" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayInterceptorConfigurations {
	InputConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration,
	InterceptionPoints: *[]*string,
	Interceptor: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.inputConfiguration">InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#input_configuration BedrockagentcoreGateway#input_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.interceptionPoints">InterceptionPoints</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interception_points BedrockagentcoreGateway#interception_points}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.interceptor">Interceptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interceptor BedrockagentcoreGateway#interceptor}. |

---

##### `InputConfiguration`<sup>Optional</sup> <a name="InputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.inputConfiguration"></a>

```go
InputConfiguration BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#input_configuration BedrockagentcoreGateway#input_configuration}.

---

##### `InterceptionPoints`<sup>Optional</sup> <a name="InterceptionPoints" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.interceptionPoints"></a>

```go
InterceptionPoints *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interception_points BedrockagentcoreGateway#interception_points}.

---

##### `Interceptor`<sup>Optional</sup> <a name="Interceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurations.property.interceptor"></a>

```go
Interceptor BedrockagentcoreGatewayInterceptorConfigurationsInterceptor
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#interceptor BedrockagentcoreGateway#interceptor}.

---

### BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration <a name="BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration {
	PassRequestHeaders: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration.property.passRequestHeaders">PassRequestHeaders</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#pass_request_headers BedrockagentcoreGateway#pass_request_headers}. |

---

##### `PassRequestHeaders`<sup>Optional</sup> <a name="PassRequestHeaders" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration.property.passRequestHeaders"></a>

```go
PassRequestHeaders interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#pass_request_headers BedrockagentcoreGateway#pass_request_headers}.

---

### BedrockagentcoreGatewayInterceptorConfigurationsInterceptor <a name="BedrockagentcoreGatewayInterceptorConfigurationsInterceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor {
	Lambda: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#lambda BedrockagentcoreGateway#lambda}. |

---

##### `Lambda`<sup>Optional</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor.property.lambda"></a>

```go
Lambda BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#lambda BedrockagentcoreGateway#lambda}.

---

### BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda <a name="BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda {
	Arn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda.property.arn">Arn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}.

---

### BedrockagentcoreGatewayPolicyEngineConfiguration <a name="BedrockagentcoreGatewayPolicyEngineConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayPolicyEngineConfiguration {
	Arn: *string,
	Mode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.arn">Arn</a></code> | <code>*string</code> | The ARN of the policy engine. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.mode">Mode</a></code> | <code>*string</code> | The enforcement mode for the policy engine. |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The ARN of the policy engine.

The policy engine contains Cedar policies that define fine-grained authorization rules specifying who can perform what actions on which resources as agents interact through the gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#arn BedrockagentcoreGateway#arn}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfiguration.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The enforcement mode for the policy engine.

LOG_ONLY - The policy engine evaluates each action against your policies and adds traces on whether tool calls would be allowed or denied, but does not enforce the decision. Use this mode to test and validate policies before enabling enforcement. ENFORCE - The policy engine evaluates actions against your policies and enforces decisions by allowing or denying agent operations. Test and validate policies in LOG_ONLY mode before enabling enforcement to avoid unintended denials or adversely affecting production traffic.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#mode BedrockagentcoreGateway#mode}

---

### BedrockagentcoreGatewayProtocolConfiguration <a name="BedrockagentcoreGatewayProtocolConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayProtocolConfiguration {
	Mcp: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#mcp BedrockagentcoreGateway#mcp}. |

---

##### `Mcp`<sup>Optional</sup> <a name="Mcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfiguration.property.mcp"></a>

```go
Mcp BedrockagentcoreGatewayProtocolConfigurationMcp
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#mcp BedrockagentcoreGateway#mcp}.

---

### BedrockagentcoreGatewayProtocolConfigurationMcp <a name="BedrockagentcoreGatewayProtocolConfigurationMcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayProtocolConfigurationMcp {
	Instructions: *string,
	SearchType: *string,
	SessionConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration,
	StreamingConfiguration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration,
	SupportedVersions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.instructions">Instructions</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.searchType">SearchType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.sessionConfiguration">SessionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#session_configuration BedrockagentcoreGateway#session_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.streamingConfiguration">StreamingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#streaming_configuration BedrockagentcoreGateway#streaming_configuration}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.supportedVersions">SupportedVersions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}. |

---

##### `Instructions`<sup>Optional</sup> <a name="Instructions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.instructions"></a>

```go
Instructions *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#instructions BedrockagentcoreGateway#instructions}.

---

##### `SearchType`<sup>Optional</sup> <a name="SearchType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.searchType"></a>

```go
SearchType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#search_type BedrockagentcoreGateway#search_type}.

---

##### `SessionConfiguration`<sup>Optional</sup> <a name="SessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.sessionConfiguration"></a>

```go
SessionConfiguration BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#session_configuration BedrockagentcoreGateway#session_configuration}.

---

##### `StreamingConfiguration`<sup>Optional</sup> <a name="StreamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.streamingConfiguration"></a>

```go
StreamingConfiguration BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#streaming_configuration BedrockagentcoreGateway#streaming_configuration}.

---

##### `SupportedVersions`<sup>Optional</sup> <a name="SupportedVersions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp.property.supportedVersions"></a>

```go
SupportedVersions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#supported_versions BedrockagentcoreGateway#supported_versions}.

---

### BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration <a name="BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration {
	SessionTimeoutInSeconds: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration.property.sessionTimeoutInSeconds">SessionTimeoutInSeconds</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#session_timeout_in_seconds BedrockagentcoreGateway#session_timeout_in_seconds}. |

---

##### `SessionTimeoutInSeconds`<sup>Optional</sup> <a name="SessionTimeoutInSeconds" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration.property.sessionTimeoutInSeconds"></a>

```go
SessionTimeoutInSeconds *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#session_timeout_in_seconds BedrockagentcoreGateway#session_timeout_in_seconds}.

---

### BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration <a name="BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration {
	EnableResponseStreaming: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration.property.enableResponseStreaming">EnableResponseStreaming</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#enable_response_streaming BedrockagentcoreGateway#enable_response_streaming}. |

---

##### `EnableResponseStreaming`<sup>Optional</sup> <a name="EnableResponseStreaming" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration.property.enableResponseStreaming"></a>

```go
EnableResponseStreaming interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/bedrockagentcore_gateway#enable_response_streaming BedrockagentcoreGateway#enable_response_streaming}.

---

### BedrockagentcoreGatewayWorkloadIdentityDetails <a name="BedrockagentcoreGatewayWorkloadIdentityDetails" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

&bedrockagentcoregateway.BedrockagentcoreGatewayWorkloadIdentityDetails {

}
```


## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString">ResetMatchValueString</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList">ResetMatchValueStringList</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMatchValueString` <a name="ResetMatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueString"></a>

```go
func ResetMatchValueString()
```

##### `ResetMatchValueStringList` <a name="ResetMatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.resetMatchValueStringList"></a>

```go
func ResetMatchValueStringList()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput">MatchValueStringInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput">MatchValueStringListInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString">MatchValueString</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList">MatchValueStringList</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MatchValueStringInput`<sup>Optional</sup> <a name="MatchValueStringInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringInput"></a>

```go
func MatchValueStringInput() *string
```

- *Type:* *string

---

##### `MatchValueStringListInput`<sup>Optional</sup> <a name="MatchValueStringListInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringListInput"></a>

```go
func MatchValueStringListInput() *[]*string
```

- *Type:* *[]*string

---

##### `MatchValueString`<sup>Required</sup> <a name="MatchValueString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueString"></a>

```go
func MatchValueString() *string
```

- *Type:* *string

---

##### `MatchValueStringList`<sup>Required</sup> <a name="MatchValueStringList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.matchValueStringList"></a>

```go
func MatchValueStringList() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue">PutClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator">ResetClaimMatchOperator</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue">ResetClaimMatchValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutClaimMatchValue` <a name="PutClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue"></a>

```go
func PutClaimMatchValue(value BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.putClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValue</a>

---

##### `ResetClaimMatchOperator` <a name="ResetClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchOperator"></a>

```go
func ResetClaimMatchOperator()
```

##### `ResetClaimMatchValue` <a name="ResetClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.resetClaimMatchValue"></a>

```go
func ResetClaimMatchValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue">ClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput">ClaimMatchOperatorInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput">ClaimMatchValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator">ClaimMatchOperator</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ClaimMatchValue`<sup>Required</sup> <a name="ClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValue"></a>

```go
func ClaimMatchValue() BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueClaimMatchValueOutputReference</a>

---

##### `ClaimMatchOperatorInput`<sup>Optional</sup> <a name="ClaimMatchOperatorInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperatorInput"></a>

```go
func ClaimMatchOperatorInput() *string
```

- *Type:* *string

---

##### `ClaimMatchValueInput`<sup>Optional</sup> <a name="ClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchValueInput"></a>

```go
func ClaimMatchValueInput() interface{}
```

- *Type:* interface{}

---

##### `ClaimMatchOperator`<sup>Required</sup> <a name="ClaimMatchOperator" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.claimMatchOperator"></a>

```go
func ClaimMatchOperator() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue">PutAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue">ResetAuthorizingClaimMatchValue</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName">ResetInboundTokenClaimName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType">ResetInboundTokenClaimValueType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthorizingClaimMatchValue` <a name="PutAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue"></a>

```go
func PutAuthorizingClaimMatchValue(value BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.putAuthorizingClaimMatchValue.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValue</a>

---

##### `ResetAuthorizingClaimMatchValue` <a name="ResetAuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetAuthorizingClaimMatchValue"></a>

```go
func ResetAuthorizingClaimMatchValue()
```

##### `ResetInboundTokenClaimName` <a name="ResetInboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimName"></a>

```go
func ResetInboundTokenClaimName()
```

##### `ResetInboundTokenClaimValueType` <a name="ResetInboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.resetInboundTokenClaimValueType"></a>

```go
func ResetInboundTokenClaimValueType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue">AuthorizingClaimMatchValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput">AuthorizingClaimMatchValueInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput">InboundTokenClaimNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput">InboundTokenClaimValueTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName">InboundTokenClaimName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType">InboundTokenClaimValueType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizingClaimMatchValue`<sup>Required</sup> <a name="AuthorizingClaimMatchValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValue"></a>

```go
func AuthorizingClaimMatchValue() BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsAuthorizingClaimMatchValueOutputReference</a>

---

##### `AuthorizingClaimMatchValueInput`<sup>Optional</sup> <a name="AuthorizingClaimMatchValueInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.authorizingClaimMatchValueInput"></a>

```go
func AuthorizingClaimMatchValueInput() interface{}
```

- *Type:* interface{}

---

##### `InboundTokenClaimNameInput`<sup>Optional</sup> <a name="InboundTokenClaimNameInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimNameInput"></a>

```go
func InboundTokenClaimNameInput() *string
```

- *Type:* *string

---

##### `InboundTokenClaimValueTypeInput`<sup>Optional</sup> <a name="InboundTokenClaimValueTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueTypeInput"></a>

```go
func InboundTokenClaimValueTypeInput() *string
```

- *Type:* *string

---

##### `InboundTokenClaimName`<sup>Required</sup> <a name="InboundTokenClaimName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimName"></a>

```go
func InboundTokenClaimName() *string
```

- *Type:* *string

---

##### `InboundTokenClaimValueType`<sup>Required</sup> <a name="InboundTokenClaimValueType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.inboundTokenClaimValueType"></a>

```go
func InboundTokenClaimValueType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims">PutCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience">ResetAllowedAudience</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients">ResetAllowedClients</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes">ResetAllowedScopes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims">ResetCustomClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl">ResetDiscoveryUrl</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomClaims` <a name="PutCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims"></a>

```go
func PutCustomClaims(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.putCustomClaims.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllowedAudience` <a name="ResetAllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedAudience"></a>

```go
func ResetAllowedAudience()
```

##### `ResetAllowedClients` <a name="ResetAllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedClients"></a>

```go
func ResetAllowedClients()
```

##### `ResetAllowedScopes` <a name="ResetAllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetAllowedScopes"></a>

```go
func ResetAllowedScopes()
```

##### `ResetCustomClaims` <a name="ResetCustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetCustomClaims"></a>

```go
func ResetCustomClaims()
```

##### `ResetDiscoveryUrl` <a name="ResetDiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.resetDiscoveryUrl"></a>

```go
func ResetDiscoveryUrl()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims">CustomClaims</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput">AllowedAudienceInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput">AllowedClientsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput">AllowedScopesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput">CustomClaimsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput">DiscoveryUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience">AllowedAudience</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients">AllowedClients</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes">AllowedScopes</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl">DiscoveryUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomClaims`<sup>Required</sup> <a name="CustomClaims" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaims"></a>

```go
func CustomClaims() BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerCustomClaimsList</a>

---

##### `AllowedAudienceInput`<sup>Optional</sup> <a name="AllowedAudienceInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudienceInput"></a>

```go
func AllowedAudienceInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClientsInput`<sup>Optional</sup> <a name="AllowedClientsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClientsInput"></a>

```go
func AllowedClientsInput() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedScopesInput`<sup>Optional</sup> <a name="AllowedScopesInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopesInput"></a>

```go
func AllowedScopesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomClaimsInput`<sup>Optional</sup> <a name="CustomClaimsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.customClaimsInput"></a>

```go
func CustomClaimsInput() interface{}
```

- *Type:* interface{}

---

##### `DiscoveryUrlInput`<sup>Optional</sup> <a name="DiscoveryUrlInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrlInput"></a>

```go
func DiscoveryUrlInput() *string
```

- *Type:* *string

---

##### `AllowedAudience`<sup>Required</sup> <a name="AllowedAudience" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedAudience"></a>

```go
func AllowedAudience() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedClients`<sup>Required</sup> <a name="AllowedClients" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedClients"></a>

```go
func AllowedClients() *[]*string
```

- *Type:* *[]*string

---

##### `AllowedScopes`<sup>Required</sup> <a name="AllowedScopes" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.allowedScopes"></a>

```go
func AllowedScopes() *[]*string
```

- *Type:* *[]*string

---

##### `DiscoveryUrl`<sup>Required</sup> <a name="DiscoveryUrl" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.discoveryUrl"></a>

```go
func DiscoveryUrl() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayAuthorizerConfigurationOutputReference <a name="BedrockagentcoreGatewayAuthorizerConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayAuthorizerConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayAuthorizerConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer">PutCustomJwtAuthorizer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer">ResetCustomJwtAuthorizer</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutCustomJwtAuthorizer` <a name="PutCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer"></a>

```go
func PutCustomJwtAuthorizer(value BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.putCustomJwtAuthorizer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizer</a>

---

##### `ResetCustomJwtAuthorizer` <a name="ResetCustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.resetCustomJwtAuthorizer"></a>

```go
func ResetCustomJwtAuthorizer()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizer">CustomJwtAuthorizer</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput">CustomJwtAuthorizerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomJwtAuthorizer`<sup>Required</sup> <a name="CustomJwtAuthorizer" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizer"></a>

```go
func CustomJwtAuthorizer() BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference">BedrockagentcoreGatewayAuthorizerConfigurationCustomJwtAuthorizerOutputReference</a>

---

##### `CustomJwtAuthorizerInput`<sup>Optional</sup> <a name="CustomJwtAuthorizerInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.customJwtAuthorizerInput"></a>

```go
func CustomJwtAuthorizerInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayAuthorizerConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resetPassRequestHeaders">ResetPassRequestHeaders</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPassRequestHeaders` <a name="ResetPassRequestHeaders" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.resetPassRequestHeaders"></a>

```go
func ResetPassRequestHeaders()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.passRequestHeadersInput">PassRequestHeadersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.passRequestHeaders">PassRequestHeaders</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PassRequestHeadersInput`<sup>Optional</sup> <a name="PassRequestHeadersInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.passRequestHeadersInput"></a>

```go
func PassRequestHeadersInput() interface{}
```

- *Type:* interface{}

---

##### `PassRequestHeaders`<sup>Required</sup> <a name="PassRequestHeaders" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.passRequestHeaders"></a>

```go
func PassRequestHeaders() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resetArn">ResetArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.resetArn"></a>

```go
func ResetArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.putLambda">PutLambda</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resetLambda">ResetLambda</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutLambda` <a name="PutLambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.putLambda"></a>

```go
func PutLambda(value BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.putLambda.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambda</a>

---

##### `ResetLambda` <a name="ResetLambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.resetLambda"></a>

```go
func ResetLambda()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.lambda">Lambda</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.lambdaInput">LambdaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Lambda`<sup>Required</sup> <a name="Lambda" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.lambda"></a>

```go
func Lambda() BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorLambdaOutputReference</a>

---

##### `LambdaInput`<sup>Optional</sup> <a name="LambdaInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.lambdaInput"></a>

```go
func LambdaInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayInterceptorConfigurationsList <a name="BedrockagentcoreGatewayInterceptorConfigurationsList" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayInterceptorConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreGatewayInterceptorConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreGatewayInterceptorConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayInterceptorConfigurationsOutputReference <a name="BedrockagentcoreGatewayInterceptorConfigurationsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayInterceptorConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreGatewayInterceptorConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInputConfiguration">PutInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInterceptor">PutInterceptor</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInputConfiguration">ResetInputConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInterceptionPoints">ResetInterceptionPoints</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInterceptor">ResetInterceptor</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutInputConfiguration` <a name="PutInputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInputConfiguration"></a>

```go
func PutInputConfiguration(value BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInputConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration">BedrockagentcoreGatewayInterceptorConfigurationsInputConfiguration</a>

---

##### `PutInterceptor` <a name="PutInterceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInterceptor"></a>

```go
func PutInterceptor(value BedrockagentcoreGatewayInterceptorConfigurationsInterceptor)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.putInterceptor.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptor">BedrockagentcoreGatewayInterceptorConfigurationsInterceptor</a>

---

##### `ResetInputConfiguration` <a name="ResetInputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInputConfiguration"></a>

```go
func ResetInputConfiguration()
```

##### `ResetInterceptionPoints` <a name="ResetInterceptionPoints" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInterceptionPoints"></a>

```go
func ResetInterceptionPoints()
```

##### `ResetInterceptor` <a name="ResetInterceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.resetInterceptor"></a>

```go
func ResetInterceptor()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.inputConfiguration">InputConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptor">Interceptor</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.inputConfigurationInput">InputConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptionPointsInput">InterceptionPointsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptorInput">InterceptorInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptionPoints">InterceptionPoints</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InputConfiguration`<sup>Required</sup> <a name="InputConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.inputConfiguration"></a>

```go
func InputConfiguration() BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInputConfigurationOutputReference</a>

---

##### `Interceptor`<sup>Required</sup> <a name="Interceptor" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptor"></a>

```go
func Interceptor() BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference">BedrockagentcoreGatewayInterceptorConfigurationsInterceptorOutputReference</a>

---

##### `InputConfigurationInput`<sup>Optional</sup> <a name="InputConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.inputConfigurationInput"></a>

```go
func InputConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `InterceptionPointsInput`<sup>Optional</sup> <a name="InterceptionPointsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptionPointsInput"></a>

```go
func InterceptionPointsInput() *[]*string
```

- *Type:* *[]*string

---

##### `InterceptorInput`<sup>Optional</sup> <a name="InterceptorInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptorInput"></a>

```go
func InterceptorInput() interface{}
```

- *Type:* interface{}

---

##### `InterceptionPoints`<sup>Required</sup> <a name="InterceptionPoints" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.interceptionPoints"></a>

```go
func InterceptionPoints() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayInterceptorConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference <a name="BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayPolicyEngineConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resetMode">ResetMode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.resetMode"></a>

```go
func ResetMode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayPolicyEngineConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayProtocolConfigurationMcpOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putSessionConfiguration">PutSessionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putStreamingConfiguration">PutStreamingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetInstructions">ResetInstructions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSearchType">ResetSearchType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSessionConfiguration">ResetSessionConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetStreamingConfiguration">ResetStreamingConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSupportedVersions">ResetSupportedVersions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutSessionConfiguration` <a name="PutSessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putSessionConfiguration"></a>

```go
func PutSessionConfiguration(value BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putSessionConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfiguration</a>

---

##### `PutStreamingConfiguration` <a name="PutStreamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putStreamingConfiguration"></a>

```go
func PutStreamingConfiguration(value BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.putStreamingConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfiguration</a>

---

##### `ResetInstructions` <a name="ResetInstructions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetInstructions"></a>

```go
func ResetInstructions()
```

##### `ResetSearchType` <a name="ResetSearchType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSearchType"></a>

```go
func ResetSearchType()
```

##### `ResetSessionConfiguration` <a name="ResetSessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSessionConfiguration"></a>

```go
func ResetSessionConfiguration()
```

##### `ResetStreamingConfiguration` <a name="ResetStreamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetStreamingConfiguration"></a>

```go
func ResetStreamingConfiguration()
```

##### `ResetSupportedVersions` <a name="ResetSupportedVersions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.resetSupportedVersions"></a>

```go
func ResetSupportedVersions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfiguration">SessionConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfiguration">StreamingConfiguration</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructionsInput">InstructionsInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchTypeInput">SearchTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfigurationInput">SessionConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfigurationInput">StreamingConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersionsInput">SupportedVersionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructions">Instructions</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchType">SearchType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersions">SupportedVersions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionConfiguration`<sup>Required</sup> <a name="SessionConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfiguration"></a>

```go
func SessionConfiguration() BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference</a>

---

##### `StreamingConfiguration`<sup>Required</sup> <a name="StreamingConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfiguration"></a>

```go
func StreamingConfiguration() BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference</a>

---

##### `InstructionsInput`<sup>Optional</sup> <a name="InstructionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructionsInput"></a>

```go
func InstructionsInput() *string
```

- *Type:* *string

---

##### `SearchTypeInput`<sup>Optional</sup> <a name="SearchTypeInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchTypeInput"></a>

```go
func SearchTypeInput() *string
```

- *Type:* *string

---

##### `SessionConfigurationInput`<sup>Optional</sup> <a name="SessionConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.sessionConfigurationInput"></a>

```go
func SessionConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `StreamingConfigurationInput`<sup>Optional</sup> <a name="StreamingConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.streamingConfigurationInput"></a>

```go
func StreamingConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `SupportedVersionsInput`<sup>Optional</sup> <a name="SupportedVersionsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersionsInput"></a>

```go
func SupportedVersionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Instructions`<sup>Required</sup> <a name="Instructions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.instructions"></a>

```go
func Instructions() *string
```

- *Type:* *string

---

##### `SearchType`<sup>Required</sup> <a name="SearchType" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.searchType"></a>

```go
func SearchType() *string
```

- *Type:* *string

---

##### `SupportedVersions`<sup>Required</sup> <a name="SupportedVersions" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.supportedVersions"></a>

```go
func SupportedVersions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resetSessionTimeoutInSeconds">ResetSessionTimeoutInSeconds</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSessionTimeoutInSeconds` <a name="ResetSessionTimeoutInSeconds" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.resetSessionTimeoutInSeconds"></a>

```go
func ResetSessionTimeoutInSeconds()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSecondsInput">SessionTimeoutInSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSeconds">SessionTimeoutInSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SessionTimeoutInSecondsInput`<sup>Optional</sup> <a name="SessionTimeoutInSecondsInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSecondsInput"></a>

```go
func SessionTimeoutInSecondsInput() *f64
```

- *Type:* *f64

---

##### `SessionTimeoutInSeconds`<sup>Required</sup> <a name="SessionTimeoutInSeconds" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.sessionTimeoutInSeconds"></a>

```go
func SessionTimeoutInSeconds() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpSessionConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resetEnableResponseStreaming">ResetEnableResponseStreaming</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableResponseStreaming` <a name="ResetEnableResponseStreaming" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.resetEnableResponseStreaming"></a>

```go
func ResetEnableResponseStreaming()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreamingInput">EnableResponseStreamingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreaming">EnableResponseStreaming</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableResponseStreamingInput`<sup>Optional</sup> <a name="EnableResponseStreamingInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreamingInput"></a>

```go
func EnableResponseStreamingInput() interface{}
```

- *Type:* interface{}

---

##### `EnableResponseStreaming`<sup>Required</sup> <a name="EnableResponseStreaming" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.enableResponseStreaming"></a>

```go
func EnableResponseStreaming() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpStreamingConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayProtocolConfigurationOutputReference <a name="BedrockagentcoreGatewayProtocolConfigurationOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayProtocolConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayProtocolConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp">PutMcp</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resetMcp">ResetMcp</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutMcp` <a name="PutMcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp"></a>

```go
func PutMcp(value BedrockagentcoreGatewayProtocolConfigurationMcp)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.putMcp.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcp">BedrockagentcoreGatewayProtocolConfigurationMcp</a>

---

##### `ResetMcp` <a name="ResetMcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.resetMcp"></a>

```go
func ResetMcp()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcp">Mcp</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcpInput">McpInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Mcp`<sup>Required</sup> <a name="Mcp" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcp"></a>

```go
func Mcp() BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference">BedrockagentcoreGatewayProtocolConfigurationMcpOutputReference</a>

---

##### `McpInput`<sup>Optional</sup> <a name="McpInput" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.mcpInput"></a>

```go
func McpInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayProtocolConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference <a name="BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoregateway"

bedrockagentcoregateway.NewBedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn">WorkloadIdentityArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails">BedrockagentcoreGatewayWorkloadIdentityDetails</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `WorkloadIdentityArn`<sup>Required</sup> <a name="WorkloadIdentityArn" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.workloadIdentityArn"></a>

```go
func WorkloadIdentityArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetailsOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcoreGatewayWorkloadIdentityDetails
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreGateway.BedrockagentcoreGatewayWorkloadIdentityDetails">BedrockagentcoreGatewayWorkloadIdentityDetails</a>

---



