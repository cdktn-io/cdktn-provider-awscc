# `ec2LocalGatewayRouteTableVpcAssociation` Submodule <a name="`ec2LocalGatewayRouteTableVpcAssociation` Submodule" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### Ec2LocalGatewayRouteTableVpcAssociation <a name="Ec2LocalGatewayRouteTableVpcAssociation" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_local_gateway_route_table_vpc_association awscc_ec2_local_gateway_route_table_vpc_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayroutetablevpcassociation"

ec2localgatewayroutetablevpcassociation.NewEc2LocalGatewayRouteTableVpcAssociation(scope Construct, id *string, config Ec2LocalGatewayRouteTableVpcAssociationConfig) Ec2LocalGatewayRouteTableVpcAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig">Ec2LocalGatewayRouteTableVpcAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig">Ec2LocalGatewayRouteTableVpcAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a Ec2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayroutetablevpcassociation"

ec2localgatewayroutetablevpcassociation.Ec2LocalGatewayRouteTableVpcAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayroutetablevpcassociation"

ec2localgatewayroutetablevpcassociation.Ec2LocalGatewayRouteTableVpcAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayroutetablevpcassociation"

ec2localgatewayroutetablevpcassociation.Ec2LocalGatewayRouteTableVpcAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayroutetablevpcassociation"

ec2localgatewayroutetablevpcassociation.Ec2LocalGatewayRouteTableVpcAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a Ec2LocalGatewayRouteTableVpcAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the Ec2LocalGatewayRouteTableVpcAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing Ec2LocalGatewayRouteTableVpcAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_local_gateway_route_table_vpc_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the Ec2LocalGatewayRouteTableVpcAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId">LocalGatewayId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId">LocalGatewayRouteTableVpcAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.state">State</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList">Ec2LocalGatewayRouteTableVpcAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput">LocalGatewayRouteTableIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId">LocalGatewayRouteTableId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LocalGatewayId`<sup>Required</sup> <a name="LocalGatewayId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayId"></a>

```go
func LocalGatewayId() *string
```

- *Type:* *string

---

##### `LocalGatewayRouteTableVpcAssociationId`<sup>Required</sup> <a name="LocalGatewayRouteTableVpcAssociationId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableVpcAssociationId"></a>

```go
func LocalGatewayRouteTableVpcAssociationId() *string
```

- *Type:* *string

---

##### `State`<sup>Required</sup> <a name="State" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.state"></a>

```go
func State() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tags"></a>

```go
func Tags() Ec2LocalGatewayRouteTableVpcAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList">Ec2LocalGatewayRouteTableVpcAssociationTagsList</a>

---

##### `LocalGatewayRouteTableIdInput`<sup>Optional</sup> <a name="LocalGatewayRouteTableIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableIdInput"></a>

```go
func LocalGatewayRouteTableIdInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `LocalGatewayRouteTableId`<sup>Required</sup> <a name="LocalGatewayRouteTableId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.localGatewayRouteTableId"></a>

```go
func LocalGatewayRouteTableId() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### Ec2LocalGatewayRouteTableVpcAssociationConfig <a name="Ec2LocalGatewayRouteTableVpcAssociationConfig" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayroutetablevpcassociation"

&ec2localgatewayroutetablevpcassociation.Ec2LocalGatewayRouteTableVpcAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	LocalGatewayRouteTableId: *string,
	VpcId: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId">LocalGatewayRouteTableId</a></code> | <code>*string</code> | The ID of the local gateway route table. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | The ID of the VPC. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | The tags for the association. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `LocalGatewayRouteTableId`<sup>Required</sup> <a name="LocalGatewayRouteTableId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.localGatewayRouteTableId"></a>

```go
LocalGatewayRouteTableId *string
```

- *Type:* *string

The ID of the local gateway route table.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_local_gateway_route_table_vpc_association#local_gateway_route_table_id Ec2LocalGatewayRouteTableVpcAssociation#local_gateway_route_table_id}

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

The ID of the VPC.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_local_gateway_route_table_vpc_association#vpc_id Ec2LocalGatewayRouteTableVpcAssociation#vpc_id}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

The tags for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_local_gateway_route_table_vpc_association#tags Ec2LocalGatewayRouteTableVpcAssociation#tags}

---

### Ec2LocalGatewayRouteTableVpcAssociationTags <a name="Ec2LocalGatewayRouteTableVpcAssociationTags" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayroutetablevpcassociation"

&ec2localgatewayroutetablevpcassociation.Ec2LocalGatewayRouteTableVpcAssociationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_local_gateway_route_table_vpc_association#key Ec2LocalGatewayRouteTableVpcAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_local_gateway_route_table_vpc_association#value Ec2LocalGatewayRouteTableVpcAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_local_gateway_route_table_vpc_association#key Ec2LocalGatewayRouteTableVpcAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ec2_local_gateway_route_table_vpc_association#value Ec2LocalGatewayRouteTableVpcAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### Ec2LocalGatewayRouteTableVpcAssociationTagsList <a name="Ec2LocalGatewayRouteTableVpcAssociationTagsList" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayroutetablevpcassociation"

ec2localgatewayroutetablevpcassociation.NewEc2LocalGatewayRouteTableVpcAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) Ec2LocalGatewayRouteTableVpcAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.get"></a>

```go
func Get(index *f64) Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference <a name="Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ec2localgatewayroutetablevpcassociation"

ec2localgatewayroutetablevpcassociation.NewEc2LocalGatewayRouteTableVpcAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ec2LocalGatewayRouteTableVpcAssociation.Ec2LocalGatewayRouteTableVpcAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



