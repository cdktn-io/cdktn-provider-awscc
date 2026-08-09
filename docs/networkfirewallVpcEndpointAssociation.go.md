# `networkfirewallVpcEndpointAssociation` Submodule <a name="`networkfirewallVpcEndpointAssociation` Submodule" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallVpcEndpointAssociation <a name="NetworkfirewallVpcEndpointAssociation" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association awscc_networkfirewall_vpc_endpoint_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

networkfirewallvpcendpointassociation.NewNetworkfirewallVpcEndpointAssociation(scope Construct, id *string, config NetworkfirewallVpcEndpointAssociationConfig) NetworkfirewallVpcEndpointAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig">NetworkfirewallVpcEndpointAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig">NetworkfirewallVpcEndpointAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping">PutSubnetMapping</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutSubnetMapping` <a name="PutSubnetMapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping"></a>

```go
func PutSubnetMapping(value NetworkfirewallVpcEndpointAssociationSubnetMapping)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putSubnetMapping.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

networkfirewallvpcendpointassociation.NetworkfirewallVpcEndpointAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

networkfirewallvpcendpointassociation.NetworkfirewallVpcEndpointAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

networkfirewallvpcendpointassociation.NetworkfirewallVpcEndpointAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

networkfirewallvpcendpointassociation.NetworkfirewallVpcEndpointAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkfirewallVpcEndpointAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkfirewallVpcEndpointAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkfirewallVpcEndpointAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallVpcEndpointAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.endpointId">EndpointId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMapping">SubnetMapping</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList">NetworkfirewallVpcEndpointAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn">VpcEndpointAssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId">VpcEndpointAssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArnInput">FirewallArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMappingInput">SubnetMappingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcIdInput">VpcIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArn">FirewallArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcId">VpcId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `EndpointId`<sup>Required</sup> <a name="EndpointId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.endpointId"></a>

```go
func EndpointId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMapping"></a>

```go
func SubnetMapping() NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference">NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tags"></a>

```go
func Tags() NetworkfirewallVpcEndpointAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList">NetworkfirewallVpcEndpointAssociationTagsList</a>

---

##### `VpcEndpointAssociationArn`<sup>Required</sup> <a name="VpcEndpointAssociationArn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationArn"></a>

```go
func VpcEndpointAssociationArn() *string
```

- *Type:* *string

---

##### `VpcEndpointAssociationId`<sup>Required</sup> <a name="VpcEndpointAssociationId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcEndpointAssociationId"></a>

```go
func VpcEndpointAssociationId() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `FirewallArnInput`<sup>Optional</sup> <a name="FirewallArnInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArnInput"></a>

```go
func FirewallArnInput() *string
```

- *Type:* *string

---

##### `SubnetMappingInput`<sup>Optional</sup> <a name="SubnetMappingInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.subnetMappingInput"></a>

```go
func SubnetMappingInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `VpcIdInput`<sup>Optional</sup> <a name="VpcIdInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcIdInput"></a>

```go
func VpcIdInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.firewallArn"></a>

```go
func FirewallArn() *string
```

- *Type:* *string

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.vpcId"></a>

```go
func VpcId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallVpcEndpointAssociationConfig <a name="NetworkfirewallVpcEndpointAssociationConfig" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

&networkfirewallvpcendpointassociation.NetworkfirewallVpcEndpointAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	FirewallArn: *string,
	SubnetMapping: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping,
	VpcId: *string,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.firewallArn">FirewallArn</a></code> | <code>*string</code> | A resource ARN. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.subnetMapping">SubnetMapping</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_mapping NetworkfirewallVpcEndpointAssociation#subnet_mapping}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.vpcId">VpcId</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.description">Description</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `FirewallArn`<sup>Required</sup> <a name="FirewallArn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.firewallArn"></a>

```go
FirewallArn *string
```

- *Type:* *string

A resource ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#firewall_arn NetworkfirewallVpcEndpointAssociation#firewall_arn}

---

##### `SubnetMapping`<sup>Required</sup> <a name="SubnetMapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.subnetMapping"></a>

```go
SubnetMapping NetworkfirewallVpcEndpointAssociationSubnetMapping
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping">NetworkfirewallVpcEndpointAssociationSubnetMapping</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_mapping NetworkfirewallVpcEndpointAssociation#subnet_mapping}.

---

##### `VpcId`<sup>Required</sup> <a name="VpcId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.vpcId"></a>

```go
VpcId *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#vpc_id NetworkfirewallVpcEndpointAssociation#vpc_id}.

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#description NetworkfirewallVpcEndpointAssociation#description}.

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#tags NetworkfirewallVpcEndpointAssociation#tags}.

---

### NetworkfirewallVpcEndpointAssociationSubnetMapping <a name="NetworkfirewallVpcEndpointAssociationSubnetMapping" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

&networkfirewallvpcendpointassociation.NetworkfirewallVpcEndpointAssociationSubnetMapping {
	SubnetId: *string,
	IpAddressType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.subnetId">SubnetId</a></code> | <code>*string</code> | A SubnetId. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | A IPAddressType. |

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.subnetId"></a>

```go
SubnetId *string
```

- *Type:* *string

A SubnetId.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#subnet_id NetworkfirewallVpcEndpointAssociation#subnet_id}

---

##### `IpAddressType`<sup>Optional</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMapping.property.ipAddressType"></a>

```go
IpAddressType *string
```

- *Type:* *string

A IPAddressType.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#ip_address_type NetworkfirewallVpcEndpointAssociation#ip_address_type}

---

### NetworkfirewallVpcEndpointAssociationTags <a name="NetworkfirewallVpcEndpointAssociationTags" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

&networkfirewallvpcendpointassociation.NetworkfirewallVpcEndpointAssociationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#key NetworkfirewallVpcEndpointAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#value NetworkfirewallVpcEndpointAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#key NetworkfirewallVpcEndpointAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/networkfirewall_vpc_endpoint_association#value NetworkfirewallVpcEndpointAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference <a name="NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

networkfirewallvpcendpointassociation.NewNetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resetIpAddressType">ResetIpAddressType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetIpAddressType` <a name="ResetIpAddressType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.resetIpAddressType"></a>

```go
func ResetIpAddressType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressTypeInput">IpAddressTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetIdInput">SubnetIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType">IpAddressType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId">SubnetId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IpAddressTypeInput`<sup>Optional</sup> <a name="IpAddressTypeInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressTypeInput"></a>

```go
func IpAddressTypeInput() *string
```

- *Type:* *string

---

##### `SubnetIdInput`<sup>Optional</sup> <a name="SubnetIdInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetIdInput"></a>

```go
func SubnetIdInput() *string
```

- *Type:* *string

---

##### `IpAddressType`<sup>Required</sup> <a name="IpAddressType" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.ipAddressType"></a>

```go
func IpAddressType() *string
```

- *Type:* *string

---

##### `SubnetId`<sup>Required</sup> <a name="SubnetId" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.subnetId"></a>

```go
func SubnetId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationSubnetMappingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallVpcEndpointAssociationTagsList <a name="NetworkfirewallVpcEndpointAssociationTagsList" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

networkfirewallvpcendpointassociation.NewNetworkfirewallVpcEndpointAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallVpcEndpointAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.get"></a>

```go
func Get(index *f64) NetworkfirewallVpcEndpointAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallVpcEndpointAssociationTagsOutputReference <a name="NetworkfirewallVpcEndpointAssociationTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallvpcendpointassociation"

networkfirewallvpcendpointassociation.NewNetworkfirewallVpcEndpointAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallVpcEndpointAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallVpcEndpointAssociation.NetworkfirewallVpcEndpointAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



