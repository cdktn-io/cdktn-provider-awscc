# `ec2IpamPool` Submodule <a name="`ec2IpamPool` Submodule" id="@cdktn/provider-awscc.ec2IpamPool"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2IpamPool <a name="Ec2IpamPool" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool awscc_ec2_ipam_pool}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.NewEc2IpamPool(scope Construct, id *string, config Ec2IpamPoolConfig) Ec2IpamPool
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig">Ec2IpamPoolConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig">Ec2IpamPoolConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags">PutAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs">PutProvisionedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource">PutSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationDefaultNetmaskLength">ResetAllocationDefaultNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMaxNetmaskLength">ResetAllocationMaxNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMinNetmaskLength">ResetAllocationMinNetmaskLength</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationResourceTags">ResetAllocationResourceTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAutoImport">ResetAutoImport</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAwsService">ResetAwsService</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetLocale">ResetLocale</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetProvisionedCidrs">ResetProvisionedCidrs</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPublicIpSource">ResetPublicIpSource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPubliclyAdvertisable">ResetPubliclyAdvertisable</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceIpamPoolId">ResetSourceIpamPoolId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceResource">ResetSourceResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAllocationResourceTags` <a name="PutAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags"></a>

```go
func PutAllocationResourceTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putAllocationResourceTags.parameter.value"></a>

- *Type:* interface{}

---

##### `PutProvisionedCidrs` <a name="PutProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs"></a>

```go
func PutProvisionedCidrs(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putProvisionedCidrs.parameter.value"></a>

- *Type:* interface{}

---

##### `PutSourceResource` <a name="PutSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource"></a>

```go
func PutSourceResource(value Ec2IpamPoolSourceResource)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putSourceResource.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAllocationDefaultNetmaskLength` <a name="ResetAllocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationDefaultNetmaskLength"></a>

```go
func ResetAllocationDefaultNetmaskLength()
```

##### `ResetAllocationMaxNetmaskLength` <a name="ResetAllocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMaxNetmaskLength"></a>

```go
func ResetAllocationMaxNetmaskLength()
```

##### `ResetAllocationMinNetmaskLength` <a name="ResetAllocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationMinNetmaskLength"></a>

```go
func ResetAllocationMinNetmaskLength()
```

##### `ResetAllocationResourceTags` <a name="ResetAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAllocationResourceTags"></a>

```go
func ResetAllocationResourceTags()
```

##### `ResetAutoImport` <a name="ResetAutoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAutoImport"></a>

```go
func ResetAutoImport()
```

##### `ResetAwsService` <a name="ResetAwsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetAwsService"></a>

```go
func ResetAwsService()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetLocale` <a name="ResetLocale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetLocale"></a>

```go
func ResetLocale()
```

##### `ResetProvisionedCidrs` <a name="ResetProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetProvisionedCidrs"></a>

```go
func ResetProvisionedCidrs()
```

##### `ResetPublicIpSource` <a name="ResetPublicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPublicIpSource"></a>

```go
func ResetPublicIpSource()
```

##### `ResetPubliclyAdvertisable` <a name="ResetPubliclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetPubliclyAdvertisable"></a>

```go
func ResetPubliclyAdvertisable()
```

##### `ResetSourceIpamPoolId` <a name="ResetSourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceIpamPoolId"></a>

```go
func ResetSourceIpamPoolId()
```

##### `ResetSourceResource` <a name="ResetSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetSourceResource"></a>

```go
func ResetSourceResource()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2IpamPool resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.Ec2IpamPool_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.Ec2IpamPool_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.Ec2IpamPool_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.Ec2IpamPool_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2IpamPool resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2IpamPool to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2IpamPool that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2IpamPool to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTags">AllocationResourceTags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList">Ec2IpamPoolAllocationResourceTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamArn">IpamArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamPoolId">IpamPoolId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeArn">IpamScopeArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeType">IpamScopeType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.poolDepth">PoolDepth</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrs">ProvisionedCidrs</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList">Ec2IpamPoolProvisionedCidrsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResource">SourceResource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference">Ec2IpamPoolSourceResourceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.stateMessage">StateMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList">Ec2IpamPoolTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamilyInput">AddressFamilyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLengthInput">AllocationDefaultNetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLengthInput">AllocationMaxNetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLengthInput">AllocationMinNetmaskLengthInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTagsInput">AllocationResourceTagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImportInput">AutoImportInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsServiceInput">AwsServiceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeIdInput">IpamScopeIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.localeInput">LocaleInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrsInput">ProvisionedCidrsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSourceInput">PublicIpSourceInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisableInput">PubliclyAdvertisableInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolIdInput">SourceIpamPoolIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResourceInput">SourceResourceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLength">AllocationDefaultNetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLength">AllocationMaxNetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLength">AllocationMinNetmaskLength</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImport">AutoImport</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsService">AwsService</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeId">IpamScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.locale">Locale</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSource">PublicIpSource</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisable">PubliclyAdvertisable</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolId">SourceIpamPoolId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AllocationResourceTags`<sup>Required</sup> <a name="AllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTags"></a>

```go
func AllocationResourceTags() Ec2IpamPoolAllocationResourceTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList">Ec2IpamPoolAllocationResourceTagsList</a>

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpamArn`<sup>Required</sup> <a name="IpamArn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamArn"></a>

```go
func IpamArn() *string
```

- *Type:* *string

---

##### `IpamPoolId`<sup>Required</sup> <a name="IpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamPoolId"></a>

```go
func IpamPoolId() *string
```

- *Type:* *string

---

##### `IpamScopeArn`<sup>Required</sup> <a name="IpamScopeArn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeArn"></a>

```go
func IpamScopeArn() *string
```

- *Type:* *string

---

##### `IpamScopeType`<sup>Required</sup> <a name="IpamScopeType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeType"></a>

```go
func IpamScopeType() *string
```

- *Type:* *string

---

##### `PoolDepth`<sup>Required</sup> <a name="PoolDepth" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.poolDepth"></a>

```go
func PoolDepth() *f64
```

- *Type:* *f64

---

##### `ProvisionedCidrs`<sup>Required</sup> <a name="ProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrs"></a>

```go
func ProvisionedCidrs() Ec2IpamPoolProvisionedCidrsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList">Ec2IpamPoolProvisionedCidrsList</a>

---

##### `SourceResource`<sup>Required</sup> <a name="SourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResource"></a>

```go
func SourceResource() Ec2IpamPoolSourceResourceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference">Ec2IpamPoolSourceResourceOutputReference</a>

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `StateMessage`<sup>Required</sup> <a name="StateMessage" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.stateMessage"></a>

```go
func StateMessage() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tags"></a>

```go
func Tags() Ec2IpamPoolTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList">Ec2IpamPoolTagsList</a>

---

##### `AddressFamilyInput`<sup>Optional</sup> <a name="AddressFamilyInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamilyInput"></a>

```go
func AddressFamilyInput() *string
```

- *Type:* *string

---

##### `AllocationDefaultNetmaskLengthInput`<sup>Optional</sup> <a name="AllocationDefaultNetmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLengthInput"></a>

```go
func AllocationDefaultNetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `AllocationMaxNetmaskLengthInput`<sup>Optional</sup> <a name="AllocationMaxNetmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLengthInput"></a>

```go
func AllocationMaxNetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `AllocationMinNetmaskLengthInput`<sup>Optional</sup> <a name="AllocationMinNetmaskLengthInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLengthInput"></a>

```go
func AllocationMinNetmaskLengthInput() *f64
```

- *Type:* *f64

---

##### `AllocationResourceTagsInput`<sup>Optional</sup> <a name="AllocationResourceTagsInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationResourceTagsInput"></a>

```go
func AllocationResourceTagsInput() interface{}
```

- *Type:* interface{}

---

##### `AutoImportInput`<sup>Optional</sup> <a name="AutoImportInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImportInput"></a>

```go
func AutoImportInput() interface{}
```

- *Type:* interface{}

---

##### `AwsServiceInput`<sup>Optional</sup> <a name="AwsServiceInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsServiceInput"></a>

```go
func AwsServiceInput() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `IpamScopeIdInput`<sup>Optional</sup> <a name="IpamScopeIdInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeIdInput"></a>

```go
func IpamScopeIdInput() *string
```

- *Type:* *string

---

##### `LocaleInput`<sup>Optional</sup> <a name="LocaleInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.localeInput"></a>

```go
func LocaleInput() *string
```

- *Type:* *string

---

##### `ProvisionedCidrsInput`<sup>Optional</sup> <a name="ProvisionedCidrsInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.provisionedCidrsInput"></a>

```go
func ProvisionedCidrsInput() interface{}
```

- *Type:* interface{}

---

##### `PublicIpSourceInput`<sup>Optional</sup> <a name="PublicIpSourceInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSourceInput"></a>

```go
func PublicIpSourceInput() *string
```

- *Type:* *string

---

##### `PubliclyAdvertisableInput`<sup>Optional</sup> <a name="PubliclyAdvertisableInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisableInput"></a>

```go
func PubliclyAdvertisableInput() interface{}
```

- *Type:* interface{}

---

##### `SourceIpamPoolIdInput`<sup>Optional</sup> <a name="SourceIpamPoolIdInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolIdInput"></a>

```go
func SourceIpamPoolIdInput() *string
```

- *Type:* *string

---

##### `SourceResourceInput`<sup>Optional</sup> <a name="SourceResourceInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceResourceInput"></a>

```go
func SourceResourceInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.addressFamily"></a>

```go
func AddressFamily() *string
```

- *Type:* *string

---

##### `AllocationDefaultNetmaskLength`<sup>Required</sup> <a name="AllocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationDefaultNetmaskLength"></a>

```go
func AllocationDefaultNetmaskLength() *f64
```

- *Type:* *f64

---

##### `AllocationMaxNetmaskLength`<sup>Required</sup> <a name="AllocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMaxNetmaskLength"></a>

```go
func AllocationMaxNetmaskLength() *f64
```

- *Type:* *f64

---

##### `AllocationMinNetmaskLength`<sup>Required</sup> <a name="AllocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.allocationMinNetmaskLength"></a>

```go
func AllocationMinNetmaskLength() *f64
```

- *Type:* *f64

---

##### `AutoImport`<sup>Required</sup> <a name="AutoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.autoImport"></a>

```go
func AutoImport() interface{}
```

- *Type:* interface{}

---

##### `AwsService`<sup>Required</sup> <a name="AwsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.awsService"></a>

```go
func AwsService() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `IpamScopeId`<sup>Required</sup> <a name="IpamScopeId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.ipamScopeId"></a>

```go
func IpamScopeId() *string
```

- *Type:* *string

---

##### `Locale`<sup>Required</sup> <a name="Locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.locale"></a>

```go
func Locale() *string
```

- *Type:* *string

---

##### `PublicIpSource`<sup>Required</sup> <a name="PublicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publicIpSource"></a>

```go
func PublicIpSource() *string
```

- *Type:* *string

---

##### `PubliclyAdvertisable`<sup>Required</sup> <a name="PubliclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.publiclyAdvertisable"></a>

```go
func PubliclyAdvertisable() interface{}
```

- *Type:* interface{}

---

##### `SourceIpamPoolId`<sup>Required</sup> <a name="SourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.sourceIpamPoolId"></a>

```go
func SourceIpamPoolId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPool.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamPoolAllocationResourceTags <a name="Ec2IpamPoolAllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

&ec2ipampool.Ec2IpamPoolAllocationResourceTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#key Ec2IpamPool#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#value Ec2IpamPool#value}

---

### Ec2IpamPoolConfig <a name="Ec2IpamPoolConfig" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

&ec2ipampool.Ec2IpamPoolConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AddressFamily: *string,
	IpamScopeId: *string,
	AllocationDefaultNetmaskLength: *f64,
	AllocationMaxNetmaskLength: *f64,
	AllocationMinNetmaskLength: *f64,
	AllocationResourceTags: interface{},
	AutoImport: interface{},
	AwsService: *string,
	Description: *string,
	Locale: *string,
	ProvisionedCidrs: interface{},
	PublicIpSource: *string,
	PubliclyAdvertisable: interface{},
	SourceIpamPoolId: *string,
	SourceResource: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ec2IpamPool.Ec2IpamPoolSourceResource,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.addressFamily">AddressFamily</a></code> | <code>*string</code> | The address family of the address space in this pool. Either IPv4 or IPv6. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.ipamScopeId">IpamScopeId</a></code> | <code>*string</code> | The Id of the scope this pool is a part of. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationDefaultNetmaskLength">AllocationDefaultNetmaskLength</a></code> | <code>*f64</code> | The default netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMaxNetmaskLength">AllocationMaxNetmaskLength</a></code> | <code>*f64</code> | The maximum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMinNetmaskLength">AllocationMinNetmaskLength</a></code> | <code>*f64</code> | The minimum allowed netmask length for allocations made from this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationResourceTags">AllocationResourceTags</a></code> | <code>interface{}</code> | When specified, an allocation will not be allowed unless a resource has a matching set of tags. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.autoImport">AutoImport</a></code> | <code>interface{}</code> | Determines what to do if IPAM discovers resources that haven't been assigned an allocation. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.awsService">AwsService</a></code> | <code>*string</code> | Limits which service in Amazon Web Services that the pool can be used in. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.locale">Locale</a></code> | <code>*string</code> | The region of this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisionedCidrs">ProvisionedCidrs</a></code> | <code>interface{}</code> | A list of cidrs representing the address space available for allocation in this pool. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publicIpSource">PublicIpSource</a></code> | <code>*string</code> | The IP address source for pools in the public scope. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publiclyAdvertisable">PubliclyAdvertisable</a></code> | <code>interface{}</code> | Determines whether or not address space from this pool is publicly advertised. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceIpamPoolId">SourceIpamPoolId</a></code> | <code>*string</code> | The Id of this pool's source. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceResource">SourceResource</a></code> | <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a></code> | The resource associated with this pool's space. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AddressFamily`<sup>Required</sup> <a name="AddressFamily" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.addressFamily"></a>

```go
AddressFamily *string
```

- *Type:* *string

The address family of the address space in this pool. Either IPv4 or IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#address_family Ec2IpamPool#address_family}

---

##### `IpamScopeId`<sup>Required</sup> <a name="IpamScopeId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.ipamScopeId"></a>

```go
IpamScopeId *string
```

- *Type:* *string

The Id of the scope this pool is a part of.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#ipam_scope_id Ec2IpamPool#ipam_scope_id}

---

##### `AllocationDefaultNetmaskLength`<sup>Optional</sup> <a name="AllocationDefaultNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationDefaultNetmaskLength"></a>

```go
AllocationDefaultNetmaskLength *f64
```

- *Type:* *f64

The default netmask length for allocations made from this pool.

This value is used when the netmask length of an allocation isn't specified.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#allocation_default_netmask_length Ec2IpamPool#allocation_default_netmask_length}

---

##### `AllocationMaxNetmaskLength`<sup>Optional</sup> <a name="AllocationMaxNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMaxNetmaskLength"></a>

```go
AllocationMaxNetmaskLength *f64
```

- *Type:* *f64

The maximum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#allocation_max_netmask_length Ec2IpamPool#allocation_max_netmask_length}

---

##### `AllocationMinNetmaskLength`<sup>Optional</sup> <a name="AllocationMinNetmaskLength" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationMinNetmaskLength"></a>

```go
AllocationMinNetmaskLength *f64
```

- *Type:* *f64

The minimum allowed netmask length for allocations made from this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#allocation_min_netmask_length Ec2IpamPool#allocation_min_netmask_length}

---

##### `AllocationResourceTags`<sup>Optional</sup> <a name="AllocationResourceTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.allocationResourceTags"></a>

```go
AllocationResourceTags interface{}
```

- *Type:* interface{}

When specified, an allocation will not be allowed unless a resource has a matching set of tags.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#allocation_resource_tags Ec2IpamPool#allocation_resource_tags}

---

##### `AutoImport`<sup>Optional</sup> <a name="AutoImport" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.autoImport"></a>

```go
AutoImport interface{}
```

- *Type:* interface{}

Determines what to do if IPAM discovers resources that haven't been assigned an allocation.

If set to true, an allocation will be made automatically.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#auto_import Ec2IpamPool#auto_import}

---

##### `AwsService`<sup>Optional</sup> <a name="AwsService" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.awsService"></a>

```go
AwsService *string
```

- *Type:* *string

Limits which service in Amazon Web Services that the pool can be used in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#aws_service Ec2IpamPool#aws_service}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#description Ec2IpamPool#description}.

---

##### `Locale`<sup>Optional</sup> <a name="Locale" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.locale"></a>

```go
Locale *string
```

- *Type:* *string

The region of this pool.

If not set, this will default to "None" which will disable non-custom allocations. If the locale has been specified for the source pool, this value must match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#locale Ec2IpamPool#locale}

---

##### `ProvisionedCidrs`<sup>Optional</sup> <a name="ProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.provisionedCidrs"></a>

```go
ProvisionedCidrs interface{}
```

- *Type:* interface{}

A list of cidrs representing the address space available for allocation in this pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#provisioned_cidrs Ec2IpamPool#provisioned_cidrs}

---

##### `PublicIpSource`<sup>Optional</sup> <a name="PublicIpSource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publicIpSource"></a>

```go
PublicIpSource *string
```

- *Type:* *string

The IP address source for pools in the public scope.

Only used for provisioning IP address CIDRs to pools in the public scope. Default is `byoip`.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#public_ip_source Ec2IpamPool#public_ip_source}

---

##### `PubliclyAdvertisable`<sup>Optional</sup> <a name="PubliclyAdvertisable" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.publiclyAdvertisable"></a>

```go
PubliclyAdvertisable interface{}
```

- *Type:* interface{}

Determines whether or not address space from this pool is publicly advertised.

Must be set if and only if the pool is IPv6.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#publicly_advertisable Ec2IpamPool#publicly_advertisable}

---

##### `SourceIpamPoolId`<sup>Optional</sup> <a name="SourceIpamPoolId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceIpamPoolId"></a>

```go
SourceIpamPoolId *string
```

- *Type:* *string

The Id of this pool's source.

If set, all space provisioned in this pool must be free space provisioned in the parent pool.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#source_ipam_pool_id Ec2IpamPool#source_ipam_pool_id}

---

##### `SourceResource`<sup>Optional</sup> <a name="SourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.sourceResource"></a>

```go
SourceResource Ec2IpamPoolSourceResource
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource">Ec2IpamPoolSourceResource</a>

The resource associated with this pool's space.

Depending on the ResourceType, setting a SourceResource changes which space can be provisioned in this pool and which types of resources can receive allocations

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#source_resource Ec2IpamPool#source_resource}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#tags Ec2IpamPool#tags}

---

### Ec2IpamPoolProvisionedCidrs <a name="Ec2IpamPoolProvisionedCidrs" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

&ec2ipampool.Ec2IpamPoolProvisionedCidrs {
	Cidr: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.property.cidr">Cidr</a></code> | <code>*string</code> | Represents a single IPv4 or IPv6 CIDR. |

---

##### `Cidr`<sup>Optional</sup> <a name="Cidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrs.property.cidr"></a>

```go
Cidr *string
```

- *Type:* *string

Represents a single IPv4 or IPv6 CIDR.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#cidr Ec2IpamPool#cidr}

---

### Ec2IpamPoolSourceResource <a name="Ec2IpamPoolSourceResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

&ec2ipampool.Ec2IpamPoolSourceResource {
	ResourceId: *string,
	ResourceOwner: *string,
	ResourceRegion: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceId">ResourceId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_id Ec2IpamPool#resource_id}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceOwner">ResourceOwner</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_owner Ec2IpamPool#resource_owner}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_region Ec2IpamPool#resource_region}. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceType">ResourceType</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_type Ec2IpamPool#resource_type}. |

---

##### `ResourceId`<sup>Optional</sup> <a name="ResourceId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceId"></a>

```go
ResourceId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_id Ec2IpamPool#resource_id}.

---

##### `ResourceOwner`<sup>Optional</sup> <a name="ResourceOwner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceOwner"></a>

```go
ResourceOwner *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_owner Ec2IpamPool#resource_owner}.

---

##### `ResourceRegion`<sup>Optional</sup> <a name="ResourceRegion" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceRegion"></a>

```go
ResourceRegion *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_region Ec2IpamPool#resource_region}.

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResource.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#resource_type Ec2IpamPool#resource_type}.

---

### Ec2IpamPoolTags <a name="Ec2IpamPoolTags" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

&ec2ipampool.Ec2IpamPoolTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#key Ec2IpamPool#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.98.0/docs/resources/ec2_ipam_pool#value Ec2IpamPool#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamPoolAllocationResourceTagsList <a name="Ec2IpamPoolAllocationResourceTagsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.NewEc2IpamPoolAllocationResourceTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2IpamPoolAllocationResourceTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get"></a>

```go
func Get(index *f64) Ec2IpamPoolAllocationResourceTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamPoolAllocationResourceTagsOutputReference <a name="Ec2IpamPoolAllocationResourceTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.NewEc2IpamPoolAllocationResourceTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2IpamPoolAllocationResourceTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolAllocationResourceTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamPoolProvisionedCidrsList <a name="Ec2IpamPoolProvisionedCidrsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.NewEc2IpamPoolProvisionedCidrsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2IpamPoolProvisionedCidrsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get"></a>

```go
func Get(index *f64) Ec2IpamPoolProvisionedCidrsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamPoolProvisionedCidrsOutputReference <a name="Ec2IpamPoolProvisionedCidrsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.NewEc2IpamPoolProvisionedCidrsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2IpamPoolProvisionedCidrsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resetCidr">ResetCidr</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCidr` <a name="ResetCidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.resetCidr"></a>

```go
func ResetCidr()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidrInput">CidrInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidr">Cidr</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CidrInput`<sup>Optional</sup> <a name="CidrInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidrInput"></a>

```go
func CidrInput() *string
```

- *Type:* *string

---

##### `Cidr`<sup>Required</sup> <a name="Cidr" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.cidr"></a>

```go
func Cidr() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolProvisionedCidrsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamPoolSourceResourceOutputReference <a name="Ec2IpamPoolSourceResourceOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.NewEc2IpamPoolSourceResourceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) Ec2IpamPoolSourceResourceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceId">ResetResourceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceOwner">ResetResourceOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceRegion">ResetResourceRegion</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceId` <a name="ResetResourceId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceId"></a>

```go
func ResetResourceId()
```

##### `ResetResourceOwner` <a name="ResetResourceOwner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceOwner"></a>

```go
func ResetResourceOwner()
```

##### `ResetResourceRegion` <a name="ResetResourceRegion" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceRegion"></a>

```go
func ResetResourceRegion()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceIdInput">ResourceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwnerInput">ResourceOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegionInput">ResourceRegionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceId">ResourceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwner">ResourceOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegion">ResourceRegion</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceIdInput`<sup>Optional</sup> <a name="ResourceIdInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceIdInput"></a>

```go
func ResourceIdInput() *string
```

- *Type:* *string

---

##### `ResourceOwnerInput`<sup>Optional</sup> <a name="ResourceOwnerInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwnerInput"></a>

```go
func ResourceOwnerInput() *string
```

- *Type:* *string

---

##### `ResourceRegionInput`<sup>Optional</sup> <a name="ResourceRegionInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegionInput"></a>

```go
func ResourceRegionInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ResourceId`<sup>Required</sup> <a name="ResourceId" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceId"></a>

```go
func ResourceId() *string
```

- *Type:* *string

---

##### `ResourceOwner`<sup>Required</sup> <a name="ResourceOwner" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceOwner"></a>

```go
func ResourceOwner() *string
```

- *Type:* *string

---

##### `ResourceRegion`<sup>Required</sup> <a name="ResourceRegion" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceRegion"></a>

```go
func ResourceRegion() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolSourceResourceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamPoolTagsList <a name="Ec2IpamPoolTagsList" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.NewEc2IpamPoolTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2IpamPoolTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get"></a>

```go
func Get(index *f64) Ec2IpamPoolTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamPoolTagsOutputReference <a name="Ec2IpamPoolTagsOutputReference" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipampool"

ec2ipampool.NewEc2IpamPoolTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2IpamPoolTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2IpamPool.Ec2IpamPoolTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



