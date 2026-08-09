# `ec2VerifiedAccessTrustProvider` Submodule <a name="`ec2VerifiedAccessTrustProvider` Submodule" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2VerifiedAccessTrustProvider <a name="Ec2VerifiedAccessTrustProvider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider awscc_ec2_verified_access_trust_provider}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.NewEc2VerifiedAccessTrustProvider(scope Construct, id *string, config Ec2VerifiedAccessTrustProviderConfig) Ec2VerifiedAccessTrustProvider
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig">Ec2VerifiedAccessTrustProviderConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig">Ec2VerifiedAccessTrustProviderConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions">PutDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions">PutNativeApplicationOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions">PutOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification">PutSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceOptions">ResetDeviceOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceTrustProviderType">ResetDeviceTrustProviderType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetNativeApplicationOidcOptions">ResetNativeApplicationOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOidcOptions">ResetOidcOptions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetSseSpecification">ResetSseSpecification</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetUserTrustProviderType">ResetUserTrustProviderType</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDeviceOptions` <a name="PutDeviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions"></a>

```go
func PutDeviceOptions(value Ec2VerifiedAccessTrustProviderDeviceOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putDeviceOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

---

##### `PutNativeApplicationOidcOptions` <a name="PutNativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions"></a>

```go
func PutNativeApplicationOidcOptions(value Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putNativeApplicationOidcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

---

##### `PutOidcOptions` <a name="PutOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions"></a>

```go
func PutOidcOptions(value Ec2VerifiedAccessTrustProviderOidcOptions)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putOidcOptions.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

---

##### `PutSseSpecification` <a name="PutSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification"></a>

```go
func PutSseSpecification(value Ec2VerifiedAccessTrustProviderSseSpecification)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putSseSpecification.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetDeviceOptions` <a name="ResetDeviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceOptions"></a>

```go
func ResetDeviceOptions()
```

##### `ResetDeviceTrustProviderType` <a name="ResetDeviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetDeviceTrustProviderType"></a>

```go
func ResetDeviceTrustProviderType()
```

##### `ResetNativeApplicationOidcOptions` <a name="ResetNativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetNativeApplicationOidcOptions"></a>

```go
func ResetNativeApplicationOidcOptions()
```

##### `ResetOidcOptions` <a name="ResetOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetOidcOptions"></a>

```go
func ResetOidcOptions()
```

##### `ResetSseSpecification` <a name="ResetSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetSseSpecification"></a>

```go
func ResetSseSpecification()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetTags"></a>

```go
func ResetTags()
```

##### `ResetUserTrustProviderType` <a name="ResetUserTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.resetUserTrustProviderType"></a>

```go
func ResetUserTrustProviderType()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProvider_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProvider_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProvider_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProvider_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2VerifiedAccessTrustProvider resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2VerifiedAccessTrustProvider to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2VerifiedAccessTrustProvider that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2VerifiedAccessTrustProvider to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.creationTime">CreationTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptions">DeviceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference">Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lastUpdatedTime">LastUpdatedTime</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions">NativeApplicationOidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptions">OidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference">Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList">Ec2VerifiedAccessTrustProviderTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId">VerifiedAccessTrustProviderId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptionsInput">DeviceOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderTypeInput">DeviceTrustProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptionsInput">NativeApplicationOidcOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptionsInput">OidcOptionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceNameInput">PolicyReferenceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecificationInput">SseSpecificationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderTypeInput">TrustProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderTypeInput">UserTrustProviderTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderType">DeviceTrustProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceName">PolicyReferenceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderType">TrustProviderType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderType">UserTrustProviderType</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CreationTime`<sup>Required</sup> <a name="CreationTime" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.creationTime"></a>

```go
func CreationTime() *string
```

- *Type:* *string

---

##### `DeviceOptions`<sup>Required</sup> <a name="DeviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptions"></a>

```go
func DeviceOptions() Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference">Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LastUpdatedTime`<sup>Required</sup> <a name="LastUpdatedTime" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.lastUpdatedTime"></a>

```go
func LastUpdatedTime() *string
```

- *Type:* *string

---

##### `NativeApplicationOidcOptions`<sup>Required</sup> <a name="NativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptions"></a>

```go
func NativeApplicationOidcOptions() Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference</a>

---

##### `OidcOptions`<sup>Required</sup> <a name="OidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptions"></a>

```go
func OidcOptions() Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference">Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference</a>

---

##### `SseSpecification`<sup>Required</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecification"></a>

```go
func SseSpecification() Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference">Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tags"></a>

```go
func Tags() Ec2VerifiedAccessTrustProviderTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList">Ec2VerifiedAccessTrustProviderTagsList</a>

---

##### `VerifiedAccessTrustProviderId`<sup>Required</sup> <a name="VerifiedAccessTrustProviderId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.verifiedAccessTrustProviderId"></a>

```go
func VerifiedAccessTrustProviderId() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `DeviceOptionsInput`<sup>Optional</sup> <a name="DeviceOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceOptionsInput"></a>

```go
func DeviceOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `DeviceTrustProviderTypeInput`<sup>Optional</sup> <a name="DeviceTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderTypeInput"></a>

```go
func DeviceTrustProviderTypeInput() *string
```

- *Type:* *string

---

##### `NativeApplicationOidcOptionsInput`<sup>Optional</sup> <a name="NativeApplicationOidcOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.nativeApplicationOidcOptionsInput"></a>

```go
func NativeApplicationOidcOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `OidcOptionsInput`<sup>Optional</sup> <a name="OidcOptionsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.oidcOptionsInput"></a>

```go
func OidcOptionsInput() interface{}
```

- *Type:* interface{}

---

##### `PolicyReferenceNameInput`<sup>Optional</sup> <a name="PolicyReferenceNameInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceNameInput"></a>

```go
func PolicyReferenceNameInput() *string
```

- *Type:* *string

---

##### `SseSpecificationInput`<sup>Optional</sup> <a name="SseSpecificationInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.sseSpecificationInput"></a>

```go
func SseSpecificationInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TrustProviderTypeInput`<sup>Optional</sup> <a name="TrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderTypeInput"></a>

```go
func TrustProviderTypeInput() *string
```

- *Type:* *string

---

##### `UserTrustProviderTypeInput`<sup>Optional</sup> <a name="UserTrustProviderTypeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderTypeInput"></a>

```go
func UserTrustProviderTypeInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `DeviceTrustProviderType`<sup>Required</sup> <a name="DeviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.deviceTrustProviderType"></a>

```go
func DeviceTrustProviderType() *string
```

- *Type:* *string

---

##### `PolicyReferenceName`<sup>Required</sup> <a name="PolicyReferenceName" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.policyReferenceName"></a>

```go
func PolicyReferenceName() *string
```

- *Type:* *string

---

##### `TrustProviderType`<sup>Required</sup> <a name="TrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.trustProviderType"></a>

```go
func TrustProviderType() *string
```

- *Type:* *string

---

##### `UserTrustProviderType`<sup>Required</sup> <a name="UserTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.userTrustProviderType"></a>

```go
func UserTrustProviderType() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProvider.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2VerifiedAccessTrustProviderConfig <a name="Ec2VerifiedAccessTrustProviderConfig" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

&ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProviderConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	PolicyReferenceName: *string,
	TrustProviderType: *string,
	Description: *string,
	DeviceOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions,
	DeviceTrustProviderType: *string,
	NativeApplicationOidcOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions,
	OidcOptions: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions,
	SseSpecification: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification,
	Tags: interface{},
	UserTrustProviderType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.policyReferenceName">PolicyReferenceName</a></code> | <code>*string</code> | The identifier to be used when working with policy rules. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.trustProviderType">TrustProviderType</a></code> | <code>*string</code> | Type of trust provider. Possible values: user\|device. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.description">Description</a></code> | <code>*string</code> | A description for the Amazon Web Services Verified Access trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceOptions">DeviceOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a></code> | The options for device identity based trust providers. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceTrustProviderType">DeviceTrustProviderType</a></code> | <code>*string</code> | The type of device-based trust provider. Possible values: jamf\|crowdstrike. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.nativeApplicationOidcOptions">NativeApplicationOidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a></code> | The OpenID Connect details for an oidc -type, user-identity based trust provider for L4. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.oidcOptions">OidcOptions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a></code> | The OpenID Connect details for an oidc -type, user-identity based trust provider. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.sseSpecification">SseSpecification</a></code> | <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a></code> | The configuration options for customer provided KMS encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.userTrustProviderType">UserTrustProviderType</a></code> | <code>*string</code> | The type of device-based trust provider. Possible values: oidc\|iam-identity-center. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `PolicyReferenceName`<sup>Required</sup> <a name="PolicyReferenceName" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.policyReferenceName"></a>

```go
PolicyReferenceName *string
```

- *Type:* *string

The identifier to be used when working with policy rules.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#policy_reference_name Ec2VerifiedAccessTrustProvider#policy_reference_name}

---

##### `TrustProviderType`<sup>Required</sup> <a name="TrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.trustProviderType"></a>

```go
TrustProviderType *string
```

- *Type:* *string

Type of trust provider. Possible values: user|device.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#trust_provider_type Ec2VerifiedAccessTrustProvider#trust_provider_type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description for the Amazon Web Services Verified Access trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#description Ec2VerifiedAccessTrustProvider#description}

---

##### `DeviceOptions`<sup>Optional</sup> <a name="DeviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceOptions"></a>

```go
DeviceOptions Ec2VerifiedAccessTrustProviderDeviceOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions">Ec2VerifiedAccessTrustProviderDeviceOptions</a>

The options for device identity based trust providers.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#device_options Ec2VerifiedAccessTrustProvider#device_options}

---

##### `DeviceTrustProviderType`<sup>Optional</sup> <a name="DeviceTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.deviceTrustProviderType"></a>

```go
DeviceTrustProviderType *string
```

- *Type:* *string

The type of device-based trust provider. Possible values: jamf|crowdstrike.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#device_trust_provider_type Ec2VerifiedAccessTrustProvider#device_trust_provider_type}

---

##### `NativeApplicationOidcOptions`<sup>Optional</sup> <a name="NativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.nativeApplicationOidcOptions"></a>

```go
NativeApplicationOidcOptions Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions">Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions</a>

The OpenID Connect details for an oidc -type, user-identity based trust provider for L4.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#native_application_oidc_options Ec2VerifiedAccessTrustProvider#native_application_oidc_options}

---

##### `OidcOptions`<sup>Optional</sup> <a name="OidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.oidcOptions"></a>

```go
OidcOptions Ec2VerifiedAccessTrustProviderOidcOptions
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions">Ec2VerifiedAccessTrustProviderOidcOptions</a>

The OpenID Connect details for an oidc -type, user-identity based trust provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#oidc_options Ec2VerifiedAccessTrustProvider#oidc_options}

---

##### `SseSpecification`<sup>Optional</sup> <a name="SseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.sseSpecification"></a>

```go
SseSpecification Ec2VerifiedAccessTrustProviderSseSpecification
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification">Ec2VerifiedAccessTrustProviderSseSpecification</a>

The configuration options for customer provided KMS encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#sse_specification Ec2VerifiedAccessTrustProvider#sse_specification}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#tags Ec2VerifiedAccessTrustProvider#tags}

---

##### `UserTrustProviderType`<sup>Optional</sup> <a name="UserTrustProviderType" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderConfig.property.userTrustProviderType"></a>

```go
UserTrustProviderType *string
```

- *Type:* *string

The type of device-based trust provider. Possible values: oidc|iam-identity-center.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#user_trust_provider_type Ec2VerifiedAccessTrustProvider#user_trust_provider_type}

---

### Ec2VerifiedAccessTrustProviderDeviceOptions <a name="Ec2VerifiedAccessTrustProviderDeviceOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

&ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProviderDeviceOptions {
	PublicSigningKeyUrl: *string,
	TenantId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.publicSigningKeyUrl">PublicSigningKeyUrl</a></code> | <code>*string</code> | URL Verified Access will use to verify authenticity of the device tokens. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.tenantId">TenantId</a></code> | <code>*string</code> | The ID of the tenant application with the device-identity provider. |

---

##### `PublicSigningKeyUrl`<sup>Optional</sup> <a name="PublicSigningKeyUrl" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.publicSigningKeyUrl"></a>

```go
PublicSigningKeyUrl *string
```

- *Type:* *string

URL Verified Access will use to verify authenticity of the device tokens.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_url Ec2VerifiedAccessTrustProvider#public_signing_key_url}

---

##### `TenantId`<sup>Optional</sup> <a name="TenantId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptions.property.tenantId"></a>

```go
TenantId *string
```

- *Type:* *string

The ID of the tenant application with the device-identity provider.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#tenant_id Ec2VerifiedAccessTrustProvider#tenant_id}

---

### Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions <a name="Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

&ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions {
	AuthorizationEndpoint: *string,
	ClientId: *string,
	ClientSecret: *string,
	Issuer: *string,
	PublicSigningKeyEndpoint: *string,
	Scope: *string,
	TokenEndpoint: *string,
	UserInfoEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | The OIDC authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientId">ClientId</a></code> | <code>*string</code> | The client identifier. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.issuer">Issuer</a></code> | <code>*string</code> | The OIDC issuer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.publicSigningKeyEndpoint">PublicSigningKeyEndpoint</a></code> | <code>*string</code> | The public signing key for endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.scope">Scope</a></code> | <code>*string</code> | OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The OIDC token endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | The OIDC user info endpoint. |

---

##### `AuthorizationEndpoint`<sup>Optional</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

The OIDC authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint Ec2VerifiedAccessTrustProvider#authorization_endpoint}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#client_id Ec2VerifiedAccessTrustProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#client_secret Ec2VerifiedAccessTrustProvider#client_secret}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#issuer Ec2VerifiedAccessTrustProvider#issuer}

---

##### `PublicSigningKeyEndpoint`<sup>Optional</sup> <a name="PublicSigningKeyEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.publicSigningKeyEndpoint"></a>

```go
PublicSigningKeyEndpoint *string
```

- *Type:* *string

The public signing key for endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#public_signing_key_endpoint Ec2VerifiedAccessTrustProvider#public_signing_key_endpoint}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user.

Each scope returns a specific set of user attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#scope Ec2VerifiedAccessTrustProvider#scope}

---

##### `TokenEndpoint`<sup>Optional</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The OIDC token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint Ec2VerifiedAccessTrustProvider#token_endpoint}

---

##### `UserInfoEndpoint`<sup>Optional</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptions.property.userInfoEndpoint"></a>

```go
UserInfoEndpoint *string
```

- *Type:* *string

The OIDC user info endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint Ec2VerifiedAccessTrustProvider#user_info_endpoint}

---

### Ec2VerifiedAccessTrustProviderOidcOptions <a name="Ec2VerifiedAccessTrustProviderOidcOptions" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

&ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProviderOidcOptions {
	AuthorizationEndpoint: *string,
	ClientId: *string,
	ClientSecret: *string,
	Issuer: *string,
	Scope: *string,
	TokenEndpoint: *string,
	UserInfoEndpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | The OIDC authorization endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientId">ClientId</a></code> | <code>*string</code> | The client identifier. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | The client secret. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.issuer">Issuer</a></code> | <code>*string</code> | The OIDC issuer. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.scope">Scope</a></code> | <code>*string</code> | OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | The OIDC token endpoint. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | The OIDC user info endpoint. |

---

##### `AuthorizationEndpoint`<sup>Optional</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.authorizationEndpoint"></a>

```go
AuthorizationEndpoint *string
```

- *Type:* *string

The OIDC authorization endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#authorization_endpoint Ec2VerifiedAccessTrustProvider#authorization_endpoint}

---

##### `ClientId`<sup>Optional</sup> <a name="ClientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientId"></a>

```go
ClientId *string
```

- *Type:* *string

The client identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#client_id Ec2VerifiedAccessTrustProvider#client_id}

---

##### `ClientSecret`<sup>Optional</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.clientSecret"></a>

```go
ClientSecret *string
```

- *Type:* *string

The client secret.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#client_secret Ec2VerifiedAccessTrustProvider#client_secret}

---

##### `Issuer`<sup>Optional</sup> <a name="Issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.issuer"></a>

```go
Issuer *string
```

- *Type:* *string

The OIDC issuer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#issuer Ec2VerifiedAccessTrustProvider#issuer}

---

##### `Scope`<sup>Optional</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.scope"></a>

```go
Scope *string
```

- *Type:* *string

OpenID Connect (OIDC) scopes are used by an application during authentication to authorize access to details of a user.

Each scope returns a specific set of user attributes.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#scope Ec2VerifiedAccessTrustProvider#scope}

---

##### `TokenEndpoint`<sup>Optional</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.tokenEndpoint"></a>

```go
TokenEndpoint *string
```

- *Type:* *string

The OIDC token endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#token_endpoint Ec2VerifiedAccessTrustProvider#token_endpoint}

---

##### `UserInfoEndpoint`<sup>Optional</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptions.property.userInfoEndpoint"></a>

```go
UserInfoEndpoint *string
```

- *Type:* *string

The OIDC user info endpoint.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#user_info_endpoint Ec2VerifiedAccessTrustProvider#user_info_endpoint}

---

### Ec2VerifiedAccessTrustProviderSseSpecification <a name="Ec2VerifiedAccessTrustProviderSseSpecification" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

&ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProviderSseSpecification {
	CustomerManagedKeyEnabled: interface{},
	KmsKeyArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>interface{}</code> | Whether to encrypt the policy with the provided key or disable encryption. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | KMS Key Arn used to encrypt the group policy. |

---

##### `CustomerManagedKeyEnabled`<sup>Optional</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.customerManagedKeyEnabled"></a>

```go
CustomerManagedKeyEnabled interface{}
```

- *Type:* interface{}

Whether to encrypt the policy with the provided key or disable encryption.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#customer_managed_key_enabled Ec2VerifiedAccessTrustProvider#customer_managed_key_enabled}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecification.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

KMS Key Arn used to encrypt the group policy.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#kms_key_arn Ec2VerifiedAccessTrustProvider#kms_key_arn}

---

### Ec2VerifiedAccessTrustProviderTags <a name="Ec2VerifiedAccessTrustProviderTags" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

&ec2verifiedaccesstrustprovider.Ec2VerifiedAccessTrustProviderTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#key Ec2VerifiedAccessTrustProvider#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_verified_access_trust_provider#value Ec2VerifiedAccessTrustProvider#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference <a name="Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.NewEc2VerifiedAccessTrustProviderDeviceOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetPublicSigningKeyUrl">ResetPublicSigningKeyUrl</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetTenantId">ResetTenantId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetPublicSigningKeyUrl` <a name="ResetPublicSigningKeyUrl" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetPublicSigningKeyUrl"></a>

```go
func ResetPublicSigningKeyUrl()
```

##### `ResetTenantId` <a name="ResetTenantId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.resetTenantId"></a>

```go
func ResetTenantId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrlInput">PublicSigningKeyUrlInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput">TenantIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl">PublicSigningKeyUrl</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId">TenantId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `PublicSigningKeyUrlInput`<sup>Optional</sup> <a name="PublicSigningKeyUrlInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrlInput"></a>

```go
func PublicSigningKeyUrlInput() *string
```

- *Type:* *string

---

##### `TenantIdInput`<sup>Optional</sup> <a name="TenantIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantIdInput"></a>

```go
func TenantIdInput() *string
```

- *Type:* *string

---

##### `PublicSigningKeyUrl`<sup>Required</sup> <a name="PublicSigningKeyUrl" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.publicSigningKeyUrl"></a>

```go
func PublicSigningKeyUrl() *string
```

- *Type:* *string

---

##### `TenantId`<sup>Required</sup> <a name="TenantId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.tenantId"></a>

```go
func TenantId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderDeviceOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference <a name="Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.NewEc2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetAuthorizationEndpoint">ResetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetPublicSigningKeyEndpoint">ResetPublicSigningKeyEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetTokenEndpoint">ResetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetUserInfoEndpoint">ResetUserInfoEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationEndpoint` <a name="ResetAuthorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```go
func ResetAuthorizationEndpoint()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetPublicSigningKeyEndpoint` <a name="ResetPublicSigningKeyEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetPublicSigningKeyEndpoint"></a>

```go
func ResetPublicSigningKeyEndpoint()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTokenEndpoint` <a name="ResetTokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetTokenEndpoint"></a>

```go
func ResetTokenEndpoint()
```

##### `ResetUserInfoEndpoint` <a name="ResetUserInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```go
func ResetUserInfoEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpointInput">PublicSigningKeyEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint">PublicSigningKeyEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `PublicSigningKeyEndpointInput`<sup>Optional</sup> <a name="PublicSigningKeyEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpointInput"></a>

```go
func PublicSigningKeyEndpointInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```go
func UserInfoEndpointInput() *string
```

- *Type:* *string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `PublicSigningKeyEndpoint`<sup>Required</sup> <a name="PublicSigningKeyEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.publicSigningKeyEndpoint"></a>

```go
func PublicSigningKeyEndpoint() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderNativeApplicationOidcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference <a name="Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.NewEc2VerifiedAccessTrustProviderOidcOptionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint">ResetAuthorizationEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientId">ResetClientId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientSecret">ResetClientSecret</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetIssuer">ResetIssuer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetScope">ResetScope</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint">ResetTokenEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint">ResetUserInfoEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAuthorizationEndpoint` <a name="ResetAuthorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetAuthorizationEndpoint"></a>

```go
func ResetAuthorizationEndpoint()
```

##### `ResetClientId` <a name="ResetClientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientId"></a>

```go
func ResetClientId()
```

##### `ResetClientSecret` <a name="ResetClientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetClientSecret"></a>

```go
func ResetClientSecret()
```

##### `ResetIssuer` <a name="ResetIssuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetIssuer"></a>

```go
func ResetIssuer()
```

##### `ResetScope` <a name="ResetScope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetScope"></a>

```go
func ResetScope()
```

##### `ResetTokenEndpoint` <a name="ResetTokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetTokenEndpoint"></a>

```go
func ResetTokenEndpoint()
```

##### `ResetUserInfoEndpoint` <a name="ResetUserInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.resetUserInfoEndpoint"></a>

```go
func ResetUserInfoEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput">AuthorizationEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientIdInput">ClientIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput">ClientSecretInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuerInput">IssuerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scopeInput">ScopeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput">TokenEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput">UserInfoEndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint">AuthorizationEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId">ClientId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret">ClientSecret</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer">Issuer</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope">Scope</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint">TokenEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint">UserInfoEndpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AuthorizationEndpointInput`<sup>Optional</sup> <a name="AuthorizationEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpointInput"></a>

```go
func AuthorizationEndpointInput() *string
```

- *Type:* *string

---

##### `ClientIdInput`<sup>Optional</sup> <a name="ClientIdInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientIdInput"></a>

```go
func ClientIdInput() *string
```

- *Type:* *string

---

##### `ClientSecretInput`<sup>Optional</sup> <a name="ClientSecretInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecretInput"></a>

```go
func ClientSecretInput() *string
```

- *Type:* *string

---

##### `IssuerInput`<sup>Optional</sup> <a name="IssuerInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuerInput"></a>

```go
func IssuerInput() *string
```

- *Type:* *string

---

##### `ScopeInput`<sup>Optional</sup> <a name="ScopeInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scopeInput"></a>

```go
func ScopeInput() *string
```

- *Type:* *string

---

##### `TokenEndpointInput`<sup>Optional</sup> <a name="TokenEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpointInput"></a>

```go
func TokenEndpointInput() *string
```

- *Type:* *string

---

##### `UserInfoEndpointInput`<sup>Optional</sup> <a name="UserInfoEndpointInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpointInput"></a>

```go
func UserInfoEndpointInput() *string
```

- *Type:* *string

---

##### `AuthorizationEndpoint`<sup>Required</sup> <a name="AuthorizationEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.authorizationEndpoint"></a>

```go
func AuthorizationEndpoint() *string
```

- *Type:* *string

---

##### `ClientId`<sup>Required</sup> <a name="ClientId" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientId"></a>

```go
func ClientId() *string
```

- *Type:* *string

---

##### `ClientSecret`<sup>Required</sup> <a name="ClientSecret" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.clientSecret"></a>

```go
func ClientSecret() *string
```

- *Type:* *string

---

##### `Issuer`<sup>Required</sup> <a name="Issuer" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.issuer"></a>

```go
func Issuer() *string
```

- *Type:* *string

---

##### `Scope`<sup>Required</sup> <a name="Scope" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.scope"></a>

```go
func Scope() *string
```

- *Type:* *string

---

##### `TokenEndpoint`<sup>Required</sup> <a name="TokenEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.tokenEndpoint"></a>

```go
func TokenEndpoint() *string
```

- *Type:* *string

---

##### `UserInfoEndpoint`<sup>Required</sup> <a name="UserInfoEndpoint" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.userInfoEndpoint"></a>

```go
func UserInfoEndpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderOidcOptionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference <a name="Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.NewEc2VerifiedAccessTrustProviderSseSpecificationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetCustomerManagedKeyEnabled">ResetCustomerManagedKeyEnabled</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerManagedKeyEnabled` <a name="ResetCustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetCustomerManagedKeyEnabled"></a>

```go
func ResetCustomerManagedKeyEnabled()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabledInput">CustomerManagedKeyEnabledInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled">CustomerManagedKeyEnabled</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyEnabledInput`<sup>Optional</sup> <a name="CustomerManagedKeyEnabledInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabledInput"></a>

```go
func CustomerManagedKeyEnabledInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `CustomerManagedKeyEnabled`<sup>Required</sup> <a name="CustomerManagedKeyEnabled" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.customerManagedKeyEnabled"></a>

```go
func CustomerManagedKeyEnabled() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderSseSpecificationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessTrustProviderTagsList <a name="Ec2VerifiedAccessTrustProviderTagsList" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.NewEc2VerifiedAccessTrustProviderTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2VerifiedAccessTrustProviderTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.get"></a>

```go
func Get(index *f64) Ec2VerifiedAccessTrustProviderTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2VerifiedAccessTrustProviderTagsOutputReference <a name="Ec2VerifiedAccessTrustProviderTagsOutputReference" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2verifiedaccesstrustprovider"

ec2verifiedaccesstrustprovider.NewEc2VerifiedAccessTrustProviderTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2VerifiedAccessTrustProviderTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2VerifiedAccessTrustProvider.Ec2VerifiedAccessTrustProviderTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



