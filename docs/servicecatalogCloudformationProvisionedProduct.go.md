# `servicecatalogCloudformationProvisionedProduct` Submodule <a name="`servicecatalogCloudformationProvisionedProduct` Submodule" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### ServicecatalogCloudformationProvisionedProduct <a name="ServicecatalogCloudformationProvisionedProduct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product awscc_servicecatalog_cloudformation_provisioned_product}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.NewServicecatalogCloudformationProvisionedProduct(scope Construct, id *string, config ServicecatalogCloudformationProvisionedProductConfig) ServicecatalogCloudformationProvisionedProduct
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig">ServicecatalogCloudformationProvisionedProductConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig">ServicecatalogCloudformationProvisionedProductConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters">PutProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences">PutProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage">ResetAcceptLanguage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns">ResetNotificationArns</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId">ResetPathId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName">ResetPathName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId">ResetProductId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName">ResetProductName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName">ResetProvisionedProductName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId">ResetProvisioningArtifactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName">ResetProvisioningArtifactName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters">ResetProvisioningParameters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences">ResetProvisioningPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutProvisioningParameters` <a name="PutProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters"></a>

```go
func PutProvisioningParameters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningParameters.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProvisioningPreferences` <a name="PutProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences"></a>

```go
func PutProvisioningPreferences(value ServicecatalogCloudformationProvisionedProductProvisioningPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putProvisioningPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAcceptLanguage` <a name="ResetAcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetAcceptLanguage"></a>

```go
func ResetAcceptLanguage()
```

##### `ResetNotificationArns` <a name="ResetNotificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetNotificationArns"></a>

```go
func ResetNotificationArns()
```

##### `ResetPathId` <a name="ResetPathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathId"></a>

```go
func ResetPathId()
```

##### `ResetPathName` <a name="ResetPathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetPathName"></a>

```go
func ResetPathName()
```

##### `ResetProductId` <a name="ResetProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductId"></a>

```go
func ResetProductId()
```

##### `ResetProductName` <a name="ResetProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProductName"></a>

```go
func ResetProductName()
```

##### `ResetProvisionedProductName` <a name="ResetProvisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisionedProductName"></a>

```go
func ResetProvisionedProductName()
```

##### `ResetProvisioningArtifactId` <a name="ResetProvisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactId"></a>

```go
func ResetProvisioningArtifactId()
```

##### `ResetProvisioningArtifactName` <a name="ResetProvisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningArtifactName"></a>

```go
func ResetProvisioningArtifactName()
```

##### `ResetProvisioningParameters` <a name="ResetProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningParameters"></a>

```go
func ResetProvisioningParameters()
```

##### `ResetProvisioningPreferences` <a name="ResetProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetProvisioningPreferences"></a>

```go
func ResetProvisioningPreferences()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.ServicecatalogCloudformationProvisionedProduct_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.ServicecatalogCloudformationProvisionedProduct_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.ServicecatalogCloudformationProvisionedProduct_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.ServicecatalogCloudformationProvisionedProduct_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a ServicecatalogCloudformationProvisionedProduct resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the ServicecatalogCloudformationProvisionedProduct to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing ServicecatalogCloudformationProvisionedProduct that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the ServicecatalogCloudformationProvisionedProduct to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn">CloudformationStackArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs">Outputs</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.StringMap</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId">ProvisionedProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters">ProvisioningParameters</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences">ProvisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId">RecordId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput">AcceptLanguageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput">NotificationArnsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput">PathIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput">PathNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput">ProductIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput">ProductNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput">ProvisionedProductNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput">ProvisioningArtifactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput">ProvisioningArtifactNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput">ProvisioningParametersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput">ProvisioningPreferencesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns">NotificationArns</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId">PathId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName">PathName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId">ProductId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName">ProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName">ProvisionedProductName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName">ProvisioningArtifactName</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `CloudformationStackArn`<sup>Required</sup> <a name="CloudformationStackArn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.cloudformationStackArn"></a>

```go
func CloudformationStackArn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Outputs`<sup>Required</sup> <a name="Outputs" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.outputs"></a>

```go
func Outputs() StringMap
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.StringMap

---

##### `ProvisionedProductId`<sup>Required</sup> <a name="ProvisionedProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductId"></a>

```go
func ProvisionedProductId() *string
```

- *Type:* *string

---

##### `ProvisioningParameters`<sup>Required</sup> <a name="ProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParameters"></a>

```go
func ProvisioningParameters() ServicecatalogCloudformationProvisionedProductProvisioningParametersList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList">ServicecatalogCloudformationProvisionedProductProvisioningParametersList</a>

---

##### `ProvisioningPreferences`<sup>Required</sup> <a name="ProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferences"></a>

```go
func ProvisioningPreferences() ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference">ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference</a>

---

##### `RecordId`<sup>Required</sup> <a name="RecordId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.recordId"></a>

```go
func RecordId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tags"></a>

```go
func Tags() ServicecatalogCloudformationProvisionedProductTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList">ServicecatalogCloudformationProvisionedProductTagsList</a>

---

##### `AcceptLanguageInput`<sup>Optional</sup> <a name="AcceptLanguageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguageInput"></a>

```go
func AcceptLanguageInput() *string
```

- *Type:* *string

---

##### `NotificationArnsInput`<sup>Optional</sup> <a name="NotificationArnsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArnsInput"></a>

```go
func NotificationArnsInput() *[]*string
```

- *Type:* *[]*string

---

##### `PathIdInput`<sup>Optional</sup> <a name="PathIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathIdInput"></a>

```go
func PathIdInput() *string
```

- *Type:* *string

---

##### `PathNameInput`<sup>Optional</sup> <a name="PathNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathNameInput"></a>

```go
func PathNameInput() *string
```

- *Type:* *string

---

##### `ProductIdInput`<sup>Optional</sup> <a name="ProductIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productIdInput"></a>

```go
func ProductIdInput() *string
```

- *Type:* *string

---

##### `ProductNameInput`<sup>Optional</sup> <a name="ProductNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productNameInput"></a>

```go
func ProductNameInput() *string
```

- *Type:* *string

---

##### `ProvisionedProductNameInput`<sup>Optional</sup> <a name="ProvisionedProductNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductNameInput"></a>

```go
func ProvisionedProductNameInput() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactIdInput`<sup>Optional</sup> <a name="ProvisioningArtifactIdInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactIdInput"></a>

```go
func ProvisioningArtifactIdInput() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactNameInput`<sup>Optional</sup> <a name="ProvisioningArtifactNameInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactNameInput"></a>

```go
func ProvisioningArtifactNameInput() *string
```

- *Type:* *string

---

##### `ProvisioningParametersInput`<sup>Optional</sup> <a name="ProvisioningParametersInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningParametersInput"></a>

```go
func ProvisioningParametersInput() interface{}
```

- *Type:* interface{}

---

##### `ProvisioningPreferencesInput`<sup>Optional</sup> <a name="ProvisioningPreferencesInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningPreferencesInput"></a>

```go
func ProvisioningPreferencesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AcceptLanguage`<sup>Required</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.acceptLanguage"></a>

```go
func AcceptLanguage() *string
```

- *Type:* *string

---

##### `NotificationArns`<sup>Required</sup> <a name="NotificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.notificationArns"></a>

```go
func NotificationArns() *[]*string
```

- *Type:* *[]*string

---

##### `PathId`<sup>Required</sup> <a name="PathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathId"></a>

```go
func PathId() *string
```

- *Type:* *string

---

##### `PathName`<sup>Required</sup> <a name="PathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.pathName"></a>

```go
func PathName() *string
```

- *Type:* *string

---

##### `ProductId`<sup>Required</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productId"></a>

```go
func ProductId() *string
```

- *Type:* *string

---

##### `ProductName`<sup>Required</sup> <a name="ProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.productName"></a>

```go
func ProductName() *string
```

- *Type:* *string

---

##### `ProvisionedProductName`<sup>Required</sup> <a name="ProvisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisionedProductName"></a>

```go
func ProvisionedProductName() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactId`<sup>Required</sup> <a name="ProvisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactId"></a>

```go
func ProvisioningArtifactId() *string
```

- *Type:* *string

---

##### `ProvisioningArtifactName`<sup>Required</sup> <a name="ProvisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.provisioningArtifactName"></a>

```go
func ProvisioningArtifactName() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProduct.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### ServicecatalogCloudformationProvisionedProductConfig <a name="ServicecatalogCloudformationProvisionedProductConfig" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

&servicecatalogcloudformationprovisionedproduct.ServicecatalogCloudformationProvisionedProductConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AcceptLanguage: *string,
	NotificationArns: *[]*string,
	PathId: *string,
	PathName: *string,
	ProductId: *string,
	ProductName: *string,
	ProvisionedProductName: *string,
	ProvisioningArtifactId: *string,
	ProvisioningArtifactName: *string,
	ProvisioningParameters: interface{},
	ProvisioningPreferences: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage">AcceptLanguage</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns">NotificationArns</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId">PathId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName">PathName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId">ProductId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName">ProductName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName">ProvisionedProductName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId">ProvisioningArtifactId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName">ProvisioningArtifactName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters">ProvisioningParameters</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences">ProvisioningPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AcceptLanguage`<sup>Optional</sup> <a name="AcceptLanguage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.acceptLanguage"></a>

```go
AcceptLanguage *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#accept_language ServicecatalogCloudformationProvisionedProduct#accept_language}.

---

##### `NotificationArns`<sup>Optional</sup> <a name="NotificationArns" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.notificationArns"></a>

```go
NotificationArns *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#notification_arns ServicecatalogCloudformationProvisionedProduct#notification_arns}.

---

##### `PathId`<sup>Optional</sup> <a name="PathId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathId"></a>

```go
PathId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_id ServicecatalogCloudformationProvisionedProduct#path_id}.

---

##### `PathName`<sup>Optional</sup> <a name="PathName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.pathName"></a>

```go
PathName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#path_name ServicecatalogCloudformationProvisionedProduct#path_name}.

---

##### `ProductId`<sup>Optional</sup> <a name="ProductId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productId"></a>

```go
ProductId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_id ServicecatalogCloudformationProvisionedProduct#product_id}.

---

##### `ProductName`<sup>Optional</sup> <a name="ProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.productName"></a>

```go
ProductName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#product_name ServicecatalogCloudformationProvisionedProduct#product_name}.

---

##### `ProvisionedProductName`<sup>Optional</sup> <a name="ProvisionedProductName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisionedProductName"></a>

```go
ProvisionedProductName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioned_product_name ServicecatalogCloudformationProvisionedProduct#provisioned_product_name}.

---

##### `ProvisioningArtifactId`<sup>Optional</sup> <a name="ProvisioningArtifactId" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactId"></a>

```go
ProvisioningArtifactId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_id ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_id}.

---

##### `ProvisioningArtifactName`<sup>Optional</sup> <a name="ProvisioningArtifactName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningArtifactName"></a>

```go
ProvisioningArtifactName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_artifact_name ServicecatalogCloudformationProvisionedProduct#provisioning_artifact_name}.

---

##### `ProvisioningParameters`<sup>Optional</sup> <a name="ProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningParameters"></a>

```go
ProvisioningParameters interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_parameters ServicecatalogCloudformationProvisionedProduct#provisioning_parameters}.

---

##### `ProvisioningPreferences`<sup>Optional</sup> <a name="ProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.provisioningPreferences"></a>

```go
ProvisioningPreferences ServicecatalogCloudformationProvisionedProductProvisioningPreferences
```

- *Type:* <a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences">ServicecatalogCloudformationProvisionedProductProvisioningPreferences</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#provisioning_preferences ServicecatalogCloudformationProvisionedProduct#provisioning_preferences}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#tags ServicecatalogCloudformationProvisionedProduct#tags}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningParameters <a name="ServicecatalogCloudformationProvisionedProductProvisioningParameters" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

&servicecatalogcloudformationprovisionedproduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParameters.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

### ServicecatalogCloudformationProvisionedProductProvisioningPreferences <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferences" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

&servicecatalogcloudformationprovisionedproduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences {
	StackSetAccounts: *[]*string,
	StackSetFailureToleranceCount: *f64,
	StackSetFailureTolerancePercentage: *f64,
	StackSetMaxConcurrencyCount: *f64,
	StackSetMaxConcurrencyPercentage: *f64,
	StackSetOperationType: *string,
	StackSetRegions: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts">StackSetAccounts</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount">StackSetFailureToleranceCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage">StackSetFailureTolerancePercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount">StackSetMaxConcurrencyCount</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage">StackSetMaxConcurrencyPercentage</a></code> | <code>*f64</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType">StackSetOperationType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions">StackSetRegions</a></code> | <code>*[]*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}. |

---

##### `StackSetAccounts`<sup>Optional</sup> <a name="StackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetAccounts"></a>

```go
StackSetAccounts *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_accounts ServicecatalogCloudformationProvisionedProduct#stack_set_accounts}.

---

##### `StackSetFailureToleranceCount`<sup>Optional</sup> <a name="StackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureToleranceCount"></a>

```go
StackSetFailureToleranceCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_count ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_count}.

---

##### `StackSetFailureTolerancePercentage`<sup>Optional</sup> <a name="StackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetFailureTolerancePercentage"></a>

```go
StackSetFailureTolerancePercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_failure_tolerance_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_failure_tolerance_percentage}.

---

##### `StackSetMaxConcurrencyCount`<sup>Optional</sup> <a name="StackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyCount"></a>

```go
StackSetMaxConcurrencyCount *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_count ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_count}.

---

##### `StackSetMaxConcurrencyPercentage`<sup>Optional</sup> <a name="StackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetMaxConcurrencyPercentage"></a>

```go
StackSetMaxConcurrencyPercentage *f64
```

- *Type:* *f64

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_max_concurrency_percentage ServicecatalogCloudformationProvisionedProduct#stack_set_max_concurrency_percentage}.

---

##### `StackSetOperationType`<sup>Optional</sup> <a name="StackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetOperationType"></a>

```go
StackSetOperationType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_operation_type ServicecatalogCloudformationProvisionedProduct#stack_set_operation_type}.

---

##### `StackSetRegions`<sup>Optional</sup> <a name="StackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferences.property.stackSetRegions"></a>

```go
StackSetRegions *[]*string
```

- *Type:* *[]*string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#stack_set_regions ServicecatalogCloudformationProvisionedProduct#stack_set_regions}.

---

### ServicecatalogCloudformationProvisionedProductTags <a name="ServicecatalogCloudformationProvisionedProductTags" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

&servicecatalogcloudformationprovisionedproduct.ServicecatalogCloudformationProvisionedProductTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#key ServicecatalogCloudformationProvisionedProduct#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/servicecatalog_cloudformation_provisioned_product#value ServicecatalogCloudformationProvisionedProduct#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### ServicecatalogCloudformationProvisionedProductProvisioningParametersList <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.NewServicecatalogCloudformationProvisionedProductProvisioningParametersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicecatalogCloudformationProvisionedProductProvisioningParametersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get"></a>

```go
func Get(index *f64) ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.NewServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningParametersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference <a name="ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.NewServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts">ResetStackSetAccounts</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount">ResetStackSetFailureToleranceCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage">ResetStackSetFailureTolerancePercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount">ResetStackSetMaxConcurrencyCount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage">ResetStackSetMaxConcurrencyPercentage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType">ResetStackSetOperationType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions">ResetStackSetRegions</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetStackSetAccounts` <a name="ResetStackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetAccounts"></a>

```go
func ResetStackSetAccounts()
```

##### `ResetStackSetFailureToleranceCount` <a name="ResetStackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureToleranceCount"></a>

```go
func ResetStackSetFailureToleranceCount()
```

##### `ResetStackSetFailureTolerancePercentage` <a name="ResetStackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetFailureTolerancePercentage"></a>

```go
func ResetStackSetFailureTolerancePercentage()
```

##### `ResetStackSetMaxConcurrencyCount` <a name="ResetStackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyCount"></a>

```go
func ResetStackSetMaxConcurrencyCount()
```

##### `ResetStackSetMaxConcurrencyPercentage` <a name="ResetStackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetMaxConcurrencyPercentage"></a>

```go
func ResetStackSetMaxConcurrencyPercentage()
```

##### `ResetStackSetOperationType` <a name="ResetStackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetOperationType"></a>

```go
func ResetStackSetOperationType()
```

##### `ResetStackSetRegions` <a name="ResetStackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.resetStackSetRegions"></a>

```go
func ResetStackSetRegions()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput">StackSetAccountsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput">StackSetFailureToleranceCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput">StackSetFailureTolerancePercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput">StackSetMaxConcurrencyCountInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput">StackSetMaxConcurrencyPercentageInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput">StackSetOperationTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput">StackSetRegionsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts">StackSetAccounts</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount">StackSetFailureToleranceCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage">StackSetFailureTolerancePercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount">StackSetMaxConcurrencyCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage">StackSetMaxConcurrencyPercentage</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType">StackSetOperationType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions">StackSetRegions</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `StackSetAccountsInput`<sup>Optional</sup> <a name="StackSetAccountsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccountsInput"></a>

```go
func StackSetAccountsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StackSetFailureToleranceCountInput`<sup>Optional</sup> <a name="StackSetFailureToleranceCountInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCountInput"></a>

```go
func StackSetFailureToleranceCountInput() *f64
```

- *Type:* *f64

---

##### `StackSetFailureTolerancePercentageInput`<sup>Optional</sup> <a name="StackSetFailureTolerancePercentageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentageInput"></a>

```go
func StackSetFailureTolerancePercentageInput() *f64
```

- *Type:* *f64

---

##### `StackSetMaxConcurrencyCountInput`<sup>Optional</sup> <a name="StackSetMaxConcurrencyCountInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCountInput"></a>

```go
func StackSetMaxConcurrencyCountInput() *f64
```

- *Type:* *f64

---

##### `StackSetMaxConcurrencyPercentageInput`<sup>Optional</sup> <a name="StackSetMaxConcurrencyPercentageInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentageInput"></a>

```go
func StackSetMaxConcurrencyPercentageInput() *f64
```

- *Type:* *f64

---

##### `StackSetOperationTypeInput`<sup>Optional</sup> <a name="StackSetOperationTypeInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationTypeInput"></a>

```go
func StackSetOperationTypeInput() *string
```

- *Type:* *string

---

##### `StackSetRegionsInput`<sup>Optional</sup> <a name="StackSetRegionsInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegionsInput"></a>

```go
func StackSetRegionsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StackSetAccounts`<sup>Required</sup> <a name="StackSetAccounts" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetAccounts"></a>

```go
func StackSetAccounts() *[]*string
```

- *Type:* *[]*string

---

##### `StackSetFailureToleranceCount`<sup>Required</sup> <a name="StackSetFailureToleranceCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureToleranceCount"></a>

```go
func StackSetFailureToleranceCount() *f64
```

- *Type:* *f64

---

##### `StackSetFailureTolerancePercentage`<sup>Required</sup> <a name="StackSetFailureTolerancePercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetFailureTolerancePercentage"></a>

```go
func StackSetFailureTolerancePercentage() *f64
```

- *Type:* *f64

---

##### `StackSetMaxConcurrencyCount`<sup>Required</sup> <a name="StackSetMaxConcurrencyCount" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyCount"></a>

```go
func StackSetMaxConcurrencyCount() *f64
```

- *Type:* *f64

---

##### `StackSetMaxConcurrencyPercentage`<sup>Required</sup> <a name="StackSetMaxConcurrencyPercentage" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetMaxConcurrencyPercentage"></a>

```go
func StackSetMaxConcurrencyPercentage() *f64
```

- *Type:* *f64

---

##### `StackSetOperationType`<sup>Required</sup> <a name="StackSetOperationType" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetOperationType"></a>

```go
func StackSetOperationType() *string
```

- *Type:* *string

---

##### `StackSetRegions`<sup>Required</sup> <a name="StackSetRegions" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.stackSetRegions"></a>

```go
func StackSetRegions() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductProvisioningPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProvisionedProductTagsList <a name="ServicecatalogCloudformationProvisionedProductTagsList" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.NewServicecatalogCloudformationProvisionedProductTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) ServicecatalogCloudformationProvisionedProductTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get"></a>

```go
func Get(index *f64) ServicecatalogCloudformationProvisionedProductTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### ServicecatalogCloudformationProvisionedProductTagsOutputReference <a name="ServicecatalogCloudformationProvisionedProductTagsOutputReference" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/servicecatalogcloudformationprovisionedproduct"

servicecatalogcloudformationprovisionedproduct.NewServicecatalogCloudformationProvisionedProductTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) ServicecatalogCloudformationProvisionedProductTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.servicecatalogCloudformationProvisionedProduct.ServicecatalogCloudformationProvisionedProductTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



