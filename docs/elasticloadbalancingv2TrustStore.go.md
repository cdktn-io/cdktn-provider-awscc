# `elasticloadbalancingv2TrustStore` Submodule <a name="`elasticloadbalancingv2TrustStore` Submodule" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Elasticloadbalancingv2TrustStore <a name="Elasticloadbalancingv2TrustStore" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store awscc_elasticloadbalancingv2_trust_store}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2truststore"

elasticloadbalancingv2truststore.NewElasticloadbalancingv2TrustStore(scope Construct, id *string, config Elasticloadbalancingv2TrustStoreConfig) Elasticloadbalancingv2TrustStore
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig">Elasticloadbalancingv2TrustStoreConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig">Elasticloadbalancingv2TrustStoreConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Bucket">ResetCaCertificatesBundleS3Bucket</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Key">ResetCaCertificatesBundleS3Key</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3ObjectVersion">ResetCaCertificatesBundleS3ObjectVersion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetCaCertificatesBundleS3Bucket` <a name="ResetCaCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Bucket"></a>

```go
func ResetCaCertificatesBundleS3Bucket()
```

##### `ResetCaCertificatesBundleS3Key` <a name="ResetCaCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3Key"></a>

```go
func ResetCaCertificatesBundleS3Key()
```

##### `ResetCaCertificatesBundleS3ObjectVersion` <a name="ResetCaCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetCaCertificatesBundleS3ObjectVersion"></a>

```go
func ResetCaCertificatesBundleS3ObjectVersion()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetName"></a>

```go
func ResetName()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Elasticloadbalancingv2TrustStore resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2truststore"

elasticloadbalancingv2truststore.Elasticloadbalancingv2TrustStore_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2truststore"

elasticloadbalancingv2truststore.Elasticloadbalancingv2TrustStore_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2truststore"

elasticloadbalancingv2truststore.Elasticloadbalancingv2TrustStore_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2truststore"

elasticloadbalancingv2truststore.Elasticloadbalancingv2TrustStore_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Elasticloadbalancingv2TrustStore resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Elasticloadbalancingv2TrustStore to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Elasticloadbalancingv2TrustStore that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Elasticloadbalancingv2TrustStore to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.numberOfCaCertificates">NumberOfCaCertificates</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList">Elasticloadbalancingv2TrustStoreTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.trustStoreArn">TrustStoreArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3BucketInput">CaCertificatesBundleS3BucketInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3KeyInput">CaCertificatesBundleS3KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersionInput">CaCertificatesBundleS3ObjectVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Bucket">CaCertificatesBundleS3Bucket</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Key">CaCertificatesBundleS3Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersion">CaCertificatesBundleS3ObjectVersion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.name">Name</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `NumberOfCaCertificates`<sup>Required</sup> <a name="NumberOfCaCertificates" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.numberOfCaCertificates"></a>

```go
func NumberOfCaCertificates() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tags"></a>

```go
func Tags() Elasticloadbalancingv2TrustStoreTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList">Elasticloadbalancingv2TrustStoreTagsList</a>

---

##### `TrustStoreArn`<sup>Required</sup> <a name="TrustStoreArn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.trustStoreArn"></a>

```go
func TrustStoreArn() *string
```

- *Type:* *string

---

##### `CaCertificatesBundleS3BucketInput`<sup>Optional</sup> <a name="CaCertificatesBundleS3BucketInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3BucketInput"></a>

```go
func CaCertificatesBundleS3BucketInput() *string
```

- *Type:* *string

---

##### `CaCertificatesBundleS3KeyInput`<sup>Optional</sup> <a name="CaCertificatesBundleS3KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3KeyInput"></a>

```go
func CaCertificatesBundleS3KeyInput() *string
```

- *Type:* *string

---

##### `CaCertificatesBundleS3ObjectVersionInput`<sup>Optional</sup> <a name="CaCertificatesBundleS3ObjectVersionInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersionInput"></a>

```go
func CaCertificatesBundleS3ObjectVersionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `CaCertificatesBundleS3Bucket`<sup>Required</sup> <a name="CaCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Bucket"></a>

```go
func CaCertificatesBundleS3Bucket() *string
```

- *Type:* *string

---

##### `CaCertificatesBundleS3Key`<sup>Required</sup> <a name="CaCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3Key"></a>

```go
func CaCertificatesBundleS3Key() *string
```

- *Type:* *string

---

##### `CaCertificatesBundleS3ObjectVersion`<sup>Required</sup> <a name="CaCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.caCertificatesBundleS3ObjectVersion"></a>

```go
func CaCertificatesBundleS3ObjectVersion() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStore.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Elasticloadbalancingv2TrustStoreConfig <a name="Elasticloadbalancingv2TrustStoreConfig" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2truststore"

&elasticloadbalancingv2truststore.Elasticloadbalancingv2TrustStoreConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	CaCertificatesBundleS3Bucket: *string,
	CaCertificatesBundleS3Key: *string,
	CaCertificatesBundleS3ObjectVersion: *string,
	Name: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Bucket">CaCertificatesBundleS3Bucket</a></code> | <code>*string</code> | The name of the S3 bucket to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Key">CaCertificatesBundleS3Key</a></code> | <code>*string</code> | The name of the S3 object to fetch the CA certificate bundle from. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3ObjectVersion">CaCertificatesBundleS3ObjectVersion</a></code> | <code>*string</code> | The version of the S3 bucket that contains the CA certificate bundle. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.name">Name</a></code> | <code>*string</code> | The name of the trust store. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags to assign to the trust store. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CaCertificatesBundleS3Bucket`<sup>Optional</sup> <a name="CaCertificatesBundleS3Bucket" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Bucket"></a>

```go
CaCertificatesBundleS3Bucket *string
```

- *Type:* *string

The name of the S3 bucket to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_bucket Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_bucket}

---

##### `CaCertificatesBundleS3Key`<sup>Optional</sup> <a name="CaCertificatesBundleS3Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3Key"></a>

```go
CaCertificatesBundleS3Key *string
```

- *Type:* *string

The name of the S3 object to fetch the CA certificate bundle from.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_key Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_key}

---

##### `CaCertificatesBundleS3ObjectVersion`<sup>Optional</sup> <a name="CaCertificatesBundleS3ObjectVersion" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.caCertificatesBundleS3ObjectVersion"></a>

```go
CaCertificatesBundleS3ObjectVersion *string
```

- *Type:* *string

The version of the S3 bucket that contains the CA certificate bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#ca_certificates_bundle_s3_object_version Elasticloadbalancingv2TrustStore#ca_certificates_bundle_s3_object_version}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#name Elasticloadbalancingv2TrustStore#name}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags to assign to the trust store.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#tags Elasticloadbalancingv2TrustStore#tags}

---

### Elasticloadbalancingv2TrustStoreTags <a name="Elasticloadbalancingv2TrustStoreTags" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2truststore"

&elasticloadbalancingv2truststore.Elasticloadbalancingv2TrustStoreTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#key Elasticloadbalancingv2TrustStore#key}. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#value Elasticloadbalancingv2TrustStore#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#key Elasticloadbalancingv2TrustStore#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/elasticloadbalancingv2_trust_store#value Elasticloadbalancingv2TrustStore#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Elasticloadbalancingv2TrustStoreTagsList <a name="Elasticloadbalancingv2TrustStoreTagsList" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2truststore"

elasticloadbalancingv2truststore.NewElasticloadbalancingv2TrustStoreTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Elasticloadbalancingv2TrustStoreTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get"></a>

```go
func Get(index *f64) Elasticloadbalancingv2TrustStoreTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Elasticloadbalancingv2TrustStoreTagsOutputReference <a name="Elasticloadbalancingv2TrustStoreTagsOutputReference" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/elasticloadbalancingv2truststore"

elasticloadbalancingv2truststore.NewElasticloadbalancingv2TrustStoreTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Elasticloadbalancingv2TrustStoreTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.elasticloadbalancingv2TrustStore.Elasticloadbalancingv2TrustStoreTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



