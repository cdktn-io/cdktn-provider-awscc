# `medialiveCloudwatchAlarmTemplateGroup` Submodule <a name="`medialiveCloudwatchAlarmTemplateGroup` Submodule" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### MedialiveCloudwatchAlarmTemplateGroup <a name="MedialiveCloudwatchAlarmTemplateGroup" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template_group awscc_medialive_cloudwatch_alarm_template_group}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplategroup"

medialivecloudwatchalarmtemplategroup.NewMedialiveCloudwatchAlarmTemplateGroup(scope Construct, id *string, config MedialiveCloudwatchAlarmTemplateGroupConfig) MedialiveCloudwatchAlarmTemplateGroup
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig">MedialiveCloudwatchAlarmTemplateGroupConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig">MedialiveCloudwatchAlarmTemplateGroupConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplateGroup resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplategroup"

medialivecloudwatchalarmtemplategroup.MedialiveCloudwatchAlarmTemplateGroup_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplategroup"

medialivecloudwatchalarmtemplategroup.MedialiveCloudwatchAlarmTemplateGroup_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplategroup"

medialivecloudwatchalarmtemplategroup.MedialiveCloudwatchAlarmTemplateGroup_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplategroup"

medialivecloudwatchalarmtemplategroup.MedialiveCloudwatchAlarmTemplateGroup_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a MedialiveCloudwatchAlarmTemplateGroup resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the MedialiveCloudwatchAlarmTemplateGroup to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing MedialiveCloudwatchAlarmTemplateGroup that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template_group#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the MedialiveCloudwatchAlarmTemplateGroup to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.cloudwatchAlarmTemplateGroupId">CloudwatchAlarmTemplateGroupId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.identifier">Identifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.modifiedAt">ModifiedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.tagsInput">TagsInput</a></code> | <code>*map[string]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.tags">Tags</a></code> | <code>*map[string]*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `CloudwatchAlarmTemplateGroupId`<sup>Required</sup> <a name="CloudwatchAlarmTemplateGroupId" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.cloudwatchAlarmTemplateGroupId"></a>

```go
func CloudwatchAlarmTemplateGroupId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `Identifier`<sup>Required</sup> <a name="Identifier" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.identifier"></a>

```go
func Identifier() *string
```

- *Type:* *string

---

##### `ModifiedAt`<sup>Required</sup> <a name="ModifiedAt" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.modifiedAt"></a>

```go
func ModifiedAt() *string
```

- *Type:* *string

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.tagsInput"></a>

```go
func TagsInput() *map[string]*string
```

- *Type:* *map[string]*string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.tags"></a>

```go
func Tags() *map[string]*string
```

- *Type:* *map[string]*string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroup.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### MedialiveCloudwatchAlarmTemplateGroupConfig <a name="MedialiveCloudwatchAlarmTemplateGroupConfig" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/medialivecloudwatchalarmtemplategroup"

&medialivecloudwatchalarmtemplategroup.MedialiveCloudwatchAlarmTemplateGroupConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	Name: *string,
	Description: *string,
	Tags: *map[string]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.name">Name</a></code> | <code>*string</code> | A resource's name. Names must be unique within the scope of a resource type in a specific region. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.description">Description</a></code> | <code>*string</code> | A resource's optional description. |
| <code><a href="#@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.tags">Tags</a></code> | <code>*map[string]*string</code> | Represents the tags associated with a resource. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.name"></a>

```go
Name *string
```

- *Type:* *string

A resource's name. Names must be unique within the scope of a resource type in a specific region.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template_group#name MedialiveCloudwatchAlarmTemplateGroup#name}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

A resource's optional description.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template_group#description MedialiveCloudwatchAlarmTemplateGroup#description}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.medialiveCloudwatchAlarmTemplateGroup.MedialiveCloudwatchAlarmTemplateGroupConfig.property.tags"></a>

```go
Tags *map[string]*string
```

- *Type:* *map[string]*string

Represents the tags associated with a resource.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/medialive_cloudwatch_alarm_template_group#tags MedialiveCloudwatchAlarmTemplateGroup#tags}

---



