# `networkfirewallContainerAssociation` Submodule <a name="`networkfirewallContainerAssociation` Submodule" id="@cdktn/provider-awscc.networkfirewallContainerAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### NetworkfirewallContainerAssociation <a name="NetworkfirewallContainerAssociation" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association awscc_networkfirewall_container_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NewNetworkfirewallContainerAssociation(scope Construct, id *string, config NetworkfirewallContainerAssociationConfig) NetworkfirewallContainerAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig">NetworkfirewallContainerAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations">PutContainerMonitoringConfigurations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutContainerMonitoringConfigurations` <a name="PutContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations"></a>

```go
func PutContainerMonitoringConfigurations(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putContainerMonitoringConfigurations.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NetworkfirewallContainerAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NetworkfirewallContainerAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NetworkfirewallContainerAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NetworkfirewallContainerAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a NetworkfirewallContainerAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the NetworkfirewallContainerAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing NetworkfirewallContainerAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the NetworkfirewallContainerAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn">ContainerAssociationArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurations">ContainerMonitoringConfigurations</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount">ResolvedCidrCount</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.status">Status</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList">NetworkfirewallContainerAssociationTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput">ContainerAssociationNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationsInput">ContainerMonitoringConfigurationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput">TypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName">ContainerAssociationName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type">Type</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerAssociationArn`<sup>Required</sup> <a name="ContainerAssociationArn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationArn"></a>

```go
func ContainerAssociationArn() *string
```

- *Type:* *string

---

##### `ContainerMonitoringConfigurations`<sup>Required</sup> <a name="ContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurations"></a>

```go
func ContainerMonitoringConfigurations() NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ResolvedCidrCount`<sup>Required</sup> <a name="ResolvedCidrCount" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.resolvedCidrCount"></a>

```go
func ResolvedCidrCount() *f64
```

- *Type:* *f64

---

##### `Status`<sup>Required</sup> <a name="Status" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.status"></a>

```go
func Status() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tags"></a>

```go
func Tags() NetworkfirewallContainerAssociationTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList">NetworkfirewallContainerAssociationTagsList</a>

---

##### `ContainerAssociationNameInput`<sup>Optional</sup> <a name="ContainerAssociationNameInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationNameInput"></a>

```go
func ContainerAssociationNameInput() *string
```

- *Type:* *string

---

##### `ContainerMonitoringConfigurationsInput`<sup>Optional</sup> <a name="ContainerMonitoringConfigurationsInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerMonitoringConfigurationsInput"></a>

```go
func ContainerMonitoringConfigurationsInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `TypeInput`<sup>Optional</sup> <a name="TypeInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.typeInput"></a>

```go
func TypeInput() *string
```

- *Type:* *string

---

##### `ContainerAssociationName`<sup>Required</sup> <a name="ContainerAssociationName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.containerAssociationName"></a>

```go
func ContainerAssociationName() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.type"></a>

```go
func Type() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### NetworkfirewallContainerAssociationConfig <a name="NetworkfirewallContainerAssociationConfig" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

&networkfirewallcontainerassociation.NetworkfirewallContainerAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContainerAssociationName: *string,
	ContainerMonitoringConfigurations: interface{},
	Type: *string,
	Description: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName">ContainerAssociationName</a></code> | <code>*string</code> | The descriptive name of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfigurations">ContainerMonitoringConfigurations</a></code> | <code>interface{}</code> | The monitoring configurations for the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type">Type</a></code> | <code>*string</code> | The type of containers to monitor. You can't change the container type after creation. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description">Description</a></code> | <code>*string</code> | A description of the container association. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags">Tags</a></code> | <code>interface{}</code> | An array of key-value pairs to apply to this resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContainerAssociationName`<sup>Required</sup> <a name="ContainerAssociationName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerAssociationName"></a>

```go
ContainerAssociationName *string
```

- *Type:* *string

The descriptive name of the container association.

You can't change the name of a container association after you create it.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_association_name NetworkfirewallContainerAssociation#container_association_name}

---

##### `ContainerMonitoringConfigurations`<sup>Required</sup> <a name="ContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.containerMonitoringConfigurations"></a>

```go
ContainerMonitoringConfigurations interface{}
```

- *Type:* interface{}

The monitoring configurations for the container association.

Each configuration specifies an Amazon ECS or Amazon EKS cluster to monitor and optional attribute filters to narrow which containers are tracked.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#container_monitoring_configurations NetworkfirewallContainerAssociation#container_monitoring_configurations}

---

##### `Type`<sup>Required</sup> <a name="Type" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.type"></a>

```go
Type *string
```

- *Type:* *string

The type of containers to monitor. You can't change the container type after creation.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#type NetworkfirewallContainerAssociation#type}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A description of the container association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#description NetworkfirewallContainerAssociation#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

An array of key-value pairs to apply to this resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#tags NetworkfirewallContainerAssociation#tags}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurations <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurations" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

&networkfirewallcontainerassociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations {
	ClusterArn: *string,
	AttributeFilters: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | The ARN of the Amazon ECS or Amazon EKS cluster to monitor. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.attributeFilters">AttributeFilters</a></code> | <code>interface{}</code> | Key-value pairs that filter which containers are tracked. |

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.clusterArn"></a>

```go
ClusterArn *string
```

- *Type:* *string

The ARN of the Amazon ECS or Amazon EKS cluster to monitor.

The cluster must be in the same Region and account as the container association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#cluster_arn NetworkfirewallContainerAssociation#cluster_arn}

---

##### `AttributeFilters`<sup>Optional</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurations.property.attributeFilters"></a>

```go
AttributeFilters interface{}
```

- *Type:* interface{}

Key-value pairs that filter which containers are tracked.

For Amazon EKS, you can filter by namespace and Kubernetes labels. For Amazon ECS, you can filter by container instance attributes (EC2 launch type only).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#attribute_filters NetworkfirewallContainerAssociation#attribute_filters}

---

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

&networkfirewallcontainerassociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.key">Key</a></code> | <code>*string</code> | The attribute key to filter on. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.value">Value</a></code> | <code>*string</code> | The attribute value to match. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.key"></a>

```go
Key *string
```

- *Type:* *string

The attribute key to filter on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFilters.property.value"></a>

```go
Value *string
```

- *Type:* *string

The attribute value to match.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}

---

### NetworkfirewallContainerAssociationTags <a name="NetworkfirewallContainerAssociationTags" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

&networkfirewallcontainerassociation.NetworkfirewallContainerAssociationTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.key">Key</a></code> | <code>*string</code> | The part of the key:value pair that defines a tag. Tag keys are case-sensitive. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.value">Value</a></code> | <code>*string</code> | The part of the key:value pair that defines a tag. Tag values are case-sensitive. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

The part of the key:value pair that defines a tag. Tag keys are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#key NetworkfirewallContainerAssociation#key}

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

The part of the key:value pair that defines a tag. Tag values are case-sensitive.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.103.0/docs/resources/networkfirewall_container_association#value NetworkfirewallContainerAssociation#value}

---

## Classes <a name="Classes" id="Classes"></a>

### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NewNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get"></a>

```go
func Get(index *f64) NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NewNetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NewNetworkfirewallContainerAssociationContainerMonitoringConfigurationsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get"></a>

```go
func Get(index *f64) NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference <a name="NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NewNetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters">PutAttributeFilters</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resetAttributeFilters">ResetAttributeFilters</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAttributeFilters` <a name="PutAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters"></a>

```go
func PutAttributeFilters(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.putAttributeFilters.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAttributeFilters` <a name="ResetAttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.resetAttributeFilters"></a>

```go
func ResetAttributeFilters()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters">AttributeFilters</a></code> | <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFiltersInput">AttributeFiltersInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArnInput">ClusterArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn">ClusterArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AttributeFilters`<sup>Required</sup> <a name="AttributeFilters" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFilters"></a>

```go
func AttributeFilters() NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList
```

- *Type:* <a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList">NetworkfirewallContainerAssociationContainerMonitoringConfigurationsAttributeFiltersList</a>

---

##### `AttributeFiltersInput`<sup>Optional</sup> <a name="AttributeFiltersInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.attributeFiltersInput"></a>

```go
func AttributeFiltersInput() interface{}
```

- *Type:* interface{}

---

##### `ClusterArnInput`<sup>Optional</sup> <a name="ClusterArnInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArnInput"></a>

```go
func ClusterArnInput() *string
```

- *Type:* *string

---

##### `ClusterArn`<sup>Required</sup> <a name="ClusterArn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.clusterArn"></a>

```go
func ClusterArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationContainerMonitoringConfigurationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallContainerAssociationTagsList <a name="NetworkfirewallContainerAssociationTagsList" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NewNetworkfirewallContainerAssociationTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) NetworkfirewallContainerAssociationTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get"></a>

```go
func Get(index *f64) NetworkfirewallContainerAssociationTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### NetworkfirewallContainerAssociationTagsOutputReference <a name="NetworkfirewallContainerAssociationTagsOutputReference" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/networkfirewallcontainerassociation"

networkfirewallcontainerassociation.NewNetworkfirewallContainerAssociationTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) NetworkfirewallContainerAssociationTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.networkfirewallContainerAssociation.NetworkfirewallContainerAssociationTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



