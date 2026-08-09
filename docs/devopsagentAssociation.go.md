# `devopsagentAssociation` Submodule <a name="`devopsagentAssociation` Submodule" id="@cdktn/provider-awscc.devopsagentAssociation"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### DevopsagentAssociation <a name="DevopsagentAssociation" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association awscc_devopsagent_association}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociation(scope Construct, id *string, config DevopsagentAssociationConfig) DevopsagentAssociation
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig">DevopsagentAssociationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig">DevopsagentAssociationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration">PutConfiguration</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds">ResetLinkedAssociationIds</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConfiguration` <a name="PutConfiguration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration"></a>

```go
func PutConfiguration(value DevopsagentAssociationConfiguration)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.putConfiguration.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

---

##### `ResetLinkedAssociationIds` <a name="ResetLinkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.resetLinkedAssociationIds"></a>

```go
func ResetLinkedAssociationIds()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.DevopsagentAssociation_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.DevopsagentAssociation_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.DevopsagentAssociation_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.DevopsagentAssociation_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a DevopsagentAssociation resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the DevopsagentAssociation to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing DevopsagentAssociation that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the DevopsagentAssociation to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId">AssociationId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput">AgentSpaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput">ConfigurationInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput">LinkedAssociationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput">ServiceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId">AgentSpaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds">LinkedAssociationIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId">ServiceId</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AssociationId`<sup>Required</sup> <a name="AssociationId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.associationId"></a>

```go
func AssociationId() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configuration"></a>

```go
func Configuration() DevopsagentAssociationConfigurationOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference">DevopsagentAssociationConfigurationOutputReference</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `AgentSpaceIdInput`<sup>Optional</sup> <a name="AgentSpaceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceIdInput"></a>

```go
func AgentSpaceIdInput() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.configurationInput"></a>

```go
func ConfigurationInput() interface{}
```

- *Type:* interface{}

---

##### `LinkedAssociationIdsInput`<sup>Optional</sup> <a name="LinkedAssociationIdsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIdsInput"></a>

```go
func LinkedAssociationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceIdInput`<sup>Optional</sup> <a name="ServiceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceIdInput"></a>

```go
func ServiceIdInput() *string
```

- *Type:* *string

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.agentSpaceId"></a>

```go
func AgentSpaceId() *string
```

- *Type:* *string

---

##### `LinkedAssociationIds`<sup>Required</sup> <a name="LinkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.linkedAssociationIds"></a>

```go
func LinkedAssociationIds() *[]*string
```

- *Type:* *[]*string

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.serviceId"></a>

```go
func ServiceId() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociation.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### DevopsagentAssociationConfig <a name="DevopsagentAssociationConfig" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AgentSpaceId: *string,
	Configuration: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfiguration,
	ServiceId: *string,
	LinkedAssociationIds: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId">AgentSpaceId</a></code> | <code>*string</code> | The unique identifier of the AgentSpace. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration">Configuration</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a></code> | The configuration that directs how AgentSpace interacts with the given service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId">ServiceId</a></code> | <code>*string</code> | The identifier for the associated service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds">LinkedAssociationIds</a></code> | <code>*[]*string</code> | Set of linked association IDs for parent-child relationships. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AgentSpaceId`<sup>Required</sup> <a name="AgentSpaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.agentSpaceId"></a>

```go
AgentSpaceId *string
```

- *Type:* *string

The unique identifier of the AgentSpace.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#agent_space_id DevopsagentAssociation#agent_space_id}

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.configuration"></a>

```go
Configuration DevopsagentAssociationConfiguration
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration">DevopsagentAssociationConfiguration</a>

The configuration that directs how AgentSpace interacts with the given service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#configuration DevopsagentAssociation#configuration}

---

##### `ServiceId`<sup>Required</sup> <a name="ServiceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.serviceId"></a>

```go
ServiceId *string
```

- *Type:* *string

The identifier for the associated service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#service_id DevopsagentAssociation#service_id}

---

##### `LinkedAssociationIds`<sup>Optional</sup> <a name="LinkedAssociationIds" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfig.property.linkedAssociationIds"></a>

```go
LinkedAssociationIds *[]*string
```

- *Type:* *[]*string

Set of linked association IDs for parent-child relationships.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#linked_association_ids DevopsagentAssociation#linked_association_ids}

---

### DevopsagentAssociationConfiguration <a name="DevopsagentAssociationConfiguration" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfiguration {
	Aws: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws,
	Azure: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure,
	Dynatrace: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace,
	EventChannel: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel,
	GitHub: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub,
	GitLab: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab,
	McpServer: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer,
	McpServerDatadog: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog,
	McpServerGrafana: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana,
	McpServerNewRelic: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic,
	McpServerSigV4: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4,
	McpServerSplunk: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk,
	PagerDuty: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty,
	ServiceNow: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow,
	Slack: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack,
	SourceAws: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a></code> | AWS association for 'monitor' account. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a></code> | Azure subscription integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a></code> | Dynatrace monitoring configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel">EventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a></code> | EventChannelconfiguration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub">GitHub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a></code> | GitHub repository integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a></code> | GitLab project integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a></code> | MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog">McpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a></code> | Datadog MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a></code> | Grafana MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a></code> | NewRelic MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a></code> | SigV4-authenticated MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a></code> | Splunk MCP server configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a></code> | PagerDuty integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a></code> | ServiceNow integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a></code> | Slack workspace integration configuration. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws">SourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a></code> | AWS association for 'source' account. |

---

##### `Aws`<sup>Optional</sup> <a name="Aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.aws"></a>

```go
Aws DevopsagentAssociationConfigurationAws
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

AWS association for 'monitor' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#aws DevopsagentAssociation#aws}

---

##### `Azure`<sup>Optional</sup> <a name="Azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.azure"></a>

```go
Azure DevopsagentAssociationConfigurationAzure
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

Azure subscription integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#azure DevopsagentAssociation#azure}

---

##### `Dynatrace`<sup>Optional</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.dynatrace"></a>

```go
Dynatrace DevopsagentAssociationConfigurationDynatrace
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

Dynatrace monitoring configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#dynatrace DevopsagentAssociation#dynatrace}

---

##### `EventChannel`<sup>Optional</sup> <a name="EventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.eventChannel"></a>

```go
EventChannel DevopsagentAssociationConfigurationEventChannel
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

EventChannelconfiguration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#event_channel DevopsagentAssociation#event_channel}

---

##### `GitHub`<sup>Optional</sup> <a name="GitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitHub"></a>

```go
GitHub DevopsagentAssociationConfigurationGitHub
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

GitHub repository integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#git_hub DevopsagentAssociation#git_hub}

---

##### `GitLab`<sup>Optional</sup> <a name="GitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.gitLab"></a>

```go
GitLab DevopsagentAssociationConfigurationGitLab
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

GitLab project integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#git_lab DevopsagentAssociation#git_lab}

---

##### `McpServer`<sup>Optional</sup> <a name="McpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServer"></a>

```go
McpServer DevopsagentAssociationConfigurationMcpServer
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#mcp_server DevopsagentAssociation#mcp_server}

---

##### `McpServerDatadog`<sup>Optional</sup> <a name="McpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerDatadog"></a>

```go
McpServerDatadog DevopsagentAssociationConfigurationMcpServerDatadog
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

Datadog MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#mcp_server_datadog DevopsagentAssociation#mcp_server_datadog}

---

##### `McpServerGrafana`<sup>Optional</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerGrafana"></a>

```go
McpServerGrafana DevopsagentAssociationConfigurationMcpServerGrafana
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

Grafana MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#mcp_server_grafana DevopsagentAssociation#mcp_server_grafana}

---

##### `McpServerNewRelic`<sup>Optional</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerNewRelic"></a>

```go
McpServerNewRelic DevopsagentAssociationConfigurationMcpServerNewRelic
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

NewRelic MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#mcp_server_new_relic DevopsagentAssociation#mcp_server_new_relic}

---

##### `McpServerSigV4`<sup>Optional</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSigV4"></a>

```go
McpServerSigV4 DevopsagentAssociationConfigurationMcpServerSigV4
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

SigV4-authenticated MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#mcp_server_sig_v4 DevopsagentAssociation#mcp_server_sig_v4}

---

##### `McpServerSplunk`<sup>Optional</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.mcpServerSplunk"></a>

```go
McpServerSplunk DevopsagentAssociationConfigurationMcpServerSplunk
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

Splunk MCP server configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#mcp_server_splunk DevopsagentAssociation#mcp_server_splunk}

---

##### `PagerDuty`<sup>Optional</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.pagerDuty"></a>

```go
PagerDuty DevopsagentAssociationConfigurationPagerDuty
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

PagerDuty integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#pager_duty DevopsagentAssociation#pager_duty}

---

##### `ServiceNow`<sup>Optional</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.serviceNow"></a>

```go
ServiceNow DevopsagentAssociationConfigurationServiceNow
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

ServiceNow integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#service_now DevopsagentAssociation#service_now}

---

##### `Slack`<sup>Optional</sup> <a name="Slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.slack"></a>

```go
Slack DevopsagentAssociationConfigurationSlack
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

Slack workspace integration configuration.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#slack DevopsagentAssociation#slack}

---

##### `SourceAws`<sup>Optional</sup> <a name="SourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfiguration.property.sourceAws"></a>

```go
SourceAws DevopsagentAssociationConfigurationSourceAws
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

AWS association for 'source' account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#source_aws DevopsagentAssociation#source_aws}

---

### DevopsagentAssociationConfigurationAws <a name="DevopsagentAssociationConfigurationAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationAws {
	AccountId: *string,
	AccountType: *string,
	AssumableRoleArn: *string,
	Resources: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId">AccountId</a></code> | <code>*string</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType">AccountType</a></code> | <code>*string</code> | Account Type 'monitor' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>*string</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources">Resources</a></code> | <code>interface{}</code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags">Tags</a></code> | <code>interface{}</code> | List of AWS tags as key-value pairs. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `AccountType`<sup>Optional</sup> <a name="AccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.accountType"></a>

```go
AccountType *string
```

- *Type:* *string

Account Type 'monitor' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `AssumableRoleArn`<sup>Optional</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.assumableRoleArn"></a>

```go
AssumableRoleArn *string
```

- *Type:* *string

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationAwsResources <a name="DevopsagentAssociationConfigurationAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationAwsResources {
	ResourceArn: *string,
	ResourceMetadata: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata">ResourceMetadata</a></code> | <code>*string</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType">ResourceType</a></code> | <code>*string</code> | Resource type. |

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `ResourceMetadata`<sup>Optional</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceMetadata"></a>

```go
ResourceMetadata *string
```

- *Type:* *string

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResources.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationAwsTags <a name="DevopsagentAssociationConfigurationAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationAwsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

### DevopsagentAssociationConfigurationAzure <a name="DevopsagentAssociationConfigurationAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationAzure {
	SubscriptionId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | Azure subscription ID corresponding to provided resources. |

---

##### `SubscriptionId`<sup>Optional</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure.property.subscriptionId"></a>

```go
SubscriptionId *string
```

- *Type:* *string

Azure subscription ID corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#subscription_id DevopsagentAssociation#subscription_id}

---

### DevopsagentAssociationConfigurationDynatrace <a name="DevopsagentAssociationConfigurationDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationDynatrace {
	EnableWebhookUpdates: interface{},
	EnvId: *string,
	Resources: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId">EnvId</a></code> | <code>*string</code> | Dynatrace environment id. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources">Resources</a></code> | <code>*[]*string</code> | List of Dynatrace resources to monitor. |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.enableWebhookUpdates"></a>

```go
EnableWebhookUpdates interface{}
```

- *Type:* interface{}

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `EnvId`<sup>Optional</sup> <a name="EnvId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.envId"></a>

```go
EnvId *string
```

- *Type:* *string

Dynatrace environment id.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#env_id DevopsagentAssociation#env_id}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace.property.resources"></a>

```go
Resources *[]*string
```

- *Type:* *[]*string

List of Dynatrace resources to monitor.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

### DevopsagentAssociationConfigurationEventChannel <a name="DevopsagentAssociationConfigurationEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationEventChannel {
	EnableWebhookUpdates: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel.property.enableWebhookUpdates"></a>

```go
EnableWebhookUpdates interface{}
```

- *Type:* interface{}

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

### DevopsagentAssociationConfigurationGitHub <a name="DevopsagentAssociationConfigurationGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationGitHub {
	Owner: *string,
	OwnerType: *string,
	RepoId: *string,
	RepoName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner">Owner</a></code> | <code>*string</code> | Repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType">OwnerType</a></code> | <code>*string</code> | Type of repository owner. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId">RepoId</a></code> | <code>*string</code> | Associated Github repo ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName">RepoName</a></code> | <code>*string</code> | Associated Github repo name. |

---

##### `Owner`<sup>Optional</sup> <a name="Owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.owner"></a>

```go
Owner *string
```

- *Type:* *string

Repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#owner DevopsagentAssociation#owner}

---

##### `OwnerType`<sup>Optional</sup> <a name="OwnerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.ownerType"></a>

```go
OwnerType *string
```

- *Type:* *string

Type of repository owner.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#owner_type DevopsagentAssociation#owner_type}

---

##### `RepoId`<sup>Optional</sup> <a name="RepoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoId"></a>

```go
RepoId *string
```

- *Type:* *string

Associated Github repo ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#repo_id DevopsagentAssociation#repo_id}

---

##### `RepoName`<sup>Optional</sup> <a name="RepoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub.property.repoName"></a>

```go
RepoName *string
```

- *Type:* *string

Associated Github repo name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#repo_name DevopsagentAssociation#repo_name}

---

### DevopsagentAssociationConfigurationGitLab <a name="DevopsagentAssociationConfigurationGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationGitLab {
	EnableWebhookUpdates: interface{},
	InstanceIdentifier: *string,
	ProjectId: *string,
	ProjectPath: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier">InstanceIdentifier</a></code> | <code>*string</code> | GitLab instance identifier. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId">ProjectId</a></code> | <code>*string</code> | GitLab numeric project ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath">ProjectPath</a></code> | <code>*string</code> | Full GitLab project path (e.g., namespace/project-name). |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.enableWebhookUpdates"></a>

```go
EnableWebhookUpdates interface{}
```

- *Type:* interface{}

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `InstanceIdentifier`<sup>Optional</sup> <a name="InstanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.instanceIdentifier"></a>

```go
InstanceIdentifier *string
```

- *Type:* *string

GitLab instance identifier.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#instance_identifier DevopsagentAssociation#instance_identifier}

---

##### `ProjectId`<sup>Optional</sup> <a name="ProjectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectId"></a>

```go
ProjectId *string
```

- *Type:* *string

GitLab numeric project ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#project_id DevopsagentAssociation#project_id}

---

##### `ProjectPath`<sup>Optional</sup> <a name="ProjectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab.property.projectPath"></a>

```go
ProjectPath *string
```

- *Type:* *string

Full GitLab project path (e.g., namespace/project-name).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#project_path DevopsagentAssociation#project_path}

---

### DevopsagentAssociationConfigurationMcpServer <a name="DevopsagentAssociationConfigurationMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationMcpServer {
	Description: *string,
	EnableWebhookUpdates: interface{},
	Endpoint: *string,
	Name: *string,
	Tools: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description">Description</a></code> | <code>*string</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint">Endpoint</a></code> | <code>*string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name">Name</a></code> | <code>*string</code> | The name of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools">Tools</a></code> | <code>*[]*string</code> | List of MCP tools that can be used with the association. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.enableWebhookUpdates"></a>

```go
EnableWebhookUpdates interface{}
```

- *Type:* interface{}

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer.property.tools"></a>

```go
Tools *[]*string
```

- *Type:* *[]*string

List of MCP tools that can be used with the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerDatadog <a name="DevopsagentAssociationConfigurationMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationMcpServerDatadog {
	Description: *string,
	EnableWebhookUpdates: interface{},
	Endpoint: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description">Description</a></code> | <code>*string</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint">Endpoint</a></code> | <code>*string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name">Name</a></code> | <code>*string</code> | The name of the MCP server. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.enableWebhookUpdates"></a>

```go
EnableWebhookUpdates interface{}
```

- *Type:* interface{}

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationMcpServerGrafana <a name="DevopsagentAssociationConfigurationMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationMcpServerGrafana {
	EnableWebhookUpdates: interface{},
	Endpoint: *string,
	Tools: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint">Endpoint</a></code> | <code>*string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools">Tools</a></code> | <code>*[]*string</code> | List of tool categories to enable for the Grafana MCP server. |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.enableWebhookUpdates"></a>

```go
EnableWebhookUpdates interface{}
```

- *Type:* interface{}

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana.property.tools"></a>

```go
Tools *[]*string
```

- *Type:* *[]*string

List of tool categories to enable for the Grafana MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerNewRelic <a name="DevopsagentAssociationConfigurationMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationMcpServerNewRelic {
	AccountId: *string,
	Endpoint: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId">AccountId</a></code> | <code>*string</code> | New Relic Account ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint">Endpoint</a></code> | <code>*string</code> | MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/). |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

New Relic Account ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

MCP server endpoint URL (e.g., https://mcp.newrelic.com/mcp/).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

### DevopsagentAssociationConfigurationMcpServerSigV4 <a name="DevopsagentAssociationConfigurationMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationMcpServerSigV4 {
	Tools: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools">Tools</a></code> | <code>*[]*string</code> | List of MCP tools available for the association. |

---

##### `Tools`<sup>Optional</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4.property.tools"></a>

```go
Tools *[]*string
```

- *Type:* *[]*string

List of MCP tools available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#tools DevopsagentAssociation#tools}

---

### DevopsagentAssociationConfigurationMcpServerSplunk <a name="DevopsagentAssociationConfigurationMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationMcpServerSplunk {
	Description: *string,
	EnableWebhookUpdates: interface{},
	Endpoint: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description">Description</a></code> | <code>*string</code> | The description of the MCP server. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint">Endpoint</a></code> | <code>*string</code> | MCP server endpoint URL. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name">Name</a></code> | <code>*string</code> | The name of the MCP server. |

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#description DevopsagentAssociation#description}

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.enableWebhookUpdates"></a>

```go
EnableWebhookUpdates interface{}
```

- *Type:* interface{}

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Endpoint`<sup>Optional</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.endpoint"></a>

```go
Endpoint *string
```

- *Type:* *string

MCP server endpoint URL.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#endpoint DevopsagentAssociation#endpoint}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the MCP server.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#name DevopsagentAssociation#name}

---

### DevopsagentAssociationConfigurationPagerDuty <a name="DevopsagentAssociationConfigurationPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationPagerDuty {
	CustomerEmail: *string,
	EnableWebhookUpdates: interface{},
	Services: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail">CustomerEmail</a></code> | <code>*string</code> | Email to be used in PagerDuty API header. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services">Services</a></code> | <code>*[]*string</code> | List of PagerDuty service IDs available for the association. |

---

##### `CustomerEmail`<sup>Optional</sup> <a name="CustomerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.customerEmail"></a>

```go
CustomerEmail *string
```

- *Type:* *string

Email to be used in PagerDuty API header.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#customer_email DevopsagentAssociation#customer_email}

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.enableWebhookUpdates"></a>

```go
EnableWebhookUpdates interface{}
```

- *Type:* interface{}

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `Services`<sup>Optional</sup> <a name="Services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty.property.services"></a>

```go
Services *[]*string
```

- *Type:* *[]*string

List of PagerDuty service IDs available for the association.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#services DevopsagentAssociation#services}

---

### DevopsagentAssociationConfigurationServiceNow <a name="DevopsagentAssociationConfigurationServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationServiceNow {
	EnableWebhookUpdates: interface{},
	InstanceId: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId">InstanceId</a></code> | <code>*string</code> | ServiceNow instance ID. |

---

##### `EnableWebhookUpdates`<sup>Optional</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.enableWebhookUpdates"></a>

```go
EnableWebhookUpdates interface{}
```

- *Type:* interface{}

When set to true, enables the Agent Space to create and update webhooks for receiving notifications and events from the service.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#enable_webhook_updates DevopsagentAssociation#enable_webhook_updates}

---

##### `InstanceId`<sup>Optional</sup> <a name="InstanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow.property.instanceId"></a>

```go
InstanceId *string
```

- *Type:* *string

ServiceNow instance ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#instance_id DevopsagentAssociation#instance_id}

---

### DevopsagentAssociationConfigurationSlack <a name="DevopsagentAssociationConfigurationSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationSlack {
	TransmissionTarget: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget,
	WorkspaceId: *string,
	WorkspaceName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget">TransmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a></code> | Transmission targets for agent notifications. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | Associated Slack workspace ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | Associated Slack workspace name. |

---

##### `TransmissionTarget`<sup>Optional</sup> <a name="TransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.transmissionTarget"></a>

```go
TransmissionTarget DevopsagentAssociationConfigurationSlackTransmissionTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

Transmission targets for agent notifications.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#transmission_target DevopsagentAssociation#transmission_target}

---

##### `WorkspaceId`<sup>Optional</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceId"></a>

```go
WorkspaceId *string
```

- *Type:* *string

Associated Slack workspace ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#workspace_id DevopsagentAssociation#workspace_id}

---

##### `WorkspaceName`<sup>Optional</sup> <a name="WorkspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack.property.workspaceName"></a>

```go
WorkspaceName *string
```

- *Type:* *string

Associated Slack workspace name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#workspace_name DevopsagentAssociation#workspace_name}

---

### DevopsagentAssociationConfigurationSlackTransmissionTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationSlackTransmissionTarget {
	IncidentResponseTarget: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget">IncidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a></code> | Destination for IncidentResponse agent. |

---

##### `IncidentResponseTarget`<sup>Optional</sup> <a name="IncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget.property.incidentResponseTarget"></a>

```go
IncidentResponseTarget DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

Destination for IncidentResponse agent.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#incident_response_target DevopsagentAssociation#incident_response_target}

---

### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget {
	ChannelId: *string,
	ChannelName: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId">ChannelId</a></code> | <code>*string</code> | Slack channel ID. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName">ChannelName</a></code> | <code>*string</code> | Slack channel name. |

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

Slack channel ID.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#channel_id DevopsagentAssociation#channel_id}

---

##### `ChannelName`<sup>Optional</sup> <a name="ChannelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget.property.channelName"></a>

```go
ChannelName *string
```

- *Type:* *string

Slack channel name.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#channel_name DevopsagentAssociation#channel_name}

---

### DevopsagentAssociationConfigurationSourceAws <a name="DevopsagentAssociationConfigurationSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationSourceAws {
	AccountId: *string,
	AccountType: *string,
	AssumableRoleArn: *string,
	Resources: interface{},
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId">AccountId</a></code> | <code>*string</code> | AWS Account Id corresponding to provided resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType">AccountType</a></code> | <code>*string</code> | Account Type 'source' for DevOpsAgent monitoring. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>*string</code> | Role ARN to be assumed by DevOpsAgent to operate on behalf of customer. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources">Resources</a></code> | <code>interface{}</code> | List of AWS resources. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags">Tags</a></code> | <code>interface{}</code> | List of AWS tags as key-value pairs. |

---

##### `AccountId`<sup>Optional</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountId"></a>

```go
AccountId *string
```

- *Type:* *string

AWS Account Id corresponding to provided resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#account_id DevopsagentAssociation#account_id}

---

##### `AccountType`<sup>Optional</sup> <a name="AccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.accountType"></a>

```go
AccountType *string
```

- *Type:* *string

Account Type 'source' for DevOpsAgent monitoring.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#account_type DevopsagentAssociation#account_type}

---

##### `AssumableRoleArn`<sup>Optional</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.assumableRoleArn"></a>

```go
AssumableRoleArn *string
```

- *Type:* *string

Role ARN to be assumed by DevOpsAgent to operate on behalf of customer.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#assumable_role_arn DevopsagentAssociation#assumable_role_arn}

---

##### `Resources`<sup>Optional</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.resources"></a>

```go
Resources interface{}
```

- *Type:* interface{}

List of AWS resources.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#resources DevopsagentAssociation#resources}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

List of AWS tags as key-value pairs.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#tags DevopsagentAssociation#tags}

---

### DevopsagentAssociationConfigurationSourceAwsResources <a name="DevopsagentAssociationConfigurationSourceAwsResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationSourceAwsResources {
	ResourceArn: *string,
	ResourceMetadata: *string,
	ResourceType: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata">ResourceMetadata</a></code> | <code>*string</code> | Additional metadata for the resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType">ResourceType</a></code> | <code>*string</code> | Resource type. |

---

##### `ResourceArn`<sup>Optional</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceArn"></a>

```go
ResourceArn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#resource_arn DevopsagentAssociation#resource_arn}

---

##### `ResourceMetadata`<sup>Optional</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceMetadata"></a>

```go
ResourceMetadata *string
```

- *Type:* *string

Additional metadata for the resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#resource_metadata DevopsagentAssociation#resource_metadata}

---

##### `ResourceType`<sup>Optional</sup> <a name="ResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResources.property.resourceType"></a>

```go
ResourceType *string
```

- *Type:* *string

Resource type.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#resource_type DevopsagentAssociation#resource_type}

---

### DevopsagentAssociationConfigurationSourceAwsTags <a name="DevopsagentAssociationConfigurationSourceAwsTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

&devopsagentassociation.DevopsagentAssociationConfigurationSourceAwsTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#key DevopsagentAssociation#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.96.0/docs/resources/devopsagent_association#value DevopsagentAssociation#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### DevopsagentAssociationConfigurationAwsOutputReference <a name="DevopsagentAssociationConfigurationAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType">ResetAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn">ResetAssumableRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAccountType` <a name="ResetAccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAccountType"></a>

```go
func ResetAccountType()
```

##### `ResetAssumableRoleArn` <a name="ResetAssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetAssumableRoleArn"></a>

```go
func ResetAssumableRoleArn()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput">AccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput">AssumableRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resources"></a>

```go
func Resources() DevopsagentAssociationConfigurationAwsResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList">DevopsagentAssociationConfigurationAwsResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tags"></a>

```go
func Tags() DevopsagentAssociationConfigurationAwsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList">DevopsagentAssociationConfigurationAwsTagsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountTypeInput`<sup>Optional</sup> <a name="AccountTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountTypeInput"></a>

```go
func AccountTypeInput() *string
```

- *Type:* *string

---

##### `AssumableRoleArnInput`<sup>Optional</sup> <a name="AssumableRoleArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArnInput"></a>

```go
func AssumableRoleArnInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `AssumableRoleArn`<sup>Required</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.assumableRoleArn"></a>

```go
func AssumableRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationAwsResourcesList <a name="DevopsagentAssociationConfigurationAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationAwsResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsagentAssociationConfigurationAwsResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get"></a>

```go
func Get(index *f64) DevopsagentAssociationConfigurationAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationAwsResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsagentAssociationConfigurationAwsResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata">ResetResourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceArn"></a>

```go
func ResetResourceArn()
```

##### `ResetResourceMetadata` <a name="ResetResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceMetadata"></a>

```go
func ResetResourceMetadata()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput">ResourceMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata">ResourceMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `ResourceMetadataInput`<sup>Optional</sup> <a name="ResourceMetadataInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```go
func ResourceMetadataInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `ResourceMetadata`<sup>Required</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceMetadata"></a>

```go
func ResourceMetadata() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationAwsTagsList <a name="DevopsagentAssociationConfigurationAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationAwsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsagentAssociationConfigurationAwsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get"></a>

```go
func Get(index *f64) DevopsagentAssociationConfigurationAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationAwsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsagentAssociationConfigurationAwsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationAzureOutputReference <a name="DevopsagentAssociationConfigurationAzureOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationAzureOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationAzureOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId">ResetSubscriptionId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetSubscriptionId` <a name="ResetSubscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.resetSubscriptionId"></a>

```go
func ResetSubscriptionId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput">SubscriptionIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId">SubscriptionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `SubscriptionIdInput`<sup>Optional</sup> <a name="SubscriptionIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionIdInput"></a>

```go
func SubscriptionIdInput() *string
```

- *Type:* *string

---

##### `SubscriptionId`<sup>Required</sup> <a name="SubscriptionId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.subscriptionId"></a>

```go
func SubscriptionId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationDynatraceOutputReference <a name="DevopsagentAssociationConfigurationDynatraceOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationDynatraceOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationDynatraceOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId">ResetEnvId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources">ResetResources</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnableWebhookUpdates"></a>

```go
func ResetEnableWebhookUpdates()
```

##### `ResetEnvId` <a name="ResetEnvId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetEnvId"></a>

```go
func ResetEnvId()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.resetResources"></a>

```go
func ResetResources()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput">EnvIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId">EnvId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources">Resources</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdatesInput"></a>

```go
func EnableWebhookUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `EnvIdInput`<sup>Optional</sup> <a name="EnvIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envIdInput"></a>

```go
func EnvIdInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() interface{}
```

- *Type:* interface{}

---

##### `EnvId`<sup>Required</sup> <a name="EnvId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.envId"></a>

```go
func EnvId() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.resources"></a>

```go
func Resources() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationEventChannelOutputReference <a name="DevopsagentAssociationConfigurationEventChannelOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationEventChannelOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationEventChannelOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.resetEnableWebhookUpdates"></a>

```go
func ResetEnableWebhookUpdates()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdatesInput"></a>

```go
func EnableWebhookUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationGitHubOutputReference <a name="DevopsagentAssociationConfigurationGitHubOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationGitHubOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationGitHubOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner">ResetOwner</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType">ResetOwnerType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId">ResetRepoId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName">ResetRepoName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetOwner` <a name="ResetOwner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwner"></a>

```go
func ResetOwner()
```

##### `ResetOwnerType` <a name="ResetOwnerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetOwnerType"></a>

```go
func ResetOwnerType()
```

##### `ResetRepoId` <a name="ResetRepoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoId"></a>

```go
func ResetRepoId()
```

##### `ResetRepoName` <a name="ResetRepoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.resetRepoName"></a>

```go
func ResetRepoName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput">OwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput">OwnerTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput">RepoIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput">RepoNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType">OwnerType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId">RepoId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName">RepoName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `OwnerInput`<sup>Optional</sup> <a name="OwnerInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerInput"></a>

```go
func OwnerInput() *string
```

- *Type:* *string

---

##### `OwnerTypeInput`<sup>Optional</sup> <a name="OwnerTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerTypeInput"></a>

```go
func OwnerTypeInput() *string
```

- *Type:* *string

---

##### `RepoIdInput`<sup>Optional</sup> <a name="RepoIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoIdInput"></a>

```go
func RepoIdInput() *string
```

- *Type:* *string

---

##### `RepoNameInput`<sup>Optional</sup> <a name="RepoNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoNameInput"></a>

```go
func RepoNameInput() *string
```

- *Type:* *string

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `OwnerType`<sup>Required</sup> <a name="OwnerType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.ownerType"></a>

```go
func OwnerType() *string
```

- *Type:* *string

---

##### `RepoId`<sup>Required</sup> <a name="RepoId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoId"></a>

```go
func RepoId() *string
```

- *Type:* *string

---

##### `RepoName`<sup>Required</sup> <a name="RepoName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.repoName"></a>

```go
func RepoName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationGitLabOutputReference <a name="DevopsagentAssociationConfigurationGitLabOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationGitLabOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationGitLabOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier">ResetInstanceIdentifier</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId">ResetProjectId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath">ResetProjectPath</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetEnableWebhookUpdates"></a>

```go
func ResetEnableWebhookUpdates()
```

##### `ResetInstanceIdentifier` <a name="ResetInstanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetInstanceIdentifier"></a>

```go
func ResetInstanceIdentifier()
```

##### `ResetProjectId` <a name="ResetProjectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectId"></a>

```go
func ResetProjectId()
```

##### `ResetProjectPath` <a name="ResetProjectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.resetProjectPath"></a>

```go
func ResetProjectPath()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput">InstanceIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput">ProjectIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput">ProjectPathInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier">InstanceIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId">ProjectId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath">ProjectPath</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdatesInput"></a>

```go
func EnableWebhookUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceIdentifierInput`<sup>Optional</sup> <a name="InstanceIdentifierInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifierInput"></a>

```go
func InstanceIdentifierInput() *string
```

- *Type:* *string

---

##### `ProjectIdInput`<sup>Optional</sup> <a name="ProjectIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectIdInput"></a>

```go
func ProjectIdInput() *string
```

- *Type:* *string

---

##### `ProjectPathInput`<sup>Optional</sup> <a name="ProjectPathInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPathInput"></a>

```go
func ProjectPathInput() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() interface{}
```

- *Type:* interface{}

---

##### `InstanceIdentifier`<sup>Required</sup> <a name="InstanceIdentifier" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.instanceIdentifier"></a>

```go
func InstanceIdentifier() *string
```

- *Type:* *string

---

##### `ProjectId`<sup>Required</sup> <a name="ProjectId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectId"></a>

```go
func ProjectId() *string
```

- *Type:* *string

---

##### `ProjectPath`<sup>Required</sup> <a name="ProjectPath" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.projectPath"></a>

```go
func ProjectPath() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationMcpServerDatadogOutputReference <a name="DevopsagentAssociationConfigurationMcpServerDatadogOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationMcpServerDatadogOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationMcpServerDatadogOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEnableWebhookUpdates"></a>

```go
func ResetEnableWebhookUpdates()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdatesInput"></a>

```go
func EnableWebhookUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference <a name="DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationMcpServerGrafanaOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools">ResetTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEnableWebhookUpdates"></a>

```go
func ResetEnableWebhookUpdates()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.resetTools"></a>

```go
func ResetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput">ToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools">Tools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdatesInput"></a>

```go
func EnableWebhookUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.toolsInput"></a>

```go
func ToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.tools"></a>

```go
func Tools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference <a name="DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationMcpServerNewRelicOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationMcpServerOutputReference <a name="DevopsagentAssociationConfigurationMcpServerOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationMcpServerOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationMcpServerOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName">ResetName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools">ResetTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEnableWebhookUpdates"></a>

```go
func ResetEnableWebhookUpdates()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetName"></a>

```go
func ResetName()
```

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.resetTools"></a>

```go
func ResetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput">ToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools">Tools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdatesInput"></a>

```go
func EnableWebhookUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.toolsInput"></a>

```go
func ToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.tools"></a>

```go
func Tools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationMcpServerSigV4OutputReference <a name="DevopsagentAssociationConfigurationMcpServerSigV4OutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationMcpServerSigV4OutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationMcpServerSigV4OutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools">ResetTools</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetTools` <a name="ResetTools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.resetTools"></a>

```go
func ResetTools()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput">ToolsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools">Tools</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ToolsInput`<sup>Optional</sup> <a name="ToolsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.toolsInput"></a>

```go
func ToolsInput() *[]*string
```

- *Type:* *[]*string

---

##### `Tools`<sup>Required</sup> <a name="Tools" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.tools"></a>

```go
func Tools() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationMcpServerSplunkOutputReference <a name="DevopsagentAssociationConfigurationMcpServerSplunkOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationMcpServerSplunkOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationMcpServerSplunkOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint">ResetEndpoint</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEnableWebhookUpdates"></a>

```go
func ResetEnableWebhookUpdates()
```

##### `ResetEndpoint` <a name="ResetEndpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetEndpoint"></a>

```go
func ResetEndpoint()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput">EndpointInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint">Endpoint</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdatesInput"></a>

```go
func EnableWebhookUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `EndpointInput`<sup>Optional</sup> <a name="EndpointInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpointInput"></a>

```go
func EndpointInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() interface{}
```

- *Type:* interface{}

---

##### `Endpoint`<sup>Required</sup> <a name="Endpoint" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.endpoint"></a>

```go
func Endpoint() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationOutputReference <a name="DevopsagentAssociationConfigurationOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws">PutAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure">PutAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace">PutDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel">PutEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub">PutGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab">PutGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer">PutMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog">PutMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana">PutMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic">PutMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4">PutMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk">PutMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty">PutPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow">PutServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack">PutSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws">PutSourceAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws">ResetAws</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure">ResetAzure</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace">ResetDynatrace</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel">ResetEventChannel</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub">ResetGitHub</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab">ResetGitLab</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer">ResetMcpServer</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog">ResetMcpServerDatadog</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana">ResetMcpServerGrafana</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic">ResetMcpServerNewRelic</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4">ResetMcpServerSigV4</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk">ResetMcpServerSplunk</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty">ResetPagerDuty</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow">ResetServiceNow</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack">ResetSlack</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws">ResetSourceAws</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutAws` <a name="PutAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws"></a>

```go
func PutAws(value DevopsagentAssociationConfigurationAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAws">DevopsagentAssociationConfigurationAws</a>

---

##### `PutAzure` <a name="PutAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure"></a>

```go
func PutAzure(value DevopsagentAssociationConfigurationAzure)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putAzure.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzure">DevopsagentAssociationConfigurationAzure</a>

---

##### `PutDynatrace` <a name="PutDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace"></a>

```go
func PutDynatrace(value DevopsagentAssociationConfigurationDynatrace)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putDynatrace.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatrace">DevopsagentAssociationConfigurationDynatrace</a>

---

##### `PutEventChannel` <a name="PutEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel"></a>

```go
func PutEventChannel(value DevopsagentAssociationConfigurationEventChannel)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putEventChannel.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannel">DevopsagentAssociationConfigurationEventChannel</a>

---

##### `PutGitHub` <a name="PutGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub"></a>

```go
func PutGitHub(value DevopsagentAssociationConfigurationGitHub)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitHub.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHub">DevopsagentAssociationConfigurationGitHub</a>

---

##### `PutGitLab` <a name="PutGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab"></a>

```go
func PutGitLab(value DevopsagentAssociationConfigurationGitLab)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putGitLab.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLab">DevopsagentAssociationConfigurationGitLab</a>

---

##### `PutMcpServer` <a name="PutMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer"></a>

```go
func PutMcpServer(value DevopsagentAssociationConfigurationMcpServer)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServer.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServer">DevopsagentAssociationConfigurationMcpServer</a>

---

##### `PutMcpServerDatadog` <a name="PutMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog"></a>

```go
func PutMcpServerDatadog(value DevopsagentAssociationConfigurationMcpServerDatadog)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerDatadog.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadog">DevopsagentAssociationConfigurationMcpServerDatadog</a>

---

##### `PutMcpServerGrafana` <a name="PutMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana"></a>

```go
func PutMcpServerGrafana(value DevopsagentAssociationConfigurationMcpServerGrafana)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerGrafana.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafana">DevopsagentAssociationConfigurationMcpServerGrafana</a>

---

##### `PutMcpServerNewRelic` <a name="PutMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic"></a>

```go
func PutMcpServerNewRelic(value DevopsagentAssociationConfigurationMcpServerNewRelic)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerNewRelic.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelic">DevopsagentAssociationConfigurationMcpServerNewRelic</a>

---

##### `PutMcpServerSigV4` <a name="PutMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4"></a>

```go
func PutMcpServerSigV4(value DevopsagentAssociationConfigurationMcpServerSigV4)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSigV4.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4">DevopsagentAssociationConfigurationMcpServerSigV4</a>

---

##### `PutMcpServerSplunk` <a name="PutMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk"></a>

```go
func PutMcpServerSplunk(value DevopsagentAssociationConfigurationMcpServerSplunk)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putMcpServerSplunk.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunk">DevopsagentAssociationConfigurationMcpServerSplunk</a>

---

##### `PutPagerDuty` <a name="PutPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty"></a>

```go
func PutPagerDuty(value DevopsagentAssociationConfigurationPagerDuty)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putPagerDuty.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDuty">DevopsagentAssociationConfigurationPagerDuty</a>

---

##### `PutServiceNow` <a name="PutServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow"></a>

```go
func PutServiceNow(value DevopsagentAssociationConfigurationServiceNow)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putServiceNow.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNow">DevopsagentAssociationConfigurationServiceNow</a>

---

##### `PutSlack` <a name="PutSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack"></a>

```go
func PutSlack(value DevopsagentAssociationConfigurationSlack)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSlack.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlack">DevopsagentAssociationConfigurationSlack</a>

---

##### `PutSourceAws` <a name="PutSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws"></a>

```go
func PutSourceAws(value DevopsagentAssociationConfigurationSourceAws)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.putSourceAws.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAws">DevopsagentAssociationConfigurationSourceAws</a>

---

##### `ResetAws` <a name="ResetAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAws"></a>

```go
func ResetAws()
```

##### `ResetAzure` <a name="ResetAzure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetAzure"></a>

```go
func ResetAzure()
```

##### `ResetDynatrace` <a name="ResetDynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetDynatrace"></a>

```go
func ResetDynatrace()
```

##### `ResetEventChannel` <a name="ResetEventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetEventChannel"></a>

```go
func ResetEventChannel()
```

##### `ResetGitHub` <a name="ResetGitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitHub"></a>

```go
func ResetGitHub()
```

##### `ResetGitLab` <a name="ResetGitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetGitLab"></a>

```go
func ResetGitLab()
```

##### `ResetMcpServer` <a name="ResetMcpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServer"></a>

```go
func ResetMcpServer()
```

##### `ResetMcpServerDatadog` <a name="ResetMcpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerDatadog"></a>

```go
func ResetMcpServerDatadog()
```

##### `ResetMcpServerGrafana` <a name="ResetMcpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerGrafana"></a>

```go
func ResetMcpServerGrafana()
```

##### `ResetMcpServerNewRelic` <a name="ResetMcpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerNewRelic"></a>

```go
func ResetMcpServerNewRelic()
```

##### `ResetMcpServerSigV4` <a name="ResetMcpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSigV4"></a>

```go
func ResetMcpServerSigV4()
```

##### `ResetMcpServerSplunk` <a name="ResetMcpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetMcpServerSplunk"></a>

```go
func ResetMcpServerSplunk()
```

##### `ResetPagerDuty` <a name="ResetPagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetPagerDuty"></a>

```go
func ResetPagerDuty()
```

##### `ResetServiceNow` <a name="ResetServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetServiceNow"></a>

```go
func ResetServiceNow()
```

##### `ResetSlack` <a name="ResetSlack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSlack"></a>

```go
func ResetSlack()
```

##### `ResetSourceAws` <a name="ResetSourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.resetSourceAws"></a>

```go
func ResetSourceAws()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws">Aws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure">Azure</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace">Dynatrace</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel">EventChannel</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub">GitHub</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab">GitLab</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer">McpServer</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog">McpServerDatadog</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana">McpServerGrafana</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic">McpServerNewRelic</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4">McpServerSigV4</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk">McpServerSplunk</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty">PagerDuty</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow">ServiceNow</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack">Slack</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws">SourceAws</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput">AwsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput">AzureInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput">DynatraceInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput">EventChannelInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput">GitHubInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput">GitLabInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput">McpServerDatadogInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput">McpServerGrafanaInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput">McpServerInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput">McpServerNewRelicInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input">McpServerSigV4Input</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput">McpServerSplunkInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput">PagerDutyInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput">ServiceNowInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput">SlackInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput">SourceAwsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Aws`<sup>Required</sup> <a name="Aws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.aws"></a>

```go
func Aws() DevopsagentAssociationConfigurationAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAwsOutputReference">DevopsagentAssociationConfigurationAwsOutputReference</a>

---

##### `Azure`<sup>Required</sup> <a name="Azure" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azure"></a>

```go
func Azure() DevopsagentAssociationConfigurationAzureOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationAzureOutputReference">DevopsagentAssociationConfigurationAzureOutputReference</a>

---

##### `Dynatrace`<sup>Required</sup> <a name="Dynatrace" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatrace"></a>

```go
func Dynatrace() DevopsagentAssociationConfigurationDynatraceOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationDynatraceOutputReference">DevopsagentAssociationConfigurationDynatraceOutputReference</a>

---

##### `EventChannel`<sup>Required</sup> <a name="EventChannel" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannel"></a>

```go
func EventChannel() DevopsagentAssociationConfigurationEventChannelOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationEventChannelOutputReference">DevopsagentAssociationConfigurationEventChannelOutputReference</a>

---

##### `GitHub`<sup>Required</sup> <a name="GitHub" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHub"></a>

```go
func GitHub() DevopsagentAssociationConfigurationGitHubOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitHubOutputReference">DevopsagentAssociationConfigurationGitHubOutputReference</a>

---

##### `GitLab`<sup>Required</sup> <a name="GitLab" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLab"></a>

```go
func GitLab() DevopsagentAssociationConfigurationGitLabOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationGitLabOutputReference">DevopsagentAssociationConfigurationGitLabOutputReference</a>

---

##### `McpServer`<sup>Required</sup> <a name="McpServer" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServer"></a>

```go
func McpServer() DevopsagentAssociationConfigurationMcpServerOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerOutputReference">DevopsagentAssociationConfigurationMcpServerOutputReference</a>

---

##### `McpServerDatadog`<sup>Required</sup> <a name="McpServerDatadog" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadog"></a>

```go
func McpServerDatadog() DevopsagentAssociationConfigurationMcpServerDatadogOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerDatadogOutputReference">DevopsagentAssociationConfigurationMcpServerDatadogOutputReference</a>

---

##### `McpServerGrafana`<sup>Required</sup> <a name="McpServerGrafana" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafana"></a>

```go
func McpServerGrafana() DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference">DevopsagentAssociationConfigurationMcpServerGrafanaOutputReference</a>

---

##### `McpServerNewRelic`<sup>Required</sup> <a name="McpServerNewRelic" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelic"></a>

```go
func McpServerNewRelic() DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference">DevopsagentAssociationConfigurationMcpServerNewRelicOutputReference</a>

---

##### `McpServerSigV4`<sup>Required</sup> <a name="McpServerSigV4" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4"></a>

```go
func McpServerSigV4() DevopsagentAssociationConfigurationMcpServerSigV4OutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSigV4OutputReference">DevopsagentAssociationConfigurationMcpServerSigV4OutputReference</a>

---

##### `McpServerSplunk`<sup>Required</sup> <a name="McpServerSplunk" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunk"></a>

```go
func McpServerSplunk() DevopsagentAssociationConfigurationMcpServerSplunkOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationMcpServerSplunkOutputReference">DevopsagentAssociationConfigurationMcpServerSplunkOutputReference</a>

---

##### `PagerDuty`<sup>Required</sup> <a name="PagerDuty" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDuty"></a>

```go
func PagerDuty() DevopsagentAssociationConfigurationPagerDutyOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference">DevopsagentAssociationConfigurationPagerDutyOutputReference</a>

---

##### `ServiceNow`<sup>Required</sup> <a name="ServiceNow" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNow"></a>

```go
func ServiceNow() DevopsagentAssociationConfigurationServiceNowOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference">DevopsagentAssociationConfigurationServiceNowOutputReference</a>

---

##### `Slack`<sup>Required</sup> <a name="Slack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slack"></a>

```go
func Slack() DevopsagentAssociationConfigurationSlackOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference">DevopsagentAssociationConfigurationSlackOutputReference</a>

---

##### `SourceAws`<sup>Required</sup> <a name="SourceAws" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAws"></a>

```go
func SourceAws() DevopsagentAssociationConfigurationSourceAwsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference">DevopsagentAssociationConfigurationSourceAwsOutputReference</a>

---

##### `AwsInput`<sup>Optional</sup> <a name="AwsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.awsInput"></a>

```go
func AwsInput() interface{}
```

- *Type:* interface{}

---

##### `AzureInput`<sup>Optional</sup> <a name="AzureInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.azureInput"></a>

```go
func AzureInput() interface{}
```

- *Type:* interface{}

---

##### `DynatraceInput`<sup>Optional</sup> <a name="DynatraceInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.dynatraceInput"></a>

```go
func DynatraceInput() interface{}
```

- *Type:* interface{}

---

##### `EventChannelInput`<sup>Optional</sup> <a name="EventChannelInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.eventChannelInput"></a>

```go
func EventChannelInput() interface{}
```

- *Type:* interface{}

---

##### `GitHubInput`<sup>Optional</sup> <a name="GitHubInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitHubInput"></a>

```go
func GitHubInput() interface{}
```

- *Type:* interface{}

---

##### `GitLabInput`<sup>Optional</sup> <a name="GitLabInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.gitLabInput"></a>

```go
func GitLabInput() interface{}
```

- *Type:* interface{}

---

##### `McpServerDatadogInput`<sup>Optional</sup> <a name="McpServerDatadogInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerDatadogInput"></a>

```go
func McpServerDatadogInput() interface{}
```

- *Type:* interface{}

---

##### `McpServerGrafanaInput`<sup>Optional</sup> <a name="McpServerGrafanaInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerGrafanaInput"></a>

```go
func McpServerGrafanaInput() interface{}
```

- *Type:* interface{}

---

##### `McpServerInput`<sup>Optional</sup> <a name="McpServerInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerInput"></a>

```go
func McpServerInput() interface{}
```

- *Type:* interface{}

---

##### `McpServerNewRelicInput`<sup>Optional</sup> <a name="McpServerNewRelicInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerNewRelicInput"></a>

```go
func McpServerNewRelicInput() interface{}
```

- *Type:* interface{}

---

##### `McpServerSigV4Input`<sup>Optional</sup> <a name="McpServerSigV4Input" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSigV4Input"></a>

```go
func McpServerSigV4Input() interface{}
```

- *Type:* interface{}

---

##### `McpServerSplunkInput`<sup>Optional</sup> <a name="McpServerSplunkInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.mcpServerSplunkInput"></a>

```go
func McpServerSplunkInput() interface{}
```

- *Type:* interface{}

---

##### `PagerDutyInput`<sup>Optional</sup> <a name="PagerDutyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.pagerDutyInput"></a>

```go
func PagerDutyInput() interface{}
```

- *Type:* interface{}

---

##### `ServiceNowInput`<sup>Optional</sup> <a name="ServiceNowInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.serviceNowInput"></a>

```go
func ServiceNowInput() interface{}
```

- *Type:* interface{}

---

##### `SlackInput`<sup>Optional</sup> <a name="SlackInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.slackInput"></a>

```go
func SlackInput() interface{}
```

- *Type:* interface{}

---

##### `SourceAwsInput`<sup>Optional</sup> <a name="SourceAwsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.sourceAwsInput"></a>

```go
func SourceAwsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationPagerDutyOutputReference <a name="DevopsagentAssociationConfigurationPagerDutyOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationPagerDutyOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationPagerDutyOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail">ResetCustomerEmail</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices">ResetServices</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetCustomerEmail` <a name="ResetCustomerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetCustomerEmail"></a>

```go
func ResetCustomerEmail()
```

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetEnableWebhookUpdates"></a>

```go
func ResetEnableWebhookUpdates()
```

##### `ResetServices` <a name="ResetServices" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.resetServices"></a>

```go
func ResetServices()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput">CustomerEmailInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput">ServicesInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail">CustomerEmail</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services">Services</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `CustomerEmailInput`<sup>Optional</sup> <a name="CustomerEmailInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmailInput"></a>

```go
func CustomerEmailInput() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdatesInput"></a>

```go
func EnableWebhookUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `ServicesInput`<sup>Optional</sup> <a name="ServicesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.servicesInput"></a>

```go
func ServicesInput() *[]*string
```

- *Type:* *[]*string

---

##### `CustomerEmail`<sup>Required</sup> <a name="CustomerEmail" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.customerEmail"></a>

```go
func CustomerEmail() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() interface{}
```

- *Type:* interface{}

---

##### `Services`<sup>Required</sup> <a name="Services" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.services"></a>

```go
func Services() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationPagerDutyOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationServiceNowOutputReference <a name="DevopsagentAssociationConfigurationServiceNowOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationServiceNowOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationServiceNowOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates">ResetEnableWebhookUpdates</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId">ResetInstanceId</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetEnableWebhookUpdates` <a name="ResetEnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetEnableWebhookUpdates"></a>

```go
func ResetEnableWebhookUpdates()
```

##### `ResetInstanceId` <a name="ResetInstanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.resetInstanceId"></a>

```go
func ResetInstanceId()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput">EnableWebhookUpdatesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput">InstanceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates">EnableWebhookUpdates</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId">InstanceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdatesInput`<sup>Optional</sup> <a name="EnableWebhookUpdatesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdatesInput"></a>

```go
func EnableWebhookUpdatesInput() interface{}
```

- *Type:* interface{}

---

##### `InstanceIdInput`<sup>Optional</sup> <a name="InstanceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceIdInput"></a>

```go
func InstanceIdInput() *string
```

- *Type:* *string

---

##### `EnableWebhookUpdates`<sup>Required</sup> <a name="EnableWebhookUpdates" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.enableWebhookUpdates"></a>

```go
func EnableWebhookUpdates() interface{}
```

- *Type:* interface{}

---

##### `InstanceId`<sup>Required</sup> <a name="InstanceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.instanceId"></a>

```go
func InstanceId() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationServiceNowOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationSlackOutputReference <a name="DevopsagentAssociationConfigurationSlackOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationSlackOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationSlackOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget">PutTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget">ResetTransmissionTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId">ResetWorkspaceId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName">ResetWorkspaceName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTransmissionTarget` <a name="PutTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget"></a>

```go
func PutTransmissionTarget(value DevopsagentAssociationConfigurationSlackTransmissionTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.putTransmissionTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTarget">DevopsagentAssociationConfigurationSlackTransmissionTarget</a>

---

##### `ResetTransmissionTarget` <a name="ResetTransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetTransmissionTarget"></a>

```go
func ResetTransmissionTarget()
```

##### `ResetWorkspaceId` <a name="ResetWorkspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceId"></a>

```go
func ResetWorkspaceId()
```

##### `ResetWorkspaceName` <a name="ResetWorkspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.resetWorkspaceName"></a>

```go
func ResetWorkspaceName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget">TransmissionTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput">TransmissionTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput">WorkspaceIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput">WorkspaceNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId">WorkspaceId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName">WorkspaceName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `TransmissionTarget`<sup>Required</sup> <a name="TransmissionTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTarget"></a>

```go
func TransmissionTarget() DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference</a>

---

##### `TransmissionTargetInput`<sup>Optional</sup> <a name="TransmissionTargetInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.transmissionTargetInput"></a>

```go
func TransmissionTargetInput() interface{}
```

- *Type:* interface{}

---

##### `WorkspaceIdInput`<sup>Optional</sup> <a name="WorkspaceIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceIdInput"></a>

```go
func WorkspaceIdInput() *string
```

- *Type:* *string

---

##### `WorkspaceNameInput`<sup>Optional</sup> <a name="WorkspaceNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceNameInput"></a>

```go
func WorkspaceNameInput() *string
```

- *Type:* *string

---

##### `WorkspaceId`<sup>Required</sup> <a name="WorkspaceId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceId"></a>

```go
func WorkspaceId() *string
```

- *Type:* *string

---

##### `WorkspaceName`<sup>Required</sup> <a name="WorkspaceName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.workspaceName"></a>

```go
func WorkspaceName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName">ResetChannelName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelId"></a>

```go
func ResetChannelId()
```

##### `ResetChannelName` <a name="ResetChannelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.resetChannelName"></a>

```go
func ResetChannelName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput">ChannelNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName">ChannelName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `ChannelNameInput`<sup>Optional</sup> <a name="ChannelNameInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelNameInput"></a>

```go
func ChannelNameInput() *string
```

- *Type:* *string

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `ChannelName`<sup>Required</sup> <a name="ChannelName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.channelName"></a>

```go
func ChannelName() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference <a name="DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget">PutIncidentResponseTarget</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget">ResetIncidentResponseTarget</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutIncidentResponseTarget` <a name="PutIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget"></a>

```go
func PutIncidentResponseTarget(value DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.putIncidentResponseTarget.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTarget</a>

---

##### `ResetIncidentResponseTarget` <a name="ResetIncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.resetIncidentResponseTarget"></a>

```go
func ResetIncidentResponseTarget()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget">IncidentResponseTarget</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput">IncidentResponseTargetInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `IncidentResponseTarget`<sup>Required</sup> <a name="IncidentResponseTarget" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTarget"></a>

```go
func IncidentResponseTarget() DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference">DevopsagentAssociationConfigurationSlackTransmissionTargetIncidentResponseTargetOutputReference</a>

---

##### `IncidentResponseTargetInput`<sup>Optional</sup> <a name="IncidentResponseTargetInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.incidentResponseTargetInput"></a>

```go
func IncidentResponseTargetInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSlackTransmissionTargetOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationSourceAwsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationSourceAwsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) DevopsagentAssociationConfigurationSourceAwsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources">PutResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId">ResetAccountId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType">ResetAccountType</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn">ResetAssumableRoleArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources">ResetResources</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutResources` <a name="PutResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources"></a>

```go
func PutResources(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putResources.parameter.value"></a>

- *Type:* interface{}

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetAccountId` <a name="ResetAccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountId"></a>

```go
func ResetAccountId()
```

##### `ResetAccountType` <a name="ResetAccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAccountType"></a>

```go
func ResetAccountType()
```

##### `ResetAssumableRoleArn` <a name="ResetAssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetAssumableRoleArn"></a>

```go
func ResetAssumableRoleArn()
```

##### `ResetResources` <a name="ResetResources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetResources"></a>

```go
func ResetResources()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.resetTags"></a>

```go
func ResetTags()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources">Resources</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput">AccountIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput">AccountTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput">AssumableRoleArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput">ResourcesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType">AccountType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn">AssumableRoleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Resources`<sup>Required</sup> <a name="Resources" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resources"></a>

```go
func Resources() DevopsagentAssociationConfigurationSourceAwsResourcesList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList">DevopsagentAssociationConfigurationSourceAwsResourcesList</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tags"></a>

```go
func Tags() DevopsagentAssociationConfigurationSourceAwsTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList">DevopsagentAssociationConfigurationSourceAwsTagsList</a>

---

##### `AccountIdInput`<sup>Optional</sup> <a name="AccountIdInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountIdInput"></a>

```go
func AccountIdInput() *string
```

- *Type:* *string

---

##### `AccountTypeInput`<sup>Optional</sup> <a name="AccountTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountTypeInput"></a>

```go
func AccountTypeInput() *string
```

- *Type:* *string

---

##### `AssumableRoleArnInput`<sup>Optional</sup> <a name="AssumableRoleArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArnInput"></a>

```go
func AssumableRoleArnInput() *string
```

- *Type:* *string

---

##### `ResourcesInput`<sup>Optional</sup> <a name="ResourcesInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.resourcesInput"></a>

```go
func ResourcesInput() interface{}
```

- *Type:* interface{}

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `AccountType`<sup>Required</sup> <a name="AccountType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.accountType"></a>

```go
func AccountType() *string
```

- *Type:* *string

---

##### `AssumableRoleArn`<sup>Required</sup> <a name="AssumableRoleArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.assumableRoleArn"></a>

```go
func AssumableRoleArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationSourceAwsResourcesList <a name="DevopsagentAssociationConfigurationSourceAwsResourcesList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationSourceAwsResourcesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsagentAssociationConfigurationSourceAwsResourcesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get"></a>

```go
func Get(index *f64) DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationSourceAwsResourcesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn">ResetResourceArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata">ResetResourceMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType">ResetResourceType</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetResourceArn` <a name="ResetResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceArn"></a>

```go
func ResetResourceArn()
```

##### `ResetResourceMetadata` <a name="ResetResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceMetadata"></a>

```go
func ResetResourceMetadata()
```

##### `ResetResourceType` <a name="ResetResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.resetResourceType"></a>

```go
func ResetResourceType()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput">ResourceArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput">ResourceMetadataInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput">ResourceTypeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn">ResourceArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata">ResourceMetadata</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType">ResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ResourceArnInput`<sup>Optional</sup> <a name="ResourceArnInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArnInput"></a>

```go
func ResourceArnInput() *string
```

- *Type:* *string

---

##### `ResourceMetadataInput`<sup>Optional</sup> <a name="ResourceMetadataInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadataInput"></a>

```go
func ResourceMetadataInput() *string
```

- *Type:* *string

---

##### `ResourceTypeInput`<sup>Optional</sup> <a name="ResourceTypeInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceTypeInput"></a>

```go
func ResourceTypeInput() *string
```

- *Type:* *string

---

##### `ResourceArn`<sup>Required</sup> <a name="ResourceArn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceArn"></a>

```go
func ResourceArn() *string
```

- *Type:* *string

---

##### `ResourceMetadata`<sup>Required</sup> <a name="ResourceMetadata" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceMetadata"></a>

```go
func ResourceMetadata() *string
```

- *Type:* *string

---

##### `ResourceType`<sup>Required</sup> <a name="ResourceType" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.resourceType"></a>

```go
func ResourceType() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsResourcesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationSourceAwsTagsList <a name="DevopsagentAssociationConfigurationSourceAwsTagsList" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationSourceAwsTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) DevopsagentAssociationConfigurationSourceAwsTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get"></a>

```go
func Get(index *f64) DevopsagentAssociationConfigurationSourceAwsTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### DevopsagentAssociationConfigurationSourceAwsTagsOutputReference <a name="DevopsagentAssociationConfigurationSourceAwsTagsOutputReference" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/devopsagentassociation"

devopsagentassociation.NewDevopsagentAssociationConfigurationSourceAwsTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) DevopsagentAssociationConfigurationSourceAwsTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.devopsagentAssociation.DevopsagentAssociationConfigurationSourceAwsTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



