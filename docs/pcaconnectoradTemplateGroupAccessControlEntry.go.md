# `pcaconnectoradTemplateGroupAccessControlEntry` Submodule <a name="`pcaconnectoradTemplateGroupAccessControlEntry` Submodule" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### PcaconnectoradTemplateGroupAccessControlEntry <a name="PcaconnectoradTemplateGroupAccessControlEntry" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry awscc_pcaconnectorad_template_group_access_control_entry}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectoradtemplategroupaccesscontrolentry"

pcaconnectoradtemplategroupaccesscontrolentry.NewPcaconnectoradTemplateGroupAccessControlEntry(scope Construct, id *string, config PcaconnectoradTemplateGroupAccessControlEntryConfig) PcaconnectoradTemplateGroupAccessControlEntry
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig">PcaconnectoradTemplateGroupAccessControlEntryConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig">PcaconnectoradTemplateGroupAccessControlEntryConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights">PutAccessRights</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutAccessRights` <a name="PutAccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights"></a>

```go
func PutAccessRights(value PcaconnectoradTemplateGroupAccessControlEntryAccessRights)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.putAccessRights.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectoradtemplategroupaccesscontrolentry"

pcaconnectoradtemplategroupaccesscontrolentry.PcaconnectoradTemplateGroupAccessControlEntry_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectoradtemplategroupaccesscontrolentry"

pcaconnectoradtemplategroupaccesscontrolentry.PcaconnectoradTemplateGroupAccessControlEntry_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectoradtemplategroupaccesscontrolentry"

pcaconnectoradtemplategroupaccesscontrolentry.PcaconnectoradTemplateGroupAccessControlEntry_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectoradtemplategroupaccesscontrolentry"

pcaconnectoradtemplategroupaccesscontrolentry.PcaconnectoradTemplateGroupAccessControlEntry_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a PcaconnectoradTemplateGroupAccessControlEntry resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the PcaconnectoradTemplateGroupAccessControlEntry to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing PcaconnectoradTemplateGroupAccessControlEntry that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the PcaconnectoradTemplateGroupAccessControlEntry to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights">AccessRights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput">AccessRightsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput">GroupDisplayNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput">GroupSecurityIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput">TemplateArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName">GroupDisplayName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier">GroupSecurityIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn">TemplateArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessRights`<sup>Required</sup> <a name="AccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRights"></a>

```go
func AccessRights() PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference">PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `AccessRightsInput`<sup>Optional</sup> <a name="AccessRightsInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.accessRightsInput"></a>

```go
func AccessRightsInput() interface{}
```

- *Type:* interface{}

---

##### `GroupDisplayNameInput`<sup>Optional</sup> <a name="GroupDisplayNameInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayNameInput"></a>

```go
func GroupDisplayNameInput() *string
```

- *Type:* *string

---

##### `GroupSecurityIdentifierInput`<sup>Optional</sup> <a name="GroupSecurityIdentifierInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifierInput"></a>

```go
func GroupSecurityIdentifierInput() *string
```

- *Type:* *string

---

##### `TemplateArnInput`<sup>Optional</sup> <a name="TemplateArnInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArnInput"></a>

```go
func TemplateArnInput() *string
```

- *Type:* *string

---

##### `GroupDisplayName`<sup>Required</sup> <a name="GroupDisplayName" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupDisplayName"></a>

```go
func GroupDisplayName() *string
```

- *Type:* *string

---

##### `GroupSecurityIdentifier`<sup>Required</sup> <a name="GroupSecurityIdentifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.groupSecurityIdentifier"></a>

```go
func GroupSecurityIdentifier() *string
```

- *Type:* *string

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.templateArn"></a>

```go
func TemplateArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntry.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRights <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectoradtemplategroupaccesscontrolentry"

&pcaconnectoradtemplategroupaccesscontrolentry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights {
	AutoEnroll: *string,
	Enroll: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll">AutoEnroll</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll">Enroll</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}. |

---

##### `AutoEnroll`<sup>Optional</sup> <a name="AutoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.autoEnroll"></a>

```go
AutoEnroll *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#auto_enroll PcaconnectoradTemplateGroupAccessControlEntry#auto_enroll}.

---

##### `Enroll`<sup>Optional</sup> <a name="Enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights.property.enroll"></a>

```go
Enroll *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#enroll PcaconnectoradTemplateGroupAccessControlEntry#enroll}.

---

### PcaconnectoradTemplateGroupAccessControlEntryConfig <a name="PcaconnectoradTemplateGroupAccessControlEntryConfig" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectoradtemplategroupaccesscontrolentry"

&pcaconnectoradtemplategroupaccesscontrolentry.PcaconnectoradTemplateGroupAccessControlEntryConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	AccessRights: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights,
	GroupDisplayName: *string,
	GroupSecurityIdentifier: *string,
	TemplateArn: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights">AccessRights</a></code> | <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a></code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName">GroupDisplayName</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier">GroupSecurityIdentifier</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn">TemplateArn</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccessRights`<sup>Required</sup> <a name="AccessRights" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.accessRights"></a>

```go
AccessRights PcaconnectoradTemplateGroupAccessControlEntryAccessRights
```

- *Type:* <a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRights">PcaconnectoradTemplateGroupAccessControlEntryAccessRights</a>

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#access_rights PcaconnectoradTemplateGroupAccessControlEntry#access_rights}.

---

##### `GroupDisplayName`<sup>Required</sup> <a name="GroupDisplayName" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupDisplayName"></a>

```go
GroupDisplayName *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_display_name PcaconnectoradTemplateGroupAccessControlEntry#group_display_name}.

---

##### `GroupSecurityIdentifier`<sup>Required</sup> <a name="GroupSecurityIdentifier" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.groupSecurityIdentifier"></a>

```go
GroupSecurityIdentifier *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#group_security_identifier PcaconnectoradTemplateGroupAccessControlEntry#group_security_identifier}.

---

##### `TemplateArn`<sup>Required</sup> <a name="TemplateArn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryConfig.property.templateArn"></a>

```go
TemplateArn *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/pcaconnectorad_template_group_access_control_entry#template_arn PcaconnectoradTemplateGroupAccessControlEntry#template_arn}.

---

## Classes <a name="Classes" id="Classes"></a>

### PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference <a name="PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/pcaconnectoradtemplategroupaccesscontrolentry"

pcaconnectoradtemplategroupaccesscontrolentry.NewPcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll">ResetAutoEnroll</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll">ResetEnroll</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetAutoEnroll` <a name="ResetAutoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetAutoEnroll"></a>

```go
func ResetAutoEnroll()
```

##### `ResetEnroll` <a name="ResetEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.resetEnroll"></a>

```go
func ResetEnroll()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput">AutoEnrollInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput">EnrollInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll">AutoEnroll</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll">Enroll</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `AutoEnrollInput`<sup>Optional</sup> <a name="AutoEnrollInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnrollInput"></a>

```go
func AutoEnrollInput() *string
```

- *Type:* *string

---

##### `EnrollInput`<sup>Optional</sup> <a name="EnrollInput" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enrollInput"></a>

```go
func EnrollInput() *string
```

- *Type:* *string

---

##### `AutoEnroll`<sup>Required</sup> <a name="AutoEnroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.autoEnroll"></a>

```go
func AutoEnroll() *string
```

- *Type:* *string

---

##### `Enroll`<sup>Required</sup> <a name="Enroll" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.enroll"></a>

```go
func Enroll() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.pcaconnectoradTemplateGroupAccessControlEntry.PcaconnectoradTemplateGroupAccessControlEntryAccessRightsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



