# `ssmguiconnectPreferences` Submodule <a name="`ssmguiconnectPreferences` Submodule" id="@cdktn/provider-awscc.ssmguiconnectPreferences"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### SsmguiconnectPreferences <a name="SsmguiconnectPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences awscc_ssmguiconnect_preferences}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

ssmguiconnectpreferences.NewSsmguiconnectPreferences(scope Construct, id *string, config SsmguiconnectPreferencesConfig) SsmguiconnectPreferences
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig">SsmguiconnectPreferencesConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Optional</sup> <a name="config" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig">SsmguiconnectPreferencesConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences">PutConnectionRecordingPreferences</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetConnectionRecordingPreferences">ResetConnectionRecordingPreferences</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutConnectionRecordingPreferences` <a name="PutConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences"></a>

```go
func PutConnectionRecordingPreferences(value SsmguiconnectPreferencesConnectionRecordingPreferences)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.putConnectionRecordingPreferences.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

---

##### `ResetConnectionRecordingPreferences` <a name="ResetConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.resetConnectionRecordingPreferences"></a>

```go
func ResetConnectionRecordingPreferences()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a SsmguiconnectPreferences resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

ssmguiconnectpreferences.SsmguiconnectPreferences_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

ssmguiconnectpreferences.SsmguiconnectPreferences_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

ssmguiconnectpreferences.SsmguiconnectPreferences_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

ssmguiconnectpreferences.SsmguiconnectPreferences_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a SsmguiconnectPreferences resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the SsmguiconnectPreferences to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing SsmguiconnectPreferences that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the SsmguiconnectPreferences to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.accountId">AccountId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferences">ConnectionRecordingPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferencesInput">ConnectionRecordingPreferencesInput</a></code> | <code>interface{}</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `AccountId`<sup>Required</sup> <a name="AccountId" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.accountId"></a>

```go
func AccountId() *string
```

- *Type:* *string

---

##### `ConnectionRecordingPreferences`<sup>Required</sup> <a name="ConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferences"></a>

```go
func ConnectionRecordingPreferences() SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ConnectionRecordingPreferencesInput`<sup>Optional</sup> <a name="ConnectionRecordingPreferencesInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.connectionRecordingPreferencesInput"></a>

```go
func ConnectionRecordingPreferencesInput() interface{}
```

- *Type:* interface{}

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferences.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### SsmguiconnectPreferencesConfig <a name="SsmguiconnectPreferencesConfig" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

&ssmguiconnectpreferences.SsmguiconnectPreferencesConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	ConnectionRecordingPreferences: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connectionRecordingPreferences">ConnectionRecordingPreferences</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a></code> | The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConnectionRecordingPreferences`<sup>Optional</sup> <a name="ConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConfig.property.connectionRecordingPreferences"></a>

```go
ConnectionRecordingPreferences SsmguiconnectPreferencesConnectionRecordingPreferences
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences">SsmguiconnectPreferencesConnectionRecordingPreferences</a>

The set of preferences used for recording RDP connections in the requesting AWS account and AWS Region.

This includes details such as which S3 bucket recordings are stored in.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#connection_recording_preferences SsmguiconnectPreferences#connection_recording_preferences}

---

### SsmguiconnectPreferencesConnectionRecordingPreferences <a name="SsmguiconnectPreferencesConnectionRecordingPreferences" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

&ssmguiconnectpreferences.SsmguiconnectPreferencesConnectionRecordingPreferences {
	KmsKeyArn: *string,
	RecordingDestinations: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.recordingDestinations">RecordingDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a></code> | Determines where recordings of RDP connections are stored. |

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN of a AWS KMS key that is used to encrypt data while it is being processed by the service.

This key must exist in the same AWS Region as the node you start an RDP connection to.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#kms_key_arn SsmguiconnectPreferences#kms_key_arn}

---

##### `RecordingDestinations`<sup>Optional</sup> <a name="RecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferences.property.recordingDestinations"></a>

```go
RecordingDestinations SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

Determines where recordings of RDP connections are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#recording_destinations SsmguiconnectPreferences#recording_destinations}

---

### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

&ssmguiconnectpreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations {
	S3Buckets: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.property.s3Buckets">S3Buckets</a></code> | <code>interface{}</code> | The S3 bucket where RDP connection recordings are stored. |

---

##### `S3Buckets`<sup>Optional</sup> <a name="S3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations.property.s3Buckets"></a>

```go
S3Buckets interface{}
```

- *Type:* interface{}

The S3 bucket where RDP connection recordings are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#s3_buckets SsmguiconnectPreferences#s3_buckets}

---

### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

&ssmguiconnectpreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets {
	BucketName: *string,
	BucketOwner: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketName">BucketName</a></code> | <code>*string</code> | The name of the S3 bucket where RDP connection recordings are stored. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | The AWS account number that owns the S3 bucket. |

---

##### `BucketName`<sup>Optional</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketName"></a>

```go
BucketName *string
```

- *Type:* *string

The name of the S3 bucket where RDP connection recordings are stored.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#bucket_name SsmguiconnectPreferences#bucket_name}

---

##### `BucketOwner`<sup>Optional</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3Buckets.property.bucketOwner"></a>

```go
BucketOwner *string
```

- *Type:* *string

The AWS account number that owns the S3 bucket.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.99.0/docs/resources/ssmguiconnect_preferences#bucket_owner SsmguiconnectPreferences#bucket_owner}

---

## Classes <a name="Classes" id="Classes"></a>

### SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

ssmguiconnectpreferences.NewSsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations">PutRecordingDestinations</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetRecordingDestinations">ResetRecordingDestinations</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutRecordingDestinations` <a name="PutRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations"></a>

```go
func PutRecordingDestinations(value SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.putRecordingDestinations.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinations</a>

---

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetRecordingDestinations` <a name="ResetRecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.resetRecordingDestinations"></a>

```go
func ResetRecordingDestinations()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations">RecordingDestinations</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinationsInput">RecordingDestinationsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `RecordingDestinations`<sup>Required</sup> <a name="RecordingDestinations" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinations"></a>

```go
func RecordingDestinations() SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference</a>

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `RecordingDestinationsInput`<sup>Optional</sup> <a name="RecordingDestinationsInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.recordingDestinationsInput"></a>

```go
func RecordingDestinationsInput() interface{}
```

- *Type:* interface{}

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

ssmguiconnectpreferences.NewSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets">PutS3Buckets</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resetS3Buckets">ResetS3Buckets</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `PutS3Buckets` <a name="PutS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets"></a>

```go
func PutS3Buckets(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.putS3Buckets.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetS3Buckets` <a name="ResetS3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.resetS3Buckets"></a>

```go
func ResetS3Buckets()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets">S3Buckets</a></code> | <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3BucketsInput">S3BucketsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `S3Buckets`<sup>Required</sup> <a name="S3Buckets" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3Buckets"></a>

```go
func S3Buckets() SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList
```

- *Type:* <a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList">SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList</a>

---

##### `S3BucketsInput`<sup>Optional</sup> <a name="S3BucketsInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.s3BucketsInput"></a>

```go
func S3BucketsInput() interface{}
```

- *Type:* interface{}

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

ssmguiconnectpreferences.NewSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get"></a>

```go
func Get(index *f64) SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference <a name="SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/ssmguiconnectpreferences"

ssmguiconnectpreferences.NewSsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketName">ResetBucketName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketOwner">ResetBucketOwner</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetBucketName` <a name="ResetBucketName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketName"></a>

```go
func ResetBucketName()
```

##### `ResetBucketOwner` <a name="ResetBucketOwner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.resetBucketOwner"></a>

```go
func ResetBucketOwner()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketNameInput">BucketNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwnerInput">BucketOwnerInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName">BucketName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner">BucketOwner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BucketNameInput`<sup>Optional</sup> <a name="BucketNameInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketNameInput"></a>

```go
func BucketNameInput() *string
```

- *Type:* *string

---

##### `BucketOwnerInput`<sup>Optional</sup> <a name="BucketOwnerInput" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwnerInput"></a>

```go
func BucketOwnerInput() *string
```

- *Type:* *string

---

##### `BucketName`<sup>Required</sup> <a name="BucketName" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketName"></a>

```go
func BucketName() *string
```

- *Type:* *string

---

##### `BucketOwner`<sup>Required</sup> <a name="BucketOwner" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.bucketOwner"></a>

```go
func BucketOwner() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.ssmguiconnectPreferences.SsmguiconnectPreferencesConnectionRecordingPreferencesRecordingDestinationsS3BucketsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



