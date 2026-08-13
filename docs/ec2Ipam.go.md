# `ec2Ipam` Submodule <a name="`ec2Ipam` Submodule" id="@cdktn/provider-awscc.ec2Ipam"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2Ipam <a name="Ec2Ipam" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam awscc_ec2_ipam}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.NewEc2Ipam(scope Construct, id *string, config Ec2IpamConfig) Ec2Ipam
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig">Ec2IpamConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig">Ec2IpamConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.putDefaultResourceDiscoveryOrganizationalUnitExclusions">PutDefaultResourceDiscoveryOrganizationalUnitExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.putOperatingRegions">PutOperatingRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetDefaultResourceDiscoveryOrganizationalUnitExclusions">ResetDefaultResourceDiscoveryOrganizationalUnitExclusions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetEnablePrivateGua">ResetEnablePrivateGua</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetMeteredAccount">ResetMeteredAccount</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetOperatingRegions">ResetOperatingRegions</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetTags">ResetTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetTier">ResetTier</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutDefaultResourceDiscoveryOrganizationalUnitExclusions` <a name="PutDefaultResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.putDefaultResourceDiscoveryOrganizationalUnitExclusions"></a>

```go
func PutDefaultResourceDiscoveryOrganizationalUnitExclusions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.putDefaultResourceDiscoveryOrganizationalUnitExclusions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutOperatingRegions` <a name="PutOperatingRegions" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.putOperatingRegions"></a>

```go
func PutOperatingRegions(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.putOperatingRegions.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDefaultResourceDiscoveryOrganizationalUnitExclusions` <a name="ResetDefaultResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetDefaultResourceDiscoveryOrganizationalUnitExclusions"></a>

```go
func ResetDefaultResourceDiscoveryOrganizationalUnitExclusions()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnablePrivateGua` <a name="ResetEnablePrivateGua" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetEnablePrivateGua"></a>

```go
func ResetEnablePrivateGua()
```

##### `ResetMeteredAccount` <a name="ResetMeteredAccount" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetMeteredAccount"></a>

```go
func ResetMeteredAccount()
```

##### `ResetOperatingRegions` <a name="ResetOperatingRegions" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetOperatingRegions"></a>

```go
func ResetOperatingRegions()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetTags"></a>

```go
func ResetTags()
```

##### `ResetTier` <a name="ResetTier" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.resetTier"></a>

```go
func ResetTier()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2Ipam resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.Ec2Ipam_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.Ec2Ipam_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.Ec2Ipam_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.Ec2Ipam_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2Ipam resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2Ipam to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2Ipam that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2Ipam to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.defaultResourceDiscoveryAssociationId">DefaultResourceDiscoveryAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.defaultResourceDiscoveryId">DefaultResourceDiscoveryId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.defaultResourceDiscoveryOrganizationalUnitExclusions">DefaultResourceDiscoveryOrganizationalUnitExclusions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList">Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.ipamId">IpamId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.operatingRegions">OperatingRegions</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList">Ec2IpamOperatingRegionsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.privateDefaultScopeId">PrivateDefaultScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.publicDefaultScopeId">PublicDefaultScopeId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.resourceDiscoveryAssociationCount">ResourceDiscoveryAssociationCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.scopeCount">ScopeCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList">Ec2IpamTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.defaultResourceDiscoveryOrganizationalUnitExclusionsInput">DefaultResourceDiscoveryOrganizationalUnitExclusionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.enablePrivateGuaInput">EnablePrivateGuaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.meteredAccountInput">MeteredAccountInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.operatingRegionsInput">OperatingRegionsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tierInput">TierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.enablePrivateGua">EnablePrivateGua</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.meteredAccount">MeteredAccount</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tier">Tier</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `DefaultResourceDiscoveryAssociationId`<sup>Required</sup> <a name="DefaultResourceDiscoveryAssociationId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.defaultResourceDiscoveryAssociationId"></a>

```go
func DefaultResourceDiscoveryAssociationId() *string
```

- *Type:* *string

---

##### `DefaultResourceDiscoveryId`<sup>Required</sup> <a name="DefaultResourceDiscoveryId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.defaultResourceDiscoveryId"></a>

```go
func DefaultResourceDiscoveryId() *string
```

- *Type:* *string

---

##### `DefaultResourceDiscoveryOrganizationalUnitExclusions`<sup>Required</sup> <a name="DefaultResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.defaultResourceDiscoveryOrganizationalUnitExclusions"></a>

```go
func DefaultResourceDiscoveryOrganizationalUnitExclusions() Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList">Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `IpamId`<sup>Required</sup> <a name="IpamId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.ipamId"></a>

```go
func IpamId() *string
```

- *Type:* *string

---

##### `OperatingRegions`<sup>Required</sup> <a name="OperatingRegions" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.operatingRegions"></a>

```go
func OperatingRegions() Ec2IpamOperatingRegionsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList">Ec2IpamOperatingRegionsList</a>

---

##### `PrivateDefaultScopeId`<sup>Required</sup> <a name="PrivateDefaultScopeId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.privateDefaultScopeId"></a>

```go
func PrivateDefaultScopeId() *string
```

- *Type:* *string

---

##### `PublicDefaultScopeId`<sup>Required</sup> <a name="PublicDefaultScopeId" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.publicDefaultScopeId"></a>

```go
func PublicDefaultScopeId() *string
```

- *Type:* *string

---

##### `ResourceDiscoveryAssociationCount`<sup>Required</sup> <a name="ResourceDiscoveryAssociationCount" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.resourceDiscoveryAssociationCount"></a>

```go
func ResourceDiscoveryAssociationCount() *f64
```

- *Type:* *f64

---

##### `ScopeCount`<sup>Required</sup> <a name="ScopeCount" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.scopeCount"></a>

```go
func ScopeCount() *f64
```

- *Type:* *f64

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tags"></a>

```go
func Tags() Ec2IpamTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList">Ec2IpamTagsList</a>

---

##### `DefaultResourceDiscoveryOrganizationalUnitExclusionsInput`<sup>Optional</sup> <a name="DefaultResourceDiscoveryOrganizationalUnitExclusionsInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.defaultResourceDiscoveryOrganizationalUnitExclusionsInput"></a>

```go
func DefaultResourceDiscoveryOrganizationalUnitExclusionsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnablePrivateGuaInput`<sup>Optional</sup> <a name="EnablePrivateGuaInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.enablePrivateGuaInput"></a>

```go
func EnablePrivateGuaInput() interface{}
```

- *Type:* interface{}

---

##### `MeteredAccountInput`<sup>Optional</sup> <a name="MeteredAccountInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.meteredAccountInput"></a>

```go
func MeteredAccountInput() *string
```

- *Type:* *string

---

##### `OperatingRegionsInput`<sup>Optional</sup> <a name="OperatingRegionsInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.operatingRegionsInput"></a>

```go
func OperatingRegionsInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TierInput`<sup>Optional</sup> <a name="TierInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tierInput"></a>

```go
func TierInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnablePrivateGua`<sup>Required</sup> <a name="EnablePrivateGua" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.enablePrivateGua"></a>

```go
func EnablePrivateGua() interface{}
```

- *Type:* interface{}

---

##### `MeteredAccount`<sup>Required</sup> <a name="MeteredAccount" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.meteredAccount"></a>

```go
func MeteredAccount() *string
```

- *Type:* *string

---

##### `Tier`<sup>Required</sup> <a name="Tier" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tier"></a>

```go
func Tier() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2Ipam.Ec2Ipam.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2IpamConfig <a name="Ec2IpamConfig" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

&ec2ipam.Ec2IpamConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	DefaultResourceDiscoveryOrganizationalUnitExclusions: interface{},
	Description: *string,
	EnablePrivateGua: interface{},
	MeteredAccount: *string,
	OperatingRegions: interface{},
	Tags: interface{},
	Tier: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.defaultResourceDiscoveryOrganizationalUnitExclusions">DefaultResourceDiscoveryOrganizationalUnitExclusions</a></code> | <code>interface{}</code> | A set of organizational unit (OU) exclusions for the default resource discovery, created with this IPAM. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#description Ec2Ipam#description}. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.enablePrivateGua">EnablePrivateGua</a></code> | <code>interface{}</code> | Enable provisioning of GUA space in private pools. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.meteredAccount">MeteredAccount</a></code> | <code>*string</code> | A metered account is an account that is charged for active IP addresses managed in IPAM. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.operatingRegions">OperatingRegions</a></code> | <code>interface{}</code> | The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.tier">Tier</a></code> | <code>*string</code> | The tier of the IPAM. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `DefaultResourceDiscoveryOrganizationalUnitExclusions`<sup>Optional</sup> <a name="DefaultResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.defaultResourceDiscoveryOrganizationalUnitExclusions"></a>

```go
DefaultResourceDiscoveryOrganizationalUnitExclusions interface{}
```

- *Type:* interface{}

A set of organizational unit (OU) exclusions for the default resource discovery, created with this IPAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#default_resource_discovery_organizational_unit_exclusions Ec2Ipam#default_resource_discovery_organizational_unit_exclusions}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#description Ec2Ipam#description}.

---

##### `EnablePrivateGua`<sup>Optional</sup> <a name="EnablePrivateGua" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.enablePrivateGua"></a>

```go
EnablePrivateGua interface{}
```

- *Type:* interface{}

Enable provisioning of GUA space in private pools.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#enable_private_gua Ec2Ipam#enable_private_gua}

---

##### `MeteredAccount`<sup>Optional</sup> <a name="MeteredAccount" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.meteredAccount"></a>

```go
MeteredAccount *string
```

- *Type:* *string

A metered account is an account that is charged for active IP addresses managed in IPAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#metered_account Ec2Ipam#metered_account}

---

##### `OperatingRegions`<sup>Optional</sup> <a name="OperatingRegions" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.operatingRegions"></a>

```go
OperatingRegions interface{}
```

- *Type:* interface{}

The regions IPAM is enabled for. Allows pools to be created in these regions, as well as enabling monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#operating_regions Ec2Ipam#operating_regions}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#tags Ec2Ipam#tags}

---

##### `Tier`<sup>Optional</sup> <a name="Tier" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamConfig.property.tier"></a>

```go
Tier *string
```

- *Type:* *string

The tier of the IPAM.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#tier Ec2Ipam#tier}

---

### Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions <a name="Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

&ec2ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions {
	OrganizationsEntityPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions.property.organizationsEntityPath">OrganizationsEntityPath</a></code> | <code>*string</code> | An AWS Organizations entity path. |

---

##### `OrganizationsEntityPath`<sup>Optional</sup> <a name="OrganizationsEntityPath" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusions.property.organizationsEntityPath"></a>

```go
OrganizationsEntityPath *string
```

- *Type:* *string

An AWS Organizations entity path.

Build the path for the OU(s) using AWS Organizations IDs separated by a '/'. Include all child OUs by ending the path with '/*'.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#organizations_entity_path Ec2Ipam#organizations_entity_path}

---

### Ec2IpamOperatingRegions <a name="Ec2IpamOperatingRegions" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegions"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegions.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

&ec2ipam.Ec2IpamOperatingRegions {
	RegionName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegions.property.regionName">RegionName</a></code> | <code>*string</code> | The name of the region. |

---

##### `RegionName`<sup>Optional</sup> <a name="RegionName" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegions.property.regionName"></a>

```go
RegionName *string
```

- *Type:* *string

The name of the region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#region_name Ec2Ipam#region_name}

---

### Ec2IpamTags <a name="Ec2IpamTags" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

&ec2ipam.Ec2IpamTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#key Ec2Ipam#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ec2_ipam#value Ec2Ipam#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList <a name="Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.NewEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.get"></a>

```go
func Get(index *f64) Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference <a name="Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.NewEc2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resetOrganizationsEntityPath">ResetOrganizationsEntityPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOrganizationsEntityPath` <a name="ResetOrganizationsEntityPath" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.resetOrganizationsEntityPath"></a>

```go
func ResetOrganizationsEntityPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPathInput">OrganizationsEntityPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath">OrganizationsEntityPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OrganizationsEntityPathInput`<sup>Optional</sup> <a name="OrganizationsEntityPathInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPathInput"></a>

```go
func OrganizationsEntityPathInput() *string
```

- *Type:* *string

---

##### `OrganizationsEntityPath`<sup>Required</sup> <a name="OrganizationsEntityPath" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.organizationsEntityPath"></a>

```go
func OrganizationsEntityPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamDefaultResourceDiscoveryOrganizationalUnitExclusionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamOperatingRegionsList <a name="Ec2IpamOperatingRegionsList" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.NewEc2IpamOperatingRegionsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2IpamOperatingRegionsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.get"></a>

```go
func Get(index *f64) Ec2IpamOperatingRegionsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamOperatingRegionsOutputReference <a name="Ec2IpamOperatingRegionsOutputReference" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.NewEc2IpamOperatingRegionsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2IpamOperatingRegionsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.resetRegionName">ResetRegionName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetRegionName` <a name="ResetRegionName" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.resetRegionName"></a>

```go
func ResetRegionName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.regionNameInput">RegionNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.regionName">RegionName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RegionNameInput`<sup>Optional</sup> <a name="RegionNameInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.regionNameInput"></a>

```go
func RegionNameInput() *string
```

- *Type:* *string

---

##### `RegionName`<sup>Required</sup> <a name="RegionName" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.regionName"></a>

```go
func RegionName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamOperatingRegionsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamTagsList <a name="Ec2IpamTagsList" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.NewEc2IpamTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2IpamTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.get"></a>

```go
func Get(index *f64) Ec2IpamTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2IpamTagsOutputReference <a name="Ec2IpamTagsOutputReference" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2ipam"

ec2ipam.NewEc2IpamTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2IpamTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2Ipam.Ec2IpamTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



