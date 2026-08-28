# `elasticloadbalancingv2Listener` Submodule <a name="`elasticloadbalancingv2Listener` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2Listener <a name="Elasticloadbalancingv2Listener" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener awscc_elasticloadbalancingv2_listener}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2Listener(scope Construct, id *string, config Elasticloadbalancingv2ListenerConfig) Elasticloadbalancingv2Listener
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig">Elasticloadbalancingv2ListenerConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig">Elasticloadbalancingv2ListenerConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates">PutCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions">PutDefaultActions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes">PutListenerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication">PutMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetAlpnPolicy">ResetAlpnPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetCertificates">ResetCertificates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetListenerAttributes">ResetListenerAttributes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetMutualAuthentication">ResetMutualAuthentication</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetSslPolicy">ResetSslPolicy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutCertificates` <a name="PutCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates"></a>

```go
func PutCertificates(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putCertificates.parameter.value"></a>

- *Type:* interface{}

---

##### `PutDefaultActions` <a name="PutDefaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions"></a>

```go
func PutDefaultActions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putDefaultActions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutListenerAttributes` <a name="PutListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes"></a>

```go
func PutListenerAttributes(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putListenerAttributes.parameter.value"></a>

- *Type:* interface{}

---

##### `PutMutualAuthentication` <a name="PutMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication"></a>

```go
func PutMutualAuthentication(value Elasticloadbalancingv2ListenerMutualAuthentication)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putMutualAuthentication.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAlpnPolicy` <a name="ResetAlpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetAlpnPolicy"></a>

```go
func ResetAlpnPolicy()
```

##### `ResetCertificates` <a name="ResetCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetCertificates"></a>

```go
func ResetCertificates()
```

##### `ResetListenerAttributes` <a name="ResetListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetListenerAttributes"></a>

```go
func ResetListenerAttributes()
```

##### `ResetMutualAuthentication` <a name="ResetMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetMutualAuthentication"></a>

```go
func ResetMutualAuthentication()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetSslPolicy` <a name="ResetSslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetSslPolicy"></a>

```go
func ResetSslPolicy()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.Elasticloadbalancingv2Listener_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.Elasticloadbalancingv2Listener_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.Elasticloadbalancingv2Listener_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.Elasticloadbalancingv2Listener_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Elasticloadbalancingv2Listener resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Elasticloadbalancingv2Listener to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Elasticloadbalancingv2Listener that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2Listener to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificates">Certificates</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList">Elasticloadbalancingv2ListenerCertificatesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActions">DefaultActions</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList">Elasticloadbalancingv2ListenerDefaultActionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerArn">ListenerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributes">ListenerAttributes</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList">Elasticloadbalancingv2ListenerListenerAttributesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference">Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList">Elasticloadbalancingv2ListenerTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicyInput">AlpnPolicyInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificatesInput">CertificatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActionsInput">DefaultActionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributesInput">ListenerAttributesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArnInput">LoadBalancerArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthenticationInput">MutualAuthenticationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.portInput">PortInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicyInput">SslPolicyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicy">AlpnPolicy</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.port">Port</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Certificates`<sup>Required</sup> <a name="Certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificates"></a>

```go
func Certificates() Elasticloadbalancingv2ListenerCertificatesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList">Elasticloadbalancingv2ListenerCertificatesList</a>

---

##### `DefaultActions`<sup>Required</sup> <a name="DefaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActions"></a>

```go
func DefaultActions() Elasticloadbalancingv2ListenerDefaultActionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList">Elasticloadbalancingv2ListenerDefaultActionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ListenerArn`<sup>Required</sup> <a name="ListenerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerArn"></a>

```go
func ListenerArn() *string
```

- *Type:* *string

---

##### `ListenerAttributes`<sup>Required</sup> <a name="ListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributes"></a>

```go
func ListenerAttributes() Elasticloadbalancingv2ListenerListenerAttributesList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList">Elasticloadbalancingv2ListenerListenerAttributesList</a>

---

##### `MutualAuthentication`<sup>Required</sup> <a name="MutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthentication"></a>

```go
func MutualAuthentication() Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference">Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tags"></a>

```go
func Tags() Elasticloadbalancingv2ListenerTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList">Elasticloadbalancingv2ListenerTagsList</a>

---

##### `AlpnPolicyInput`<sup>Optional</sup> <a name="AlpnPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicyInput"></a>

```go
func AlpnPolicyInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificatesInput`<sup>Optional</sup> <a name="CertificatesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.certificatesInput"></a>

```go
func CertificatesInput() interface{}
```

- *Type:* interface{}

---

##### `DefaultActionsInput`<sup>Optional</sup> <a name="DefaultActionsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.defaultActionsInput"></a>

```go
func DefaultActionsInput() interface{}
```

- *Type:* interface{}

---

##### `ListenerAttributesInput`<sup>Optional</sup> <a name="ListenerAttributesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.listenerAttributesInput"></a>

```go
func ListenerAttributesInput() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancerArnInput`<sup>Optional</sup> <a name="LoadBalancerArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArnInput"></a>

```go
func LoadBalancerArnInput() *string
```

- *Type:* *string

---

##### `MutualAuthenticationInput`<sup>Optional</sup> <a name="MutualAuthenticationInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.mutualAuthenticationInput"></a>

```go
func MutualAuthenticationInput() interface{}
```

- *Type:* interface{}

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.portInput"></a>

```go
func PortInput() *f64
```

- *Type:* *f64

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `SslPolicyInput`<sup>Optional</sup> <a name="SslPolicyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicyInput"></a>

```go
func SslPolicyInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AlpnPolicy`<sup>Required</sup> <a name="AlpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.alpnPolicy"></a>

```go
func AlpnPolicy() *[]*string
```

- *Type:* *[]*string

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.loadBalancerArn"></a>

```go
func LoadBalancerArn() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.port"></a>

```go
func Port() *f64
```

- *Type:* *f64

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `SslPolicy`<sup>Required</sup> <a name="SslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.sslPolicy"></a>

```go
func SslPolicy() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2Listener.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2ListenerCertificates <a name="Elasticloadbalancingv2ListenerCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerCertificates {
	CertificateArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the certificate. |

---

##### `CertificateArn`<sup>Optional</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificates.property.certificateArn"></a>

```go
CertificateArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#certificate_arn Elasticloadbalancingv2Listener#certificate_arn}

---

### Elasticloadbalancingv2ListenerConfig <a name="Elasticloadbalancingv2ListenerConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultActions: interface{},
	LoadBalancerArn: *string,
	AlpnPolicy: *[]*string,
	Certificates: interface{},
	ListenerAttributes: interface{},
	MutualAuthentication: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication,
	Port: *f64,
	Protocol: *string,
	SslPolicy: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.defaultActions">DefaultActions</a></code> | <code>interface{}</code> | The actions for the default rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.loadBalancerArn">LoadBalancerArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.alpnPolicy">AlpnPolicy</a></code> | <code>*[]*string</code> | [TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.certificates">Certificates</a></code> | <code>interface{}</code> | The default SSL server certificate for a secure listener. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.listenerAttributes">ListenerAttributes</a></code> | <code>interface{}</code> | The listener attributes. Attributes that you do not modify retain their current values. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.mutualAuthentication">MutualAuthentication</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a></code> | The mutual authentication configuration information. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.port">Port</a></code> | <code>*f64</code> | The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol for connections from clients to the load balancer. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.sslPolicy">SslPolicy</a></code> | <code>*string</code> | [HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultActions`<sup>Required</sup> <a name="DefaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.defaultActions"></a>

```go
DefaultActions interface{}
```

- *Type:* interface{}

The actions for the default rule.

You cannot define a condition for a default rule.
To create additional rules for an Application Load Balancer, use [AWS::ElasticLoadBalancingV2::ListenerRule](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenerrule.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#default_actions Elasticloadbalancingv2Listener#default_actions}

---

##### `LoadBalancerArn`<sup>Required</sup> <a name="LoadBalancerArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.loadBalancerArn"></a>

```go
LoadBalancerArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#load_balancer_arn Elasticloadbalancingv2Listener#load_balancer_arn}

---

##### `AlpnPolicy`<sup>Optional</sup> <a name="AlpnPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.alpnPolicy"></a>

```go
AlpnPolicy *[]*string
```

- *Type:* *[]*string

[TLS listener] The name of the Application-Layer Protocol Negotiation (ALPN) policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#alpn_policy Elasticloadbalancingv2Listener#alpn_policy}

---

##### `Certificates`<sup>Optional</sup> <a name="Certificates" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.certificates"></a>

```go
Certificates interface{}
```

- *Type:* interface{}

The default SSL server certificate for a secure listener.

You must provide exactly one certificate if the listener protocol is HTTPS or TLS.
For an HTTPS listener, update requires some interruptions. For a TLS listener, update requires no interruption.
To create a certificate list for a secure listener, use [AWS::ElasticLoadBalancingV2::ListenerCertificate](https://docs.aws.amazon.com/AWSCloudFormation/latest/UserGuide/aws-resource-elasticloadbalancingv2-listenercertificate.html).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#certificates Elasticloadbalancingv2Listener#certificates}

---

##### `ListenerAttributes`<sup>Optional</sup> <a name="ListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.listenerAttributes"></a>

```go
ListenerAttributes interface{}
```

- *Type:* interface{}

The listener attributes. Attributes that you do not modify retain their current values.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#listener_attributes Elasticloadbalancingv2Listener#listener_attributes}

---

##### `MutualAuthentication`<sup>Optional</sup> <a name="MutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.mutualAuthentication"></a>

```go
MutualAuthentication Elasticloadbalancingv2ListenerMutualAuthentication
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication">Elasticloadbalancingv2ListenerMutualAuthentication</a>

The mutual authentication configuration information.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#mutual_authentication Elasticloadbalancingv2Listener#mutual_authentication}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.port"></a>

```go
Port *f64
```

- *Type:* *f64

The port on which the load balancer is listening. You can't specify a port for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol for connections from clients to the load balancer.

For Application Load Balancers, the supported protocols are HTTP and HTTPS. For Network Load Balancers, the supported protocols are TCP, TLS, UDP, TCP_UDP, QUIC, and TCP_QUIC. You can’t specify the UDP, TCP_UDP, QUIC, or TCP_QUIC protocol if dual-stack mode is enabled. You can't specify a protocol for a Gateway Load Balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `SslPolicy`<sup>Optional</sup> <a name="SslPolicy" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.sslPolicy"></a>

```go
SslPolicy *string
```

- *Type:* *string

[HTTPS and TLS listeners] The security policy that defines which protocols and ciphers are supported.

For more information, see [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/application/describe-ssl-policies.html) in the *Application Load Balancers Guide* and [Security policies](https://docs.aws.amazon.com/elasticloadbalancing/latest/network/describe-ssl-policies.html) in the *Network Load Balancers Guide*.
[HTTPS listeners] Updating the security policy can result in interruptions if the load balancer is handling a high volume of traffic. To decrease the possibility of an interruption if your load balancer is handling a high volume of traffic, create an additional load balancer or request an LCU reservation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#ssl_policy Elasticloadbalancingv2Listener#ssl_policy}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#tags Elasticloadbalancingv2Listener#tags}.

---

### Elasticloadbalancingv2ListenerDefaultActions <a name="Elasticloadbalancingv2ListenerDefaultActions" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActions {
	Type: *string,
	AuthenticateCognitoConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig,
	AuthenticateOidcConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig,
	FixedResponseConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig,
	ForwardConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig,
	JwtValidationConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig,
	Order: *f64,
	RedirectConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig,
	TargetGroupArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.type">Type</a></code> | <code>*string</code> | The type of action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateCognitoConfig">AuthenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a></code> | [HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateOidcConfig">AuthenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a></code> | [HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.fixedResponseConfig">FixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a></code> | [Application Load Balancer] Information for creating an action that returns a custom HTTP response. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.forwardConfig">ForwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a></code> | Information for creating an action that distributes requests among multiple target groups. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.jwtValidationConfig">JwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a></code> | [HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.order">Order</a></code> | <code>*f64</code> | The order for the action. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.redirectConfig">RedirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a></code> | [Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the target group. |

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of action.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#type Elasticloadbalancingv2Listener#type}

---

##### `AuthenticateCognitoConfig`<sup>Optional</sup> <a name="AuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateCognitoConfig"></a>

```go
AuthenticateCognitoConfig Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

[HTTPS listeners] Information for using Amazon Cognito to authenticate users. Specify only when ``Type`` is ``authenticate-cognito``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authenticate_cognito_config Elasticloadbalancingv2Listener#authenticate_cognito_config}

---

##### `AuthenticateOidcConfig`<sup>Optional</sup> <a name="AuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.authenticateOidcConfig"></a>

```go
AuthenticateOidcConfig Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

[HTTPS listeners] Information about an identity provider that is compliant with OpenID Connect (OIDC).

Specify only when `Type` is `authenticate-oidc`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authenticate_oidc_config Elasticloadbalancingv2Listener#authenticate_oidc_config}

---

##### `FixedResponseConfig`<sup>Optional</sup> <a name="FixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.fixedResponseConfig"></a>

```go
FixedResponseConfig Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

[Application Load Balancer] Information for creating an action that returns a custom HTTP response.

Specify only when `Type` is `fixed-response`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#fixed_response_config Elasticloadbalancingv2Listener#fixed_response_config}

---

##### `ForwardConfig`<sup>Optional</sup> <a name="ForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.forwardConfig"></a>

```go
ForwardConfig Elasticloadbalancingv2ListenerDefaultActionsForwardConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

Information for creating an action that distributes requests among multiple target groups.

Specify only when `Type` is `forward`.
If you specify both `ForwardConfig` and `TargetGroupArn`, you can specify only one target group using `ForwardConfig` and it must be the same target group specified in `TargetGroupArn`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#forward_config Elasticloadbalancingv2Listener#forward_config}

---

##### `JwtValidationConfig`<sup>Optional</sup> <a name="JwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.jwtValidationConfig"></a>

```go
JwtValidationConfig Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

[HTTPS listeners] Information for validating JWT access tokens in client requests. Specify only when ``Type`` is ``jwt-validation``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#jwt_validation_config Elasticloadbalancingv2Listener#jwt_validation_config}

---

##### `Order`<sup>Optional</sup> <a name="Order" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.order"></a>

```go
Order *f64
```

- *Type:* *f64

The order for the action.

This value is required for rules with multiple actions. The action with the lowest value for order is performed first.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#order Elasticloadbalancingv2Listener#order}

---

##### `RedirectConfig`<sup>Optional</sup> <a name="RedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.redirectConfig"></a>

```go
RedirectConfig Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

[Application Load Balancer] Information for creating a redirect action. Specify only when ``Type`` is ``redirect``.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#redirect_config Elasticloadbalancingv2Listener#redirect_config}

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActions.property.targetGroupArn"></a>

```go
TargetGroupArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the target group.

Specify only when `Type` is `forward` and you want to route to a single target group. To route to multiple target groups, you must use `ForwardConfig` instead.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#target_group_arn Elasticloadbalancingv2Listener#target_group_arn}

---

### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig {
	AuthenticationRequestExtraParams: *map[string]*string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *string,
	UserPoolArn: *string,
	UserPoolClientId: *string,
	UserPoolDomain: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.scope">Scope</a></code> | <code>*string</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionTimeout">SessionTimeout</a></code> | <code>*string</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the Amazon Cognito user pool. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | The ID of the Amazon Cognito user pool client. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | The domain prefix or fully-qualified domain name of the Amazon Cognito user pool. |

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.sessionTimeout"></a>

```go
SessionTimeout *string
```

- *Type:* *string

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

##### `UserPoolArn`<sup>Optional</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolArn"></a>

```go
UserPoolArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#user_pool_arn Elasticloadbalancingv2Listener#user_pool_arn}

---

##### `UserPoolClientId`<sup>Optional</sup> <a name="UserPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolClientId"></a>

```go
UserPoolClientId *string
```

- *Type:* *string

The ID of the Amazon Cognito user pool client.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#user_pool_client_id Elasticloadbalancingv2Listener#user_pool_client_id}

---

##### `UserPoolDomain`<sup>Optional</sup> <a name="UserPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig.property.userPoolDomain"></a>

```go
UserPoolDomain *string
```

- *Type:* *string

The domain prefix or fully-qualified domain name of the Amazon Cognito user pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#user_pool_domain Elasticloadbalancingv2Listener#user_pool_domain}

---

### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig {
	AuthenticationRequestExtraParams: *map[string]*string,
	AuthorizationEndpoint: *string,
	ClientId: *string,
	ClientSecret: *string,
	Issuer: *string,
	OnUnauthenticatedRequest: *string,
	Scope: *string,
	SessionCookieName: *string,
	SessionTimeout: *string,
	TokenEndpoint: *string,
	UseExistingClientSecret: interface{},
	UserInfoEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | The query parameters (up to 10) to include in the redirect request to the authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | The authorization endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientId">ClientId</a></code> | <code>*string</code> | The OAuth 2.0 client identifier. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.issuer">Issuer</a></code> | <code>*string</code> | The OIDC issuer identifier of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | The behavior if the user is not authenticated. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.scope">Scope</a></code> | <code>*string</code> | The set of user claims to be requested from the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionTimeout">SessionTimeout</a></code> | <code>*string</code> | The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days). |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The token endpoint of the IdP. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.useExistingClientSecret">UseExistingClientSecret</a></code> | <code>interface{}</code> | Indicates whether to use the existing client secret when modifying a rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | The user info endpoint of the IdP. |

---

##### `AuthenticationRequestExtraParams`<sup>Optional</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authenticationRequestExtraParams"></a>

```go
AuthenticationRequestExtraParams *map[string]*string
```

- *Type:* *map[string]*string

The query parameters (up to 10) to include in the redirect request to the authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authentication_request_extra_params Elasticloadbalancingv2Listener#authentication_request_extra_params}

---

##### `AuthorizationEndpoint`<sup>Optional</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

The authorization endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#authorization_endpoint Elasticloadbalancingv2Listener#authorization_endpoint}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The OAuth 2.0 client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#client_id Elasticloadbalancingv2Listener#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The OAuth 2.0 client secret. This parameter is required if you are creating a rule. If you are modifying a rule, you can omit this parameter if you set ``UseExistingClientSecret`` to true.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#client_secret Elasticloadbalancingv2Listener#client_secret}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

The OIDC issuer identifier of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}

---

##### `OnUnauthenticatedRequest`<sup>Optional</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.onUnauthenticatedRequest"></a>

```go
OnUnauthenticatedRequest *string
```

- *Type:* *string

The behavior if the user is not authenticated.

The following are possible values:

* deny```` - Return an HTTP 401 Unauthorized error.
* allow```` - Allow the request to be forwarded to the target.
* authenticate```` - Redirect the request to the IdP authorization endpoint. This is the default value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#on_unauthenticated_request Elasticloadbalancingv2Listener#on_unauthenticated_request}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

The set of user claims to be requested from the IdP.

The default is `openid`.
To verify which scope values your IdP supports and how to separate multiple values, see the documentation for your IdP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#scope Elasticloadbalancingv2Listener#scope}

---

##### `SessionCookieName`<sup>Optional</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionCookieName"></a>

```go
SessionCookieName *string
```

- *Type:* *string

The name of the cookie used to maintain session information. The default is AWSELBAuthSessionCookie.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#session_cookie_name Elasticloadbalancingv2Listener#session_cookie_name}

---

##### `SessionTimeout`<sup>Optional</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.sessionTimeout"></a>

```go
SessionTimeout *string
```

- *Type:* *string

The maximum duration of the authentication session, in seconds. The default is 604800 seconds (7 days).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#session_timeout Elasticloadbalancingv2Listener#session_timeout}

---

##### `TokenEndpoint`<sup>Optional</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The token endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#token_endpoint Elasticloadbalancingv2Listener#token_endpoint}

---

##### `UseExistingClientSecret`<sup>Optional</sup> <a name="UseExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.useExistingClientSecret"></a>

```go
UseExistingClientSecret interface{}
```

- *Type:* interface{}

Indicates whether to use the existing client secret when modifying a rule.

If you are creating a rule, you can omit this parameter or set it to false.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#use_existing_client_secret Elasticloadbalancingv2Listener#use_existing_client_secret}

---

##### `UserInfoEndpoint`<sup>Optional</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig.property.userInfoEndpoint"></a>

```go
UserInfoEndpoint *string
```

- *Type:* *string

The user info endpoint of the IdP.

This must be a full URL, including the HTTPS protocol, the domain, and the path.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#user_info_endpoint Elasticloadbalancingv2Listener#user_info_endpoint}

---

### Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig {
	ContentType: *string,
	MessageBody: *string,
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.contentType">ContentType</a></code> | <code>*string</code> | The content type.  Valid Values: text/plain \| text/css \| text/html \| application/javascript \| application/json. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.messageBody">MessageBody</a></code> | <code>*string</code> | The message. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.statusCode">StatusCode</a></code> | <code>*string</code> | The HTTP response code (2XX, 4XX, or 5XX). |

---

##### `ContentType`<sup>Optional</sup> <a name="ContentType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.contentType"></a>

```go
ContentType *string
```

- *Type:* *string

The content type.  Valid Values: text/plain | text/css | text/html | application/javascript | application/json.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#content_type Elasticloadbalancingv2Listener#content_type}

---

##### `MessageBody`<sup>Optional</sup> <a name="MessageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.messageBody"></a>

```go
MessageBody *string
```

- *Type:* *string

The message.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#message_body Elasticloadbalancingv2Listener#message_body}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

The HTTP response code (2XX, 4XX, or 5XX).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig {
	TargetGroups: interface{},
	TargetGroupStickinessConfig: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroups">TargetGroups</a></code> | <code>interface{}</code> | Information about how traffic will be distributed between multiple target groups in a forward rule. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroupStickinessConfig">TargetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a></code> | Information about the target group stickiness for a rule. |

---

##### `TargetGroups`<sup>Optional</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroups"></a>

```go
TargetGroups interface{}
```

- *Type:* interface{}

Information about how traffic will be distributed between multiple target groups in a forward rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#target_groups Elasticloadbalancingv2Listener#target_groups}

---

##### `TargetGroupStickinessConfig`<sup>Optional</sup> <a name="TargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig.property.targetGroupStickinessConfig"></a>

```go
TargetGroupStickinessConfig Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

Information about the target group stickiness for a rule.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#target_group_stickiness_config Elasticloadbalancingv2Listener#target_group_stickiness_config}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups {
	TargetGroupArn: *string,
	Weight: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.weight">Weight</a></code> | <code>*f64</code> | The weight. The range is 0 to 999. |

---

##### `TargetGroupArn`<sup>Optional</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.targetGroupArn"></a>

```go
TargetGroupArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the target group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#target_group_arn Elasticloadbalancingv2Listener#target_group_arn}

---

##### `Weight`<sup>Optional</sup> <a name="Weight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroups.property.weight"></a>

```go
Weight *f64
```

- *Type:* *f64

The weight. The range is 0 to 999.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#weight Elasticloadbalancingv2Listener#weight}

---

### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig {
	DurationSeconds: *f64,
	Enabled: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | [Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.enabled">Enabled</a></code> | <code>interface{}</code> | Indicates whether target group stickiness is enabled. |

---

##### `DurationSeconds`<sup>Optional</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.durationSeconds"></a>

```go
DurationSeconds *f64
```

- *Type:* *f64

[Application Load Balancers] The time period, in seconds, during which requests from a client should be routed to the same target group.

The range is 1-604800 seconds (7 days). You must specify this value when enabling target group stickiness.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#duration_seconds Elasticloadbalancingv2Listener#duration_seconds}

---

##### `Enabled`<sup>Optional</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig.property.enabled"></a>

```go
Enabled interface{}
```

- *Type:* interface{}

Indicates whether target group stickiness is enabled.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#enabled Elasticloadbalancingv2Listener#enabled}

---

### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig {
	AdditionalClaims: interface{},
	Issuer: *string,
	JwksEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.additionalClaims">AdditionalClaims</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#additional_claims Elasticloadbalancingv2Listener#additional_claims}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.issuer">Issuer</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.jwksEndpoint">JwksEndpoint</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint Elasticloadbalancingv2Listener#jwks_endpoint}. |

---

##### `AdditionalClaims`<sup>Optional</sup> <a name="AdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.additionalClaims"></a>

```go
AdditionalClaims interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#additional_claims Elasticloadbalancingv2Listener#additional_claims}.

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#issuer Elasticloadbalancingv2Listener#issuer}.

---

##### `JwksEndpoint`<sup>Optional</sup> <a name="JwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig.property.jwksEndpoint"></a>

```go
JwksEndpoint *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#jwks_endpoint Elasticloadbalancingv2Listener#jwks_endpoint}.

---

### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims {
	Format: *string,
	Name: *string,
	Values: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.format">Format</a></code> | <code>*string</code> | The format of the claim value. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.name">Name</a></code> | <code>*string</code> | The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.values">Values</a></code> | <code>*[]*string</code> | The claim value. |

---

##### `Format`<sup>Optional</sup> <a name="Format" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.format"></a>

```go
Format *string
```

- *Type:* *string

The format of the claim value.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#format Elasticloadbalancingv2Listener#format}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the claim. You can't specify ``exp``, ``iss``, ``nbf``, or ``iat`` because we validate them by default.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#name Elasticloadbalancingv2Listener#name}

---

##### `Values`<sup>Optional</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaims.property.values"></a>

```go
Values *[]*string
```

- *Type:* *[]*string

The claim value.

The maximum size of the list is 10. Each value can be up to 256 characters in length. If the format is `space-separated-values`, the values can't include spaces.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#values Elasticloadbalancingv2Listener#values}

---

### Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig <a name="Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig {
	Host: *string,
	Path: *string,
	Port: *string,
	Protocol: *string,
	Query: *string,
	StatusCode: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.host">Host</a></code> | <code>*string</code> | The hostname. This component is not percent-encoded. The hostname can contain #{host}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.path">Path</a></code> | <code>*string</code> | The absolute path, starting with the leading "/". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.port">Port</a></code> | <code>*string</code> | The port. You can specify a value from 1 to 65535 or #{port}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.protocol">Protocol</a></code> | <code>*string</code> | The protocol. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.query">Query</a></code> | <code>*string</code> | The query parameters, URL-encoded when necessary, but not percent-encoded. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.statusCode">StatusCode</a></code> | <code>*string</code> | The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302). |

---

##### `Host`<sup>Optional</sup> <a name="Host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.host"></a>

```go
Host *string
```

- *Type:* *string

The hostname. This component is not percent-encoded. The hostname can contain #{host}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#host Elasticloadbalancingv2Listener#host}

---

##### `Path`<sup>Optional</sup> <a name="Path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.path"></a>

```go
Path *string
```

- *Type:* *string

The absolute path, starting with the leading "/".

This component is not percent-encoded. The path can contain #{host}, #{path}, and #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#path Elasticloadbalancingv2Listener#path}

---

##### `Port`<sup>Optional</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.port"></a>

```go
Port *string
```

- *Type:* *string

The port. You can specify a value from 1 to 65535 or #{port}.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#port Elasticloadbalancingv2Listener#port}

---

##### `Protocol`<sup>Optional</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.protocol"></a>

```go
Protocol *string
```

- *Type:* *string

The protocol.

You can specify HTTP, HTTPS, or #{protocol}. You can redirect HTTP to HTTP, HTTP to HTTPS, and HTTPS to HTTPS. You can't redirect HTTPS to HTTP.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#protocol Elasticloadbalancingv2Listener#protocol}

---

##### `Query`<sup>Optional</sup> <a name="Query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.query"></a>

```go
Query *string
```

- *Type:* *string

The query parameters, URL-encoded when necessary, but not percent-encoded.

Do not include the leading "?", as it is automatically added. You can specify any of the reserved keywords.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#query Elasticloadbalancingv2Listener#query}

---

##### `StatusCode`<sup>Optional</sup> <a name="StatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig.property.statusCode"></a>

```go
StatusCode *string
```

- *Type:* *string

The HTTP redirect code. The redirect is either permanent (HTTP 301) or temporary (HTTP 302).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#status_code Elasticloadbalancingv2Listener#status_code}

---

### Elasticloadbalancingv2ListenerListenerAttributes <a name="Elasticloadbalancingv2ListenerListenerAttributes" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerListenerAttributes {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.key">Key</a></code> | <code>*string</code> | The name of the attribute. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.value">Value</a></code> | <code>*string</code> | The value of the attribute. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.key"></a>

```go
Key *string
```

- *Type:* *string

The name of the attribute.

The following attribute is supported by Network Load Balancers, and Gateway Load Balancers.

* `tcp.idle_timeout.seconds` - The tcp idle timeout value, in seconds. The valid range is 60-6000 seconds. The default is 350 seconds.

The following attributes are only supported by Application Load Balancers.

* `routing.http.request.x_amzn_mtls_clientcert_serial_number.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Serial-Number* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_issuer.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Issuer* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_subject.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Subject* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_validity.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Validity* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert_leaf.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert-Leaf* HTTP request header.
* `routing.http.request.x_amzn_mtls_clientcert.header_name` - Enables you to modify the header name of the *X-Amzn-Mtls-Clientcert* HTTP request header.
* `routing.http.request.x_amzn_tls_version.header_name` - Enables you to modify the header name of the *X-Amzn-Tls-Version* HTTP request header.
* `routing.http.request.x_amzn_tls_cipher_suite.header_name` - Enables you to modify the header name of the *X-Amzn-Tls-Cipher-Suite* HTTP request header.
* `routing.http.response.server.enabled` - Enables you to allow or remove the HTTP response server header.
* `routing.http.response.strict_transport_security.header_value` - Informs browsers that the site should only be accessed using HTTPS, and that any future attempts to access it using HTTP should automatically be converted to HTTPS.
* `routing.http.response.access_control_allow_origin.header_value` - Specifies which origins are allowed to access the server.
* `routing.http.response.access_control_allow_methods.header_value` - Returns which HTTP methods are allowed when accessing the server from a different origin.
* `routing.http.response.access_control_allow_headers.header_value` - Specifies which headers can be used during the request.
* `routing.http.response.access_control_allow_credentials.header_value` - Indicates whether the browser should include credentials such as cookies or authentication when making requests.
* `routing.http.response.access_control_expose_headers.header_value` - Returns which headers the browser can expose to the requesting client.
* `routing.http.response.access_control_max_age.header_value` - Specifies how long the results of a preflight request can be cached, in seconds.
* `routing.http.response.content_security_policy.header_value` - Specifies restrictions enforced by the browser to help minimize the risk of certain types of security threats.
* `routing.http.response.x_content_type_options.header_value` - Indicates whether the MIME types advertised in the *Content-Type* headers should be followed and not be changed.
* `routing.http.response.x_frame_options.header_value` - Indicates whether the browser is allowed to render a page in a *frame*, *iframe*, *embed* or *object*.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#key Elasticloadbalancingv2Listener#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributes.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the attribute.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#value Elasticloadbalancingv2Listener#value}

---

### Elasticloadbalancingv2ListenerMutualAuthentication <a name="Elasticloadbalancingv2ListenerMutualAuthentication" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerMutualAuthentication {
	AdvertiseTrustStoreCaNames: *string,
	IgnoreClientCertificateExpiry: interface{},
	Mode: *string,
	TrustStoreArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.advertiseTrustStoreCaNames">AdvertiseTrustStoreCaNames</a></code> | <code>*string</code> | Indicates whether trust store CA certificate names are advertised. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.ignoreClientCertificateExpiry">IgnoreClientCertificateExpiry</a></code> | <code>interface{}</code> | Indicates whether expired client certificates are ignored. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.mode">Mode</a></code> | <code>*string</code> | The client certificate handling method. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the trust store. |

---

##### `AdvertiseTrustStoreCaNames`<sup>Optional</sup> <a name="AdvertiseTrustStoreCaNames" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.advertiseTrustStoreCaNames"></a>

```go
AdvertiseTrustStoreCaNames *string
```

- *Type:* *string

Indicates whether trust store CA certificate names are advertised.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#advertise_trust_store_ca_names Elasticloadbalancingv2Listener#advertise_trust_store_ca_names}

---

##### `IgnoreClientCertificateExpiry`<sup>Optional</sup> <a name="IgnoreClientCertificateExpiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.ignoreClientCertificateExpiry"></a>

```go
IgnoreClientCertificateExpiry interface{}
```

- *Type:* interface{}

Indicates whether expired client certificates are ignored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#ignore_client_certificate_expiry Elasticloadbalancingv2Listener#ignore_client_certificate_expiry}

---

##### `Mode`<sup>Optional</sup> <a name="Mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.mode"></a>

```go
Mode *string
```

- *Type:* *string

The client certificate handling method.

Options are `off`, `passthrough` or `verify`. The default value on initial resource creation is `off`. After mutual authentication is turned on, you must explicitly set the `Mode` to `off` to turn it off; removing the property from your template will not turn it off.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#mode Elasticloadbalancingv2Listener#mode}

---

##### `TrustStoreArn`<sup>Optional</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthentication.property.trustStoreArn"></a>

```go
TrustStoreArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#trust_store_arn Elasticloadbalancingv2Listener#trust_store_arn}

---

### Elasticloadbalancingv2ListenerTags <a name="Elasticloadbalancingv2ListenerTags" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

&elasticloadbalancingv2listener.Elasticloadbalancingv2ListenerTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.key">Key</a></code> | <code>*string</code> | The key of the tag. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.value">Value</a></code> | <code>*string</code> | The value of the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#key Elasticloadbalancingv2Listener#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value of the tag.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/elasticloadbalancingv2_listener#value Elasticloadbalancingv2Listener#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2ListenerCertificatesList <a name="Elasticloadbalancingv2ListenerCertificatesList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerCertificatesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2ListenerCertificatesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2ListenerCertificatesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerCertificatesOutputReference <a name="Elasticloadbalancingv2ListenerCertificatesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerCertificatesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2ListenerCertificatesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resetCertificateArn">ResetCertificateArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCertificateArn` <a name="ResetCertificateArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.resetCertificateArn"></a>

```go
func ResetCertificateArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArnInput">CertificateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn">CertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CertificateArnInput`<sup>Optional</sup> <a name="CertificateArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArnInput"></a>

```go
func CertificateArnInput() *string
```

- *Type:* *string

---

##### `CertificateArn`<sup>Required</sup> <a name="CertificateArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.certificateArn"></a>

```go
func CertificateArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerCertificatesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn">ResetUserPoolArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId">ResetUserPoolClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain">ResetUserPoolDomain</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```

##### `ResetUserPoolArn` <a name="ResetUserPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolArn"></a>

```go
func ResetUserPoolArn()
```

##### `ResetUserPoolClientId` <a name="ResetUserPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolClientId"></a>

```go
func ResetUserPoolClientId()
```

##### `ResetUserPoolDomain` <a name="ResetUserPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.resetUserPoolDomain"></a>

```go
func ResetUserPoolDomain()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput">UserPoolArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput">UserPoolClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput">UserPoolDomainInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn">UserPoolArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId">UserPoolClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain">UserPoolDomain</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *string
```

- *Type:* *string

---

##### `UserPoolArnInput`<sup>Optional</sup> <a name="UserPoolArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArnInput"></a>

```go
func UserPoolArnInput() *string
```

- *Type:* *string

---

##### `UserPoolClientIdInput`<sup>Optional</sup> <a name="UserPoolClientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientIdInput"></a>

```go
func UserPoolClientIdInput() *string
```

- *Type:* *string

---

##### `UserPoolDomainInput`<sup>Optional</sup> <a name="UserPoolDomainInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomainInput"></a>

```go
func UserPoolDomainInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *string
```

- *Type:* *string

---

##### `UserPoolArn`<sup>Required</sup> <a name="UserPoolArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolArn"></a>

```go
func UserPoolArn() *string
```

- *Type:* *string

---

##### `UserPoolClientId`<sup>Required</sup> <a name="UserPoolClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolClientId"></a>

```go
func UserPoolClientId() *string
```

- *Type:* *string

---

##### `UserPoolDomain`<sup>Required</sup> <a name="UserPoolDomain" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.userPoolDomain"></a>

```go
func UserPoolDomain() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams">ResetAuthenticationRequestExtraParams</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint">ResetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest">ResetOnUnauthenticatedRequest</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName">ResetSessionCookieName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout">ResetSessionTimeout</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint">ResetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret">ResetUseExistingClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint">ResetUserInfoEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthenticationRequestExtraParams` <a name="ResetAuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthenticationRequestExtraParams"></a>

```go
func ResetAuthenticationRequestExtraParams()
```

##### `ResetAuthorizationEndpoint` <a name="ResetAuthorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetAuthorizationEndpoint"></a>

```go
func ResetAuthorizationEndpoint()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetOnUnauthenticatedRequest` <a name="ResetOnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetOnUnauthenticatedRequest"></a>

```go
func ResetOnUnauthenticatedRequest()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetSessionCookieName` <a name="ResetSessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionCookieName"></a>

```go
func ResetSessionCookieName()
```

##### `ResetSessionTimeout` <a name="ResetSessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetSessionTimeout"></a>

```go
func ResetSessionTimeout()
```

##### `ResetTokenEndpoint` <a name="ResetTokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetTokenEndpoint"></a>

```go
func ResetTokenEndpoint()
```

##### `ResetUseExistingClientSecret` <a name="ResetUseExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUseExistingClientSecret"></a>

```go
func ResetUseExistingClientSecret()
```

##### `ResetUserInfoEndpoint` <a name="ResetUserInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.resetUserInfoEndpoint"></a>

```go
func ResetUserInfoEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput">AuthenticationRequestExtraParamsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput">OnUnauthenticatedRequestInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput">SessionCookieNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput">SessionTimeoutInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput">UseExistingClientSecretInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams">AuthenticationRequestExtraParams</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest">OnUnauthenticatedRequest</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName">SessionCookieName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout">SessionTimeout</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret">UseExistingClientSecret</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParamsInput`<sup>Optional</sup> <a name="AuthenticationRequestExtraParamsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParamsInput"></a>

```go
func AuthenticationRequestExtraParamsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequestInput`<sup>Optional</sup> <a name="OnUnauthenticatedRequestInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequestInput"></a>

```go
func OnUnauthenticatedRequestInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `SessionCookieNameInput`<sup>Optional</sup> <a name="SessionCookieNameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieNameInput"></a>

```go
func SessionCookieNameInput() *string
```

- *Type:* *string

---

##### `SessionTimeoutInput`<sup>Optional</sup> <a name="SessionTimeoutInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeoutInput"></a>

```go
func SessionTimeoutInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `UseExistingClientSecretInput`<sup>Optional</sup> <a name="UseExistingClientSecretInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecretInput"></a>

```go
func UseExistingClientSecretInput() interface{}
```

- *Type:* interface{}

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpointInput"></a>

```go
func UserInfoEndpointInput() *string
```

- *Type:* *string

---

##### `AuthenticationRequestExtraParams`<sup>Required</sup> <a name="AuthenticationRequestExtraParams" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authenticationRequestExtraParams"></a>

```go
func AuthenticationRequestExtraParams() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `OnUnauthenticatedRequest`<sup>Required</sup> <a name="OnUnauthenticatedRequest" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.onUnauthenticatedRequest"></a>

```go
func OnUnauthenticatedRequest() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `SessionCookieName`<sup>Required</sup> <a name="SessionCookieName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionCookieName"></a>

```go
func SessionCookieName() *string
```

- *Type:* *string

---

##### `SessionTimeout`<sup>Required</sup> <a name="SessionTimeout" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.sessionTimeout"></a>

```go
func SessionTimeout() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UseExistingClientSecret`<sup>Required</sup> <a name="UseExistingClientSecret" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.useExistingClientSecret"></a>

```go
func UseExistingClientSecret() interface{}
```

- *Type:* interface{}

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetContentType">ResetContentType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetMessageBody">ResetMessageBody</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContentType` <a name="ResetContentType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetContentType"></a>

```go
func ResetContentType()
```

##### `ResetMessageBody` <a name="ResetMessageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetMessageBody"></a>

```go
func ResetMessageBody()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentTypeInput">ContentTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBodyInput">MessageBodyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType">ContentType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody">MessageBody</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContentTypeInput`<sup>Optional</sup> <a name="ContentTypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentTypeInput"></a>

```go
func ContentTypeInput() *string
```

- *Type:* *string

---

##### `MessageBodyInput`<sup>Optional</sup> <a name="MessageBodyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBodyInput"></a>

```go
func MessageBodyInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `ContentType`<sup>Required</sup> <a name="ContentType" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.contentType"></a>

```go
func ContentType() *string
```

- *Type:* *string

---

##### `MessageBody`<sup>Required</sup> <a name="MessageBody" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.messageBody"></a>

```go
func MessageBody() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups">PutTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig">PutTargetGroupStickinessConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroups">ResetTargetGroups</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig">ResetTargetGroupStickinessConfig</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargetGroups` <a name="PutTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups"></a>

```go
func PutTargetGroups(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroups.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTargetGroupStickinessConfig` <a name="PutTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig"></a>

```go
func PutTargetGroupStickinessConfig(value Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.putTargetGroupStickinessConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfig</a>

---

##### `ResetTargetGroups` <a name="ResetTargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroups"></a>

```go
func ResetTargetGroups()
```

##### `ResetTargetGroupStickinessConfig` <a name="ResetTargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.resetTargetGroupStickinessConfig"></a>

```go
func ResetTargetGroupStickinessConfig()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups">TargetGroups</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig">TargetGroupStickinessConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupsInput">TargetGroupsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput">TargetGroupStickinessConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetGroups`<sup>Required</sup> <a name="TargetGroups" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroups"></a>

```go
func TargetGroups() Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList</a>

---

##### `TargetGroupStickinessConfig`<sup>Required</sup> <a name="TargetGroupStickinessConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfig"></a>

```go
func TargetGroupStickinessConfig() Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference</a>

---

##### `TargetGroupsInput`<sup>Optional</sup> <a name="TargetGroupsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupsInput"></a>

```go
func TargetGroupsInput() interface{}
```

- *Type:* interface{}

---

##### `TargetGroupStickinessConfigInput`<sup>Optional</sup> <a name="TargetGroupStickinessConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.targetGroupStickinessConfigInput"></a>

```go
func TargetGroupStickinessConfigInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetWeight">ResetWeight</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetTargetGroupArn"></a>

```go
func ResetTargetGroupArn()
```

##### `ResetWeight` <a name="ResetWeight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.resetWeight"></a>

```go
func ResetWeight()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weightInput">WeightInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight">Weight</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArnInput"></a>

```go
func TargetGroupArnInput() *string
```

- *Type:* *string

---

##### `WeightInput`<sup>Optional</sup> <a name="WeightInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weightInput"></a>

```go
func WeightInput() *f64
```

- *Type:* *f64

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `Weight`<sup>Required</sup> <a name="Weight" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.weight"></a>

```go
func Weight() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds">ResetDurationSeconds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled">ResetEnabled</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDurationSeconds` <a name="ResetDurationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetDurationSeconds"></a>

```go
func ResetDurationSeconds()
```

##### `ResetEnabled` <a name="ResetEnabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.resetEnabled"></a>

```go
func ResetEnabled()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput">DurationSecondsInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput">EnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds">DurationSeconds</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled">Enabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DurationSecondsInput`<sup>Optional</sup> <a name="DurationSecondsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSecondsInput"></a>

```go
func DurationSecondsInput() *f64
```

- *Type:* *f64

---

##### `EnabledInput`<sup>Optional</sup> <a name="EnabledInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabledInput"></a>

```go
func EnabledInput() interface{}
```

- *Type:* interface{}

---

##### `DurationSeconds`<sup>Required</sup> <a name="DurationSeconds" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.durationSeconds"></a>

```go
func DurationSeconds() *f64
```

- *Type:* *f64

---

##### `Enabled`<sup>Required</sup> <a name="Enabled" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.enabled"></a>

```go
func Enabled() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigTargetGroupStickinessConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat">ResetFormat</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues">ResetValues</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetFormat` <a name="ResetFormat" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetFormat"></a>

```go
func ResetFormat()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetValues` <a name="ResetValues" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.resetValues"></a>

```go
func ResetValues()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput">FormatInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput">ValuesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format">Format</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values">Values</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FormatInput`<sup>Optional</sup> <a name="FormatInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.formatInput"></a>

```go
func FormatInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ValuesInput`<sup>Optional</sup> <a name="ValuesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.valuesInput"></a>

```go
func ValuesInput() *[]*string
```

- *Type:* *[]*string

---

##### `Format`<sup>Required</sup> <a name="Format" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.format"></a>

```go
func Format() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Values`<sup>Required</sup> <a name="Values" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.values"></a>

```go
func Values() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims">PutAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetAdditionalClaims">ResetAdditionalClaims</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetJwksEndpoint">ResetJwksEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAdditionalClaims` <a name="PutAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims"></a>

```go
func PutAdditionalClaims(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.putAdditionalClaims.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAdditionalClaims` <a name="ResetAdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetAdditionalClaims"></a>

```go
func ResetAdditionalClaims()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetJwksEndpoint` <a name="ResetJwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.resetJwksEndpoint"></a>

```go
func ResetJwksEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims">AdditionalClaims</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaimsInput">AdditionalClaimsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpointInput">JwksEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint">JwksEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdditionalClaims`<sup>Required</sup> <a name="AdditionalClaims" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaims"></a>

```go
func AdditionalClaims() Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigAdditionalClaimsList</a>

---

##### `AdditionalClaimsInput`<sup>Optional</sup> <a name="AdditionalClaimsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.additionalClaimsInput"></a>

```go
func AdditionalClaimsInput() interface{}
```

- *Type:* interface{}

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `JwksEndpointInput`<sup>Optional</sup> <a name="JwksEndpointInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpointInput"></a>

```go
func JwksEndpointInput() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `JwksEndpoint`<sup>Required</sup> <a name="JwksEndpoint" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.jwksEndpoint"></a>

```go
func JwksEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsList <a name="Elasticloadbalancingv2ListenerDefaultActionsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2ListenerDefaultActionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2ListenerDefaultActionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2ListenerDefaultActionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig">PutAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig">PutAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig">PutFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig">PutForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig">PutJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig">PutRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateCognitoConfig">ResetAuthenticateCognitoConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateOidcConfig">ResetAuthenticateOidcConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetFixedResponseConfig">ResetFixedResponseConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetForwardConfig">ResetForwardConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetJwtValidationConfig">ResetJwtValidationConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetOrder">ResetOrder</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetRedirectConfig">ResetRedirectConfig</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetTargetGroupArn">ResetTargetGroupArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAuthenticateCognitoConfig` <a name="PutAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig"></a>

```go
func PutAuthenticateCognitoConfig(value Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateCognitoConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfig</a>

---

##### `PutAuthenticateOidcConfig` <a name="PutAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig"></a>

```go
func PutAuthenticateOidcConfig(value Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putAuthenticateOidcConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfig</a>

---

##### `PutFixedResponseConfig` <a name="PutFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig"></a>

```go
func PutFixedResponseConfig(value Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putFixedResponseConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfig</a>

---

##### `PutForwardConfig` <a name="PutForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig"></a>

```go
func PutForwardConfig(value Elasticloadbalancingv2ListenerDefaultActionsForwardConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putForwardConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfig">Elasticloadbalancingv2ListenerDefaultActionsForwardConfig</a>

---

##### `PutJwtValidationConfig` <a name="PutJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig"></a>

```go
func PutJwtValidationConfig(value Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putJwtValidationConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfig</a>

---

##### `PutRedirectConfig` <a name="PutRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig"></a>

```go
func PutRedirectConfig(value Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.putRedirectConfig.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfig</a>

---

##### `ResetAuthenticateCognitoConfig` <a name="ResetAuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateCognitoConfig"></a>

```go
func ResetAuthenticateCognitoConfig()
```

##### `ResetAuthenticateOidcConfig` <a name="ResetAuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetAuthenticateOidcConfig"></a>

```go
func ResetAuthenticateOidcConfig()
```

##### `ResetFixedResponseConfig` <a name="ResetFixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetFixedResponseConfig"></a>

```go
func ResetFixedResponseConfig()
```

##### `ResetForwardConfig` <a name="ResetForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetForwardConfig"></a>

```go
func ResetForwardConfig()
```

##### `ResetJwtValidationConfig` <a name="ResetJwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetJwtValidationConfig"></a>

```go
func ResetJwtValidationConfig()
```

##### `ResetOrder` <a name="ResetOrder" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetOrder"></a>

```go
func ResetOrder()
```

##### `ResetRedirectConfig` <a name="ResetRedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetRedirectConfig"></a>

```go
func ResetRedirectConfig()
```

##### `ResetTargetGroupArn` <a name="ResetTargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.resetTargetGroupArn"></a>

```go
func ResetTargetGroupArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig">AuthenticateCognitoConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig">AuthenticateOidcConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig">FixedResponseConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig">ForwardConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig">JwtValidationConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig">RedirectConfig</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfigInput">AuthenticateCognitoConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfigInput">AuthenticateOidcConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfigInput">FixedResponseConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfigInput">ForwardConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfigInput">JwtValidationConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.orderInput">OrderInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfigInput">RedirectConfigInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArnInput">TargetGroupArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order">Order</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn">TargetGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type">Type</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthenticateCognitoConfig`<sup>Required</sup> <a name="AuthenticateCognitoConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfig"></a>

```go
func AuthenticateCognitoConfig() Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateCognitoConfigOutputReference</a>

---

##### `AuthenticateOidcConfig`<sup>Required</sup> <a name="AuthenticateOidcConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfig"></a>

```go
func AuthenticateOidcConfig() Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsAuthenticateOidcConfigOutputReference</a>

---

##### `FixedResponseConfig`<sup>Required</sup> <a name="FixedResponseConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfig"></a>

```go
func FixedResponseConfig() Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsFixedResponseConfigOutputReference</a>

---

##### `ForwardConfig`<sup>Required</sup> <a name="ForwardConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfig"></a>

```go
func ForwardConfig() Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsForwardConfigOutputReference</a>

---

##### `JwtValidationConfig`<sup>Required</sup> <a name="JwtValidationConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfig"></a>

```go
func JwtValidationConfig() Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsJwtValidationConfigOutputReference</a>

---

##### `RedirectConfig`<sup>Required</sup> <a name="RedirectConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfig"></a>

```go
func RedirectConfig() Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference">Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference</a>

---

##### `AuthenticateCognitoConfigInput`<sup>Optional</sup> <a name="AuthenticateCognitoConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateCognitoConfigInput"></a>

```go
func AuthenticateCognitoConfigInput() interface{}
```

- *Type:* interface{}

---

##### `AuthenticateOidcConfigInput`<sup>Optional</sup> <a name="AuthenticateOidcConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.authenticateOidcConfigInput"></a>

```go
func AuthenticateOidcConfigInput() interface{}
```

- *Type:* interface{}

---

##### `FixedResponseConfigInput`<sup>Optional</sup> <a name="FixedResponseConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.fixedResponseConfigInput"></a>

```go
func FixedResponseConfigInput() interface{}
```

- *Type:* interface{}

---

##### `ForwardConfigInput`<sup>Optional</sup> <a name="ForwardConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.forwardConfigInput"></a>

```go
func ForwardConfigInput() interface{}
```

- *Type:* interface{}

---

##### `JwtValidationConfigInput`<sup>Optional</sup> <a name="JwtValidationConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.jwtValidationConfigInput"></a>

```go
func JwtValidationConfigInput() interface{}
```

- *Type:* interface{}

---

##### `OrderInput`<sup>Optional</sup> <a name="OrderInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.orderInput"></a>

```go
func OrderInput() *f64
```

- *Type:* *f64

---

##### `RedirectConfigInput`<sup>Optional</sup> <a name="RedirectConfigInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.redirectConfigInput"></a>

```go
func RedirectConfigInput() interface{}
```

- *Type:* interface{}

---

##### `TargetGroupArnInput`<sup>Optional</sup> <a name="TargetGroupArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArnInput"></a>

```go
func TargetGroupArnInput() *string
```

- *Type:* *string

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `Order`<sup>Required</sup> <a name="Order" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.order"></a>

```go
func Order() *f64
```

- *Type:* *f64

---

##### `TargetGroupArn`<sup>Required</sup> <a name="TargetGroupArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.targetGroupArn"></a>

```go
func TargetGroupArn() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference <a name="Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetHost">ResetHost</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPath">ResetPath</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPort">ResetPort</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetProtocol">ResetProtocol</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetQuery">ResetQuery</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetStatusCode">ResetStatusCode</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetHost` <a name="ResetHost" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetHost"></a>

```go
func ResetHost()
```

##### `ResetPath` <a name="ResetPath" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPath"></a>

```go
func ResetPath()
```

##### `ResetPort` <a name="ResetPort" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetPort"></a>

```go
func ResetPort()
```

##### `ResetProtocol` <a name="ResetProtocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetProtocol"></a>

```go
func ResetProtocol()
```

##### `ResetQuery` <a name="ResetQuery" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetQuery"></a>

```go
func ResetQuery()
```

##### `ResetStatusCode` <a name="ResetStatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.resetStatusCode"></a>

```go
func ResetStatusCode()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.hostInput">HostInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.pathInput">PathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.portInput">PortInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocolInput">ProtocolInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.queryInput">QueryInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCodeInput">StatusCodeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host">Host</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path">Path</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port">Port</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol">Protocol</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query">Query</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode">StatusCode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `HostInput`<sup>Optional</sup> <a name="HostInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.hostInput"></a>

```go
func HostInput() *string
```

- *Type:* *string

---

##### `PathInput`<sup>Optional</sup> <a name="PathInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.pathInput"></a>

```go
func PathInput() *string
```

- *Type:* *string

---

##### `PortInput`<sup>Optional</sup> <a name="PortInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.portInput"></a>

```go
func PortInput() *string
```

- *Type:* *string

---

##### `ProtocolInput`<sup>Optional</sup> <a name="ProtocolInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocolInput"></a>

```go
func ProtocolInput() *string
```

- *Type:* *string

---

##### `QueryInput`<sup>Optional</sup> <a name="QueryInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.queryInput"></a>

```go
func QueryInput() *string
```

- *Type:* *string

---

##### `StatusCodeInput`<sup>Optional</sup> <a name="StatusCodeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCodeInput"></a>

```go
func StatusCodeInput() *string
```

- *Type:* *string

---

##### `Host`<sup>Required</sup> <a name="Host" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.host"></a>

```go
func Host() *string
```

- *Type:* *string

---

##### `Path`<sup>Required</sup> <a name="Path" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.path"></a>

```go
func Path() *string
```

- *Type:* *string

---

##### `Port`<sup>Required</sup> <a name="Port" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.port"></a>

```go
func Port() *string
```

- *Type:* *string

---

##### `Protocol`<sup>Required</sup> <a name="Protocol" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.protocol"></a>

```go
func Protocol() *string
```

- *Type:* *string

---

##### `Query`<sup>Required</sup> <a name="Query" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.query"></a>

```go
func Query() *string
```

- *Type:* *string

---

##### `StatusCode`<sup>Required</sup> <a name="StatusCode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.statusCode"></a>

```go
func StatusCode() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerDefaultActionsRedirectConfigOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerListenerAttributesList <a name="Elasticloadbalancingv2ListenerListenerAttributesList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerListenerAttributesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2ListenerListenerAttributesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2ListenerListenerAttributesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerListenerAttributesOutputReference <a name="Elasticloadbalancingv2ListenerListenerAttributesOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerListenerAttributesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2ListenerListenerAttributesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerListenerAttributesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference <a name="Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerMutualAuthenticationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames">ResetAdvertiseTrustStoreCaNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry">ResetIgnoreClientCertificateExpiry</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetMode">ResetMode</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetTrustStoreArn">ResetTrustStoreArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAdvertiseTrustStoreCaNames` <a name="ResetAdvertiseTrustStoreCaNames" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetAdvertiseTrustStoreCaNames"></a>

```go
func ResetAdvertiseTrustStoreCaNames()
```

##### `ResetIgnoreClientCertificateExpiry` <a name="ResetIgnoreClientCertificateExpiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetIgnoreClientCertificateExpiry"></a>

```go
func ResetIgnoreClientCertificateExpiry()
```

##### `ResetMode` <a name="ResetMode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetMode"></a>

```go
func ResetMode()
```

##### `ResetTrustStoreArn` <a name="ResetTrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.resetTrustStoreArn"></a>

```go
func ResetTrustStoreArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput">AdvertiseTrustStoreCaNamesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput">IgnoreClientCertificateExpiryInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.modeInput">ModeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArnInput">TrustStoreArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames">AdvertiseTrustStoreCaNames</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry">IgnoreClientCertificateExpiry</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode">Mode</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AdvertiseTrustStoreCaNamesInput`<sup>Optional</sup> <a name="AdvertiseTrustStoreCaNamesInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNamesInput"></a>

```go
func AdvertiseTrustStoreCaNamesInput() *string
```

- *Type:* *string

---

##### `IgnoreClientCertificateExpiryInput`<sup>Optional</sup> <a name="IgnoreClientCertificateExpiryInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiryInput"></a>

```go
func IgnoreClientCertificateExpiryInput() interface{}
```

- *Type:* interface{}

---

##### `ModeInput`<sup>Optional</sup> <a name="ModeInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.modeInput"></a>

```go
func ModeInput() *string
```

- *Type:* *string

---

##### `TrustStoreArnInput`<sup>Optional</sup> <a name="TrustStoreArnInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArnInput"></a>

```go
func TrustStoreArnInput() *string
```

- *Type:* *string

---

##### `AdvertiseTrustStoreCaNames`<sup>Required</sup> <a name="AdvertiseTrustStoreCaNames" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.advertiseTrustStoreCaNames"></a>

```go
func AdvertiseTrustStoreCaNames() *string
```

- *Type:* *string

---

##### `IgnoreClientCertificateExpiry`<sup>Required</sup> <a name="IgnoreClientCertificateExpiry" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.ignoreClientCertificateExpiry"></a>

```go
func IgnoreClientCertificateExpiry() interface{}
```

- *Type:* interface{}

---

##### `Mode`<sup>Required</sup> <a name="Mode" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.mode"></a>

```go
func Mode() *string
```

- *Type:* *string

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.trustStoreArn"></a>

```go
func TrustStoreArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerMutualAuthenticationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerTagsList <a name="Elasticloadbalancingv2ListenerTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2ListenerTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2ListenerTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2ListenerTagsOutputReference <a name="Elasticloadbalancingv2ListenerTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2listener"

elasticloadbalancingv2listener.NewElasticloadbalancingv2ListenerTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2ListenerTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2Listener.Elasticloadbalancingv2ListenerTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



