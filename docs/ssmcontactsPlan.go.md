# `ssmcontactsPlan` Submodule <a name="`ssmcontactsPlan` Submodule" id="@cdktn/provider-awscc.ssmcontactsPlan"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmcontactsPlan <a name="SsmcontactsPlan" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan awscc_ssmcontacts_plan}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.NewSsmcontactsPlan(scope Construct, id *string, config SsmcontactsPlanConfig) SsmcontactsPlan
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig">SsmcontactsPlanConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig">SsmcontactsPlanConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages">PutStages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetContactId">ResetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetRotationIds">ResetRotationIds</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetStages">ResetStages</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutStages` <a name="PutStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages"></a>

```go
func PutStages(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.putStages.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetContactId` <a name="ResetContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetContactId"></a>

```go
func ResetContactId()
```

##### `ResetRotationIds` <a name="ResetRotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetRotationIds"></a>

```go
func ResetRotationIds()
```

##### `ResetStages` <a name="ResetStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.resetStages"></a>

```go
func ResetStages()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmcontactsPlan resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.SsmcontactsPlan_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.SsmcontactsPlan_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.SsmcontactsPlan_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.SsmcontactsPlan_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmcontactsPlan resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmcontactsPlan to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmcontactsPlan that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmcontactsPlan to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stages">Stages</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList">SsmcontactsPlanStagesList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput">ContactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIdsInput">RotationIdsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stagesInput">StagesInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactId">ContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIds">RotationIds</a></code> | <code>*[]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Stages`<sup>Required</sup> <a name="Stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stages"></a>

```go
func Stages() SsmcontactsPlanStagesList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList">SsmcontactsPlanStagesList</a>

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactIdInput"></a>

```go
func ContactIdInput() *string
```

- *Type:* *string

---

##### `RotationIdsInput`<sup>Optional</sup> <a name="RotationIdsInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIdsInput"></a>

```go
func RotationIdsInput() *[]*string
```

- *Type:* *[]*string

---

##### `StagesInput`<sup>Optional</sup> <a name="StagesInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.stagesInput"></a>

```go
func StagesInput() interface{}
```

- *Type:* interface{}

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.contactId"></a>

```go
func ContactId() *string
```

- *Type:* *string

---

##### `RotationIds`<sup>Required</sup> <a name="RotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.rotationIds"></a>

```go
func RotationIds() *[]*string
```

- *Type:* *[]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlan.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmcontactsPlanConfig <a name="SsmcontactsPlanConfig" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

&ssmcontactsplan.SsmcontactsPlanConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ContactId: *string,
	RotationIds: *[]*string,
	Stages: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId">ContactId</a></code> | <code>*string</code> | Contact ID for the AWS SSM Incident Manager Contact to associate the plan. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.rotationIds">RotationIds</a></code> | <code>*[]*string</code> | Rotation Ids to associate with Oncall Contact for engagement. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.stages">Stages</a></code> | <code>interface{}</code> | The stages that an escalation plan or engagement plan engages contacts and contact methods in. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ContactId`<sup>Optional</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.contactId"></a>

```go
ContactId *string
```

- *Type:* *string

Contact ID for the AWS SSM Incident Manager Contact to associate the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `RotationIds`<sup>Optional</sup> <a name="RotationIds" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.rotationIds"></a>

```go
RotationIds *[]*string
```

- *Type:* *[]*string

Rotation Ids to associate with Oncall Contact for engagement.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#rotation_ids SsmcontactsPlan#rotation_ids}

---

##### `Stages`<sup>Optional</sup> <a name="Stages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanConfig.property.stages"></a>

```go
Stages interface{}
```

- *Type:* interface{}

The stages that an escalation plan or engagement plan engages contacts and contact methods in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#stages SsmcontactsPlan#stages}

---

### SsmcontactsPlanStages <a name="SsmcontactsPlanStages" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

&ssmcontactsplan.SsmcontactsPlanStages {
	DurationInMinutes: *f64,
	Targets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | The time to wait until beginning the next stage. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.targets">Targets</a></code> | <code>interface{}</code> | The contacts or contact methods that the escalation plan or engagement plan is engaging. |

---

##### `DurationInMinutes`<sup>Optional</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.durationInMinutes"></a>

```go
DurationInMinutes *f64
```

- *Type:* *f64

The time to wait until beginning the next stage.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#duration_in_minutes SsmcontactsPlan#duration_in_minutes}

---

##### `Targets`<sup>Optional</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStages.property.targets"></a>

```go
Targets interface{}
```

- *Type:* interface{}

The contacts or contact methods that the escalation plan or engagement plan is engaging.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#targets SsmcontactsPlan#targets}

---

### SsmcontactsPlanStagesTargets <a name="SsmcontactsPlanStagesTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

&ssmcontactsplan.SsmcontactsPlanStagesTargets {
	ChannelTargetInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo,
	ContactTargetInfo: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.channelTargetInfo">ChannelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a></code> | Information about the contact channel that SSM Incident Manager uses to engage the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.contactTargetInfo">ContactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a></code> | The contact that SSM Incident Manager is engaging during an incident. |

---

##### `ChannelTargetInfo`<sup>Optional</sup> <a name="ChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.channelTargetInfo"></a>

```go
ChannelTargetInfo SsmcontactsPlanStagesTargetsChannelTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

Information about the contact channel that SSM Incident Manager uses to engage the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#channel_target_info SsmcontactsPlan#channel_target_info}

---

##### `ContactTargetInfo`<sup>Optional</sup> <a name="ContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargets.property.contactTargetInfo"></a>

```go
ContactTargetInfo SsmcontactsPlanStagesTargetsContactTargetInfo
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

The contact that SSM Incident Manager is engaging during an incident.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#contact_target_info SsmcontactsPlan#contact_target_info}

---

### SsmcontactsPlanStagesTargetsChannelTargetInfo <a name="SsmcontactsPlanStagesTargetsChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

&ssmcontactsplan.SsmcontactsPlanStagesTargetsChannelTargetInfo {
	ChannelId: *string,
	RetryIntervalInMinutes: *f64,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.channelId">ChannelId</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the contact channel. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.retryIntervalInMinutes">RetryIntervalInMinutes</a></code> | <code>*f64</code> | The number of minutes to wait to retry sending engagement in the case the engagement initially fails. |

---

##### `ChannelId`<sup>Optional</sup> <a name="ChannelId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.channelId"></a>

```go
ChannelId *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the contact channel.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#channel_id SsmcontactsPlan#channel_id}

---

##### `RetryIntervalInMinutes`<sup>Optional</sup> <a name="RetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo.property.retryIntervalInMinutes"></a>

```go
RetryIntervalInMinutes *f64
```

- *Type:* *f64

The number of minutes to wait to retry sending engagement in the case the engagement initially fails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#retry_interval_in_minutes SsmcontactsPlan#retry_interval_in_minutes}

---

### SsmcontactsPlanStagesTargetsContactTargetInfo <a name="SsmcontactsPlanStagesTargetsContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

&ssmcontactsplan.SsmcontactsPlanStagesTargetsContactTargetInfo {
	ContactId: *string,
	IsEssential: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.contactId">ContactId</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the contact. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.isEssential">IsEssential</a></code> | <code>interface{}</code> | A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan. |

---

##### `ContactId`<sup>Optional</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.contactId"></a>

```go
ContactId *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the contact.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#contact_id SsmcontactsPlan#contact_id}

---

##### `IsEssential`<sup>Optional</sup> <a name="IsEssential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo.property.isEssential"></a>

```go
IsEssential interface{}
```

- *Type:* interface{}

A Boolean value determining if the contact's acknowledgement stops the progress of stages in the plan.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/ssmcontacts_plan#is_essential SsmcontactsPlan#is_essential}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmcontactsPlanStagesList <a name="SsmcontactsPlanStagesList" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.NewSsmcontactsPlanStagesList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmcontactsPlanStagesList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get"></a>

```go
func Get(index *f64) SsmcontactsPlanStagesOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsPlanStagesOutputReference <a name="SsmcontactsPlanStagesOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.NewSsmcontactsPlanStagesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmcontactsPlanStagesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets">PutTargets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetDurationInMinutes">ResetDurationInMinutes</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetTargets">ResetTargets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutTargets` <a name="PutTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets"></a>

```go
func PutTargets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.putTargets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetDurationInMinutes` <a name="ResetDurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetDurationInMinutes"></a>

```go
func ResetDurationInMinutes()
```

##### `ResetTargets` <a name="ResetTargets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.resetTargets"></a>

```go
func ResetTargets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targets">Targets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList">SsmcontactsPlanStagesTargetsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutesInput">DurationInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targetsInput">TargetsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutes">DurationInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Targets`<sup>Required</sup> <a name="Targets" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targets"></a>

```go
func Targets() SsmcontactsPlanStagesTargetsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList">SsmcontactsPlanStagesTargetsList</a>

---

##### `DurationInMinutesInput`<sup>Optional</sup> <a name="DurationInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutesInput"></a>

```go
func DurationInMinutesInput() *f64
```

- *Type:* *f64

---

##### `TargetsInput`<sup>Optional</sup> <a name="TargetsInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.targetsInput"></a>

```go
func TargetsInput() interface{}
```

- *Type:* interface{}

---

##### `DurationInMinutes`<sup>Required</sup> <a name="DurationInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.durationInMinutes"></a>

```go
func DurationInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference <a name="SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.NewSsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetChannelId">ResetChannelId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes">ResetRetryIntervalInMinutes</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetChannelId` <a name="ResetChannelId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetChannelId"></a>

```go
func ResetChannelId()
```

##### `ResetRetryIntervalInMinutes` <a name="ResetRetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.resetRetryIntervalInMinutes"></a>

```go
func ResetRetryIntervalInMinutes()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelIdInput">ChannelIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput">RetryIntervalInMinutesInput</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelId">ChannelId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes">RetryIntervalInMinutes</a></code> | <code>*f64</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelIdInput`<sup>Optional</sup> <a name="ChannelIdInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelIdInput"></a>

```go
func ChannelIdInput() *string
```

- *Type:* *string

---

##### `RetryIntervalInMinutesInput`<sup>Optional</sup> <a name="RetryIntervalInMinutesInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutesInput"></a>

```go
func RetryIntervalInMinutesInput() *f64
```

- *Type:* *f64

---

##### `ChannelId`<sup>Required</sup> <a name="ChannelId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.channelId"></a>

```go
func ChannelId() *string
```

- *Type:* *string

---

##### `RetryIntervalInMinutes`<sup>Required</sup> <a name="RetryIntervalInMinutes" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.retryIntervalInMinutes"></a>

```go
func RetryIntervalInMinutes() *f64
```

- *Type:* *f64

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference <a name="SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.NewSsmcontactsPlanStagesTargetsContactTargetInfoOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetContactId">ResetContactId</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetIsEssential">ResetIsEssential</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetContactId` <a name="ResetContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetContactId"></a>

```go
func ResetContactId()
```

##### `ResetIsEssential` <a name="ResetIsEssential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.resetIsEssential"></a>

```go
func ResetIsEssential()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactIdInput">ContactIdInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssentialInput">IsEssentialInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactId">ContactId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssential">IsEssential</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ContactIdInput`<sup>Optional</sup> <a name="ContactIdInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactIdInput"></a>

```go
func ContactIdInput() *string
```

- *Type:* *string

---

##### `IsEssentialInput`<sup>Optional</sup> <a name="IsEssentialInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssentialInput"></a>

```go
func IsEssentialInput() interface{}
```

- *Type:* interface{}

---

##### `ContactId`<sup>Required</sup> <a name="ContactId" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.contactId"></a>

```go
func ContactId() *string
```

- *Type:* *string

---

##### `IsEssential`<sup>Required</sup> <a name="IsEssential" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.isEssential"></a>

```go
func IsEssential() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsPlanStagesTargetsList <a name="SsmcontactsPlanStagesTargetsList" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.NewSsmcontactsPlanStagesTargetsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmcontactsPlanStagesTargetsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get"></a>

```go
func Get(index *f64) SsmcontactsPlanStagesTargetsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmcontactsPlanStagesTargetsOutputReference <a name="SsmcontactsPlanStagesTargetsOutputReference" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmcontactsplan"

ssmcontactsplan.NewSsmcontactsPlanStagesTargetsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmcontactsPlanStagesTargetsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo">PutChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo">PutContactTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetChannelTargetInfo">ResetChannelTargetInfo</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetContactTargetInfo">ResetContactTargetInfo</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutChannelTargetInfo` <a name="PutChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo"></a>

```go
func PutChannelTargetInfo(value SsmcontactsPlanStagesTargetsChannelTargetInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putChannelTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfo">SsmcontactsPlanStagesTargetsChannelTargetInfo</a>

---

##### `PutContactTargetInfo` <a name="PutContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo"></a>

```go
func PutContactTargetInfo(value SsmcontactsPlanStagesTargetsContactTargetInfo)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.putContactTargetInfo.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfo">SsmcontactsPlanStagesTargetsContactTargetInfo</a>

---

##### `ResetChannelTargetInfo` <a name="ResetChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetChannelTargetInfo"></a>

```go
func ResetChannelTargetInfo()
```

##### `ResetContactTargetInfo` <a name="ResetContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.resetContactTargetInfo"></a>

```go
func ResetContactTargetInfo()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfo">ChannelTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference">SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfo">ContactTargetInfo</a></code> | <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference">SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfoInput">ChannelTargetInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfoInput">ContactTargetInfoInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ChannelTargetInfo`<sup>Required</sup> <a name="ChannelTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfo"></a>

```go
func ChannelTargetInfo() SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference">SsmcontactsPlanStagesTargetsChannelTargetInfoOutputReference</a>

---

##### `ContactTargetInfo`<sup>Required</sup> <a name="ContactTargetInfo" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfo"></a>

```go
func ContactTargetInfo() SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference">SsmcontactsPlanStagesTargetsContactTargetInfoOutputReference</a>

---

##### `ChannelTargetInfoInput`<sup>Optional</sup> <a name="ChannelTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.channelTargetInfoInput"></a>

```go
func ChannelTargetInfoInput() interface{}
```

- *Type:* interface{}

---

##### `ContactTargetInfoInput`<sup>Optional</sup> <a name="ContactTargetInfoInput" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.contactTargetInfoInput"></a>

```go
func ContactTargetInfoInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmcontactsPlan.SsmcontactsPlanStagesTargetsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



