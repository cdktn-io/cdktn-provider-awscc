# `lightsailLoadBalancerTlsCertificate` Submodule <a name="`lightsailLoadBalancerTlsCertificate` Submodule" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### LightsailLoadBalancerTlsCertificate <a name="LightsailLoadBalancerTlsCertificate" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate awscc_lightsail_load_balancer_tls_certificate}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailloadbalancertlscertificate"

lightsailloadbalancertlscertificate.NewLightsailLoadBalancerTlsCertificate(scope Construct, id *string, config LightsailLoadBalancerTlsCertificateConfig) LightsailLoadBalancerTlsCertificate
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig">LightsailLoadBalancerTlsCertificateConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig">LightsailLoadBalancerTlsCertificateConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames">ResetCertificateAlternativeNames</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled">ResetHttpsRedirectionEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached">ResetIsAttached</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetCertificateAlternativeNames` <a name="ResetCertificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetCertificateAlternativeNames"></a>

```go
func ResetCertificateAlternativeNames()
```

##### `ResetHttpsRedirectionEnabled` <a name="ResetHttpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetHttpsRedirectionEnabled"></a>

```go
func ResetHttpsRedirectionEnabled()
```

##### `ResetIsAttached` <a name="ResetIsAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.resetIsAttached"></a>

```go
func ResetIsAttached()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailloadbalancertlscertificate"

lightsailloadbalancertlscertificate.LightsailLoadBalancerTlsCertificate_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailloadbalancertlscertificate"

lightsailloadbalancertlscertificate.LightsailLoadBalancerTlsCertificate_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailloadbalancertlscertificate"

lightsailloadbalancertlscertificate.LightsailLoadBalancerTlsCertificate_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailloadbalancertlscertificate"

lightsailloadbalancertlscertificate.LightsailLoadBalancerTlsCertificate_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a LightsailLoadBalancerTlsCertificate resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the LightsailLoadBalancerTlsCertificate to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing LightsailLoadBalancerTlsCertificate that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the LightsailLoadBalancerTlsCertificate to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn">LoadBalancerTlsCertificateArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput">CertificateAlternativeNamesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput">CertificateDomainNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput">CertificateNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput">HttpsRedirectionEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput">IsAttachedInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput">LoadBalancerNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames">CertificateAlternativeNames</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName">CertificateDomainName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName">CertificateName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled">HttpsRedirectionEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached">IsAttached</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName">LoadBalancerName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LoadBalancerTlsCertificateArn`<sup>Required</sup> <a name="LoadBalancerTlsCertificateArn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerTlsCertificateArn"></a>

```go
func LoadBalancerTlsCertificateArn() *string
```

- *Type:* *string

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `CertificateAlternativeNamesInput`<sup>Optional</sup> <a name="CertificateAlternativeNamesInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNamesInput"></a>

```go
func CertificateAlternativeNamesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateDomainNameInput`<sup>Optional</sup> <a name="CertificateDomainNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainNameInput"></a>

```go
func CertificateDomainNameInput() *string
```

- *Type:* *string

---

##### `CertificateNameInput`<sup>Optional</sup> <a name="CertificateNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateNameInput"></a>

```go
func CertificateNameInput() *string
```

- *Type:* *string

---

##### `HttpsRedirectionEnabledInput`<sup>Optional</sup> <a name="HttpsRedirectionEnabledInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabledInput"></a>

```go
func HttpsRedirectionEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `IsAttachedInput`<sup>Optional</sup> <a name="IsAttachedInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttachedInput"></a>

```go
func IsAttachedInput() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancerNameInput`<sup>Optional</sup> <a name="LoadBalancerNameInput" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerNameInput"></a>

```go
func LoadBalancerNameInput() *string
```

- *Type:* *string

---

##### `CertificateAlternativeNames`<sup>Required</sup> <a name="CertificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateAlternativeNames"></a>

```go
func CertificateAlternativeNames() *[]*string
```

- *Type:* *[]*string

---

##### `CertificateDomainName`<sup>Required</sup> <a name="CertificateDomainName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateDomainName"></a>

```go
func CertificateDomainName() *string
```

- *Type:* *string

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.certificateName"></a>

```go
func CertificateName() *string
```

- *Type:* *string

---

##### `HttpsRedirectionEnabled`<sup>Required</sup> <a name="HttpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.httpsRedirectionEnabled"></a>

```go
func HttpsRedirectionEnabled() interface{}
```

- *Type:* interface{}

---

##### `IsAttached`<sup>Required</sup> <a name="IsAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.isAttached"></a>

```go
func IsAttached() interface{}
```

- *Type:* interface{}

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.loadBalancerName"></a>

```go
func LoadBalancerName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificate.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### LightsailLoadBalancerTlsCertificateConfig <a name="LightsailLoadBalancerTlsCertificateConfig" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/lightsailloadbalancertlscertificate"

&lightsailloadbalancertlscertificate.LightsailLoadBalancerTlsCertificateConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CertificateDomainName: *string,
	CertificateName: *string,
	LoadBalancerName: *string,
	CertificateAlternativeNames: *[]*string,
	HttpsRedirectionEnabled: interface{},
	IsAttached: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName">CertificateDomainName</a></code> | <code>*string</code> | The domain name (e.g., example.com ) for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName">CertificateName</a></code> | <code>*string</code> | The SSL/TLS certificate name. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName">LoadBalancerName</a></code> | <code>*string</code> | The name of your load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames">CertificateAlternativeNames</a></code> | <code>*[]*string</code> | An array of strings listing alternative domains and subdomains for your SSL/TLS certificate. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled">HttpsRedirectionEnabled</a></code> | <code>interface{}</code> | A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer. |
| <code><a href="#@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached">IsAttached</a></code> | <code>interface{}</code> | When true, the SSL/TLS certificate is attached to the Lightsail load balancer. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CertificateDomainName`<sup>Required</sup> <a name="CertificateDomainName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateDomainName"></a>

```go
CertificateDomainName *string
```

- *Type:* *string

The domain name (e.g., example.com ) for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_domain_name LightsailLoadBalancerTlsCertificate#certificate_domain_name}

---

##### `CertificateName`<sup>Required</sup> <a name="CertificateName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateName"></a>

```go
CertificateName *string
```

- *Type:* *string

The SSL/TLS certificate name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_name LightsailLoadBalancerTlsCertificate#certificate_name}

---

##### `LoadBalancerName`<sup>Required</sup> <a name="LoadBalancerName" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.loadBalancerName"></a>

```go
LoadBalancerName *string
```

- *Type:* *string

The name of your load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#load_balancer_name LightsailLoadBalancerTlsCertificate#load_balancer_name}

---

##### `CertificateAlternativeNames`<sup>Optional</sup> <a name="CertificateAlternativeNames" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.certificateAlternativeNames"></a>

```go
CertificateAlternativeNames *[]*string
```

- *Type:* *[]*string

An array of strings listing alternative domains and subdomains for your SSL/TLS certificate.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#certificate_alternative_names LightsailLoadBalancerTlsCertificate#certificate_alternative_names}

---

##### `HttpsRedirectionEnabled`<sup>Optional</sup> <a name="HttpsRedirectionEnabled" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.httpsRedirectionEnabled"></a>

```go
HttpsRedirectionEnabled interface{}
```

- *Type:* interface{}

A Boolean value that indicates whether HTTPS redirection is enabled for the load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#https_redirection_enabled LightsailLoadBalancerTlsCertificate#https_redirection_enabled}

---

##### `IsAttached`<sup>Optional</sup> <a name="IsAttached" id="@cdktn/provider-awscc.lightsailLoadBalancerTlsCertificate.LightsailLoadBalancerTlsCertificateConfig.property.isAttached"></a>

```go
IsAttached interface{}
```

- *Type:* interface{}

When true, the SSL/TLS certificate is attached to the Lightsail load balancer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/lightsail_load_balancer_tls_certificate#is_attached LightsailLoadBalancerTlsCertificate#is_attached}

---



