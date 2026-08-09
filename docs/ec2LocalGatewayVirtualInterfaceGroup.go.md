# `ec2LocalGatewayVirtualInterfaceGroup` Submodule <a name="`ec2LocalGatewayVirtualInterfaceGroup` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayVirtualInterfaceGroup <a name="Ec2LocalGatewayVirtualInterfaceGroup" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_virtual_interface_group awscc_ec2_local_gateway_virtual_interface_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterfacegroup"

ec2localgatewayvirtualinterfacegroup.NewEc2LocalGatewayVirtualInterfaceGroup(scope Construct, id *string, config Ec2LocalGatewayVirtualInterfaceGroupConfig) Ec2LocalGatewayVirtualInterfaceGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig">Ec2LocalGatewayVirtualInterfaceGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig">Ec2LocalGatewayVirtualInterfaceGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsn">ResetLocalBgpAsn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsnExtended">ResetLocalBgpAsnExtended</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetLocalBgpAsn` <a name="ResetLocalBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsn"></a>

```go
func ResetLocalBgpAsn()
```

##### `ResetLocalBgpAsnExtended` <a name="ResetLocalBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetLocalBgpAsnExtended"></a>

```go
func ResetLocalBgpAsnExtended()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterfaceGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterfacegroup"

ec2localgatewayvirtualinterfacegroup.Ec2LocalGatewayVirtualInterfaceGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterfacegroup"

ec2localgatewayvirtualinterfacegroup.Ec2LocalGatewayVirtualInterfaceGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterfacegroup"

ec2localgatewayvirtualinterfacegroup.Ec2LocalGatewayVirtualInterfaceGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterfacegroup"

ec2localgatewayvirtualinterfacegroup.Ec2LocalGatewayVirtualInterfaceGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2LocalGatewayVirtualInterfaceGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2LocalGatewayVirtualInterfaceGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2LocalGatewayVirtualInterfaceGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_virtual_interface_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayVirtualInterfaceGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.configurationState">ConfigurationState</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupArn">LocalGatewayVirtualInterfaceGroupArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupId">LocalGatewayVirtualInterfaceGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds">LocalGatewayVirtualInterfaceIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.ownerId">OwnerId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList">Ec2LocalGatewayVirtualInterfaceGroupTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtendedInput">LocalBgpAsnExtendedInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnInput">LocalBgpAsnInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput">LocalGatewayIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsn">LocalBgpAsn</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtended">LocalBgpAsnExtended</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigurationState`<sup>Required</sup> <a name="ConfigurationState" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.configurationState"></a>

```go
func ConfigurationState() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalGatewayVirtualInterfaceGroupArn`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupArn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupArn"></a>

```go
func LocalGatewayVirtualInterfaceGroupArn() *string
```

- *Type:* *string

---

##### `LocalGatewayVirtualInterfaceGroupId`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceGroupId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceGroupId"></a>

```go
func LocalGatewayVirtualInterfaceGroupId() *string
```

- *Type:* *string

---

##### `LocalGatewayVirtualInterfaceIds`<sup>Required</sup> <a name="LocalGatewayVirtualInterfaceIds" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayVirtualInterfaceIds"></a>

```go
func LocalGatewayVirtualInterfaceIds() *[]*string
```

- *Type:* *[]*string

---

##### `OwnerId`<sup>Required</sup> <a name="OwnerId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.ownerId"></a>

```go
func OwnerId() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tags"></a>

```go
func Tags() Ec2LocalGatewayVirtualInterfaceGroupTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList">Ec2LocalGatewayVirtualInterfaceGroupTagsList</a>

---

##### `LocalBgpAsnExtendedInput`<sup>Optional</sup> <a name="LocalBgpAsnExtendedInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtendedInput"></a>

```go
func LocalBgpAsnExtendedInput() *f64
```

- *Type:* *f64

---

##### `LocalBgpAsnInput`<sup>Optional</sup> <a name="LocalBgpAsnInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnInput"></a>

```go
func LocalBgpAsnInput() *f64
```

- *Type:* *f64

---

##### `LocalGatewayIdInput`<sup>Optional</sup> <a name="LocalGatewayIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayIdInput"></a>

```go
func LocalGatewayIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `LocalBgpAsn`<sup>Required</sup> <a name="LocalBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsn"></a>

```go
func LocalBgpAsn() *f64
```

- *Type:* *f64

---

##### `LocalBgpAsnExtended`<sup>Required</sup> <a name="LocalBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localBgpAsnExtended"></a>

```go
func LocalBgpAsnExtended() *f64
```

- *Type:* *f64

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.localGatewayId"></a>

```go
func LocalGatewayId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayVirtualInterfaceGroupConfig <a name="Ec2LocalGatewayVirtualInterfaceGroupConfig" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterfacegroup"

&ec2localgatewayvirtualinterfacegroup.Ec2LocalGatewayVirtualInterfaceGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LocalGatewayId: *string,
	LocalBgpAsn: *f64,
	LocalBgpAsnExtended: *f64,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | The ID of the local gateway. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsn">LocalBgpAsn</a></code> | <code>*f64</code> | The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP). |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsnExtended">LocalBgpAsnExtended</a></code> | <code>*f64</code> | The extended 32-bit ASN for the local BGP configuration. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags assigned to the virtual interface group. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localGatewayId"></a>

```go
LocalGatewayId *string
```

- *Type:* *string

The ID of the local gateway.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_gateway_id Ec2LocalGatewayVirtualInterfaceGroup#local_gateway_id}

---

##### `LocalBgpAsn`<sup>Optional</sup> <a name="LocalBgpAsn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsn"></a>

```go
LocalBgpAsn *f64
```

- *Type:* *f64

The Autonomous System Number(ASN) for the local Border Gateway Protocol (BGP).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn Ec2LocalGatewayVirtualInterfaceGroup#local_bgp_asn}

---

##### `LocalBgpAsnExtended`<sup>Optional</sup> <a name="LocalBgpAsnExtended" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.localBgpAsnExtended"></a>

```go
LocalBgpAsnExtended *f64
```

- *Type:* *f64

The extended 32-bit ASN for the local BGP configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_virtual_interface_group#local_bgp_asn_extended Ec2LocalGatewayVirtualInterfaceGroup#local_bgp_asn_extended}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags assigned to the virtual interface group.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_virtual_interface_group#tags Ec2LocalGatewayVirtualInterfaceGroup#tags}

---

### Ec2LocalGatewayVirtualInterfaceGroupTags <a name="Ec2LocalGatewayVirtualInterfaceGroupTags" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterfacegroup"

&ec2localgatewayvirtualinterfacegroup.Ec2LocalGatewayVirtualInterfaceGroupTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.key">Key</a></code> | <code>*string</code> | The key name of the tag. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.value">Value</a></code> | <code>*string</code> | The value for the tag. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The key name of the tag.

You can specify a value that is 1 to 128 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_virtual_interface_group#key Ec2LocalGatewayVirtualInterfaceGroup#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The value for the tag.

You can specify a value that is 0 to 256 Unicode characters in length and cannot be prefixed with aws:. You can use any of the following characters: the set of Unicode letters, digits, whitespace, _, ., /, =, +, and -.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/ec2_local_gateway_virtual_interface_group#value Ec2LocalGatewayVirtualInterfaceGroup#value}

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayVirtualInterfaceGroupTagsList <a name="Ec2LocalGatewayVirtualInterfaceGroupTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterfacegroup"

ec2localgatewayvirtualinterfacegroup.NewEc2LocalGatewayVirtualInterfaceGroupTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2LocalGatewayVirtualInterfaceGroupTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.get"></a>

```go
func Get(index *f64) Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference <a name="Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayvirtualinterfacegroup"

ec2localgatewayvirtualinterfacegroup.NewEc2LocalGatewayVirtualInterfaceGroupTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayVirtualInterfaceGroup.Ec2LocalGatewayVirtualInterfaceGroupTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



