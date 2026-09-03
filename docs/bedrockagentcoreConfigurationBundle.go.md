# `bedrockagentcoreConfigurationBundle` Submodule <a name="`bedrockagentcoreConfigurationBundle` Submodule" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockagentcoreConfigurationBundle <a name="BedrockagentcoreConfigurationBundle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle awscc_bedrockagentcore_configuration_bundle}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.NewBedrockagentcoreConfigurationBundle(scope Construct, id *string, config BedrockagentcoreConfigurationBundleConfig) BedrockagentcoreConfigurationBundle
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig">BedrockagentcoreConfigurationBundleConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig">BedrockagentcoreConfigurationBundleConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents">PutComponents</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy">PutCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags">PutTags</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetBranchName">ResetBranchName</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCommitMessage">ResetCommitMessage</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCreatedBy">ResetCreatedBy</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetDescription">ResetDescription</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetKmsKeyArn">ResetKmsKeyArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetTags">ResetTags</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutComponents` <a name="PutComponents" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents"></a>

```go
func PutComponents(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putComponents.parameter.value"></a>

- *Type:* interface{}

---

##### `PutCreatedBy` <a name="PutCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy"></a>

```go
func PutCreatedBy(value BedrockagentcoreConfigurationBundleCreatedBy)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putCreatedBy.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

---

##### `PutTags` <a name="PutTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags"></a>

```go
func PutTags(value interface{})
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.putTags.parameter.value"></a>

- *Type:* interface{}

---

##### `ResetBranchName` <a name="ResetBranchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetBranchName"></a>

```go
func ResetBranchName()
```

##### `ResetCommitMessage` <a name="ResetCommitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCommitMessage"></a>

```go
func ResetCommitMessage()
```

##### `ResetCreatedBy` <a name="ResetCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetCreatedBy"></a>

```go
func ResetCreatedBy()
```

##### `ResetDescription` <a name="ResetDescription" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetDescription"></a>

```go
func ResetDescription()
```

##### `ResetKmsKeyArn` <a name="ResetKmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetKmsKeyArn"></a>

```go
func ResetKmsKeyArn()
```

##### `ResetTags` <a name="ResetTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.resetTags"></a>

```go
func ResetTags()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundle_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundle_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundle_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundle_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockagentcoreConfigurationBundle resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockagentcoreConfigurationBundle to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockagentcoreConfigurationBundle that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockagentcoreConfigurationBundle to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleArn">BundleArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleId">BundleId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.components">Components</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap">BedrockagentcoreConfigurationBundleComponentsMap</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference">BedrockagentcoreConfigurationBundleCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lineageMetadata">LineageMetadata</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tags">Tags</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList">BedrockagentcoreConfigurationBundleTagsList</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.versionId">VersionId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchNameInput">BranchNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleNameInput">BundleNameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessageInput">CommitMessageInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.componentsInput">ComponentsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdByInput">CreatedByInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.descriptionInput">DescriptionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArnInput">KmsKeyArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tagsInput">TagsInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleName">BundleName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessage">CommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.description">Description</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BundleArn`<sup>Required</sup> <a name="BundleArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleArn"></a>

```go
func BundleArn() *string
```

- *Type:* *string

---

##### `BundleId`<sup>Required</sup> <a name="BundleId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleId"></a>

```go
func BundleId() *string
```

- *Type:* *string

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.components"></a>

```go
func Components() BedrockagentcoreConfigurationBundleComponentsMap
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap">BedrockagentcoreConfigurationBundleComponentsMap</a>

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdBy"></a>

```go
func CreatedBy() BedrockagentcoreConfigurationBundleCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference">BedrockagentcoreConfigurationBundleCreatedByOutputReference</a>

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `LineageMetadata`<sup>Required</sup> <a name="LineageMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.lineageMetadata"></a>

```go
func LineageMetadata() BedrockagentcoreConfigurationBundleLineageMetadataOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataOutputReference</a>

---

##### `Tags`<sup>Required</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tags"></a>

```go
func Tags() BedrockagentcoreConfigurationBundleTagsList
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList">BedrockagentcoreConfigurationBundleTagsList</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `VersionId`<sup>Required</sup> <a name="VersionId" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.versionId"></a>

```go
func VersionId() *string
```

- *Type:* *string

---

##### `BranchNameInput`<sup>Optional</sup> <a name="BranchNameInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchNameInput"></a>

```go
func BranchNameInput() *string
```

- *Type:* *string

---

##### `BundleNameInput`<sup>Optional</sup> <a name="BundleNameInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleNameInput"></a>

```go
func BundleNameInput() *string
```

- *Type:* *string

---

##### `CommitMessageInput`<sup>Optional</sup> <a name="CommitMessageInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessageInput"></a>

```go
func CommitMessageInput() *string
```

- *Type:* *string

---

##### `ComponentsInput`<sup>Optional</sup> <a name="ComponentsInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.componentsInput"></a>

```go
func ComponentsInput() interface{}
```

- *Type:* interface{}

---

##### `CreatedByInput`<sup>Optional</sup> <a name="CreatedByInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.createdByInput"></a>

```go
func CreatedByInput() interface{}
```

- *Type:* interface{}

---

##### `DescriptionInput`<sup>Optional</sup> <a name="DescriptionInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.descriptionInput"></a>

```go
func DescriptionInput() *string
```

- *Type:* *string

---

##### `KmsKeyArnInput`<sup>Optional</sup> <a name="KmsKeyArnInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArnInput"></a>

```go
func KmsKeyArnInput() *string
```

- *Type:* *string

---

##### `TagsInput`<sup>Optional</sup> <a name="TagsInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tagsInput"></a>

```go
func TagsInput() interface{}
```

- *Type:* interface{}

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `BundleName`<sup>Required</sup> <a name="BundleName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.bundleName"></a>

```go
func BundleName() *string
```

- *Type:* *string

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.commitMessage"></a>

```go
func CommitMessage() *string
```

- *Type:* *string

---

##### `Description`<sup>Required</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.description"></a>

```go
func Description() *string
```

- *Type:* *string

---

##### `KmsKeyArn`<sup>Required</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.kmsKeyArn"></a>

```go
func KmsKeyArn() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundle.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockagentcoreConfigurationBundleComponents <a name="BedrockagentcoreConfigurationBundleComponents" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

&bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundleComponents {
	Configuration: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.property.configuration">Configuration</a></code> | <code>*string</code> | The configuration values as a flexible JSON document. |

---

##### `Configuration`<sup>Optional</sup> <a name="Configuration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponents.property.configuration"></a>

```go
Configuration *string
```

- *Type:* *string

The configuration values as a flexible JSON document.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#configuration BedrockagentcoreConfigurationBundle#configuration}

---

### BedrockagentcoreConfigurationBundleConfig <a name="BedrockagentcoreConfigurationBundleConfig" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

&bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundleConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	BundleName: *string,
	Components: interface{},
	BranchName: *string,
	CommitMessage: *string,
	CreatedBy: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy,
	Description: *string,
	KmsKeyArn: *string,
	Tags: interface{},
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.bundleName">BundleName</a></code> | <code>*string</code> | The name for the configuration bundle. Names must be unique within your account. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.components">Components</a></code> | <code>interface{}</code> | A map of component identifiers to their configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.branchName">BranchName</a></code> | <code>*string</code> | The branch name for version tracking. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.commitMessage">CommitMessage</a></code> | <code>*string</code> | A commit message describing the version of the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a></code> | The source that created a configuration bundle version. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.description">Description</a></code> | <code>*string</code> | The description for the configuration bundle. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.kmsKeyArn">KmsKeyArn</a></code> | <code>*string</code> | The ARN of the KMS key used to encrypt component configurations. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.tags">Tags</a></code> | <code>interface{}</code> | Tags to assign to the configuration bundle. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `BundleName`<sup>Required</sup> <a name="BundleName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.bundleName"></a>

```go
BundleName *string
```

- *Type:* *string

The name for the configuration bundle. Names must be unique within your account.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#bundle_name BedrockagentcoreConfigurationBundle#bundle_name}

---

##### `Components`<sup>Required</sup> <a name="Components" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.components"></a>

```go
Components interface{}
```

- *Type:* interface{}

A map of component identifiers to their configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#components BedrockagentcoreConfigurationBundle#components}

---

##### `BranchName`<sup>Optional</sup> <a name="BranchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.branchName"></a>

```go
BranchName *string
```

- *Type:* *string

The branch name for version tracking.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#branch_name BedrockagentcoreConfigurationBundle#branch_name}

---

##### `CommitMessage`<sup>Optional</sup> <a name="CommitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.commitMessage"></a>

```go
CommitMessage *string
```

- *Type:* *string

A commit message describing the version of the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#commit_message BedrockagentcoreConfigurationBundle#commit_message}

---

##### `CreatedBy`<sup>Optional</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.createdBy"></a>

```go
CreatedBy BedrockagentcoreConfigurationBundleCreatedBy
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy">BedrockagentcoreConfigurationBundleCreatedBy</a>

The source that created a configuration bundle version.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#created_by BedrockagentcoreConfigurationBundle#created_by}

---

##### `Description`<sup>Optional</sup> <a name="Description" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.description"></a>

```go
Description *string
```

- *Type:* *string

The description for the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#description BedrockagentcoreConfigurationBundle#description}

---

##### `KmsKeyArn`<sup>Optional</sup> <a name="KmsKeyArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.kmsKeyArn"></a>

```go
KmsKeyArn *string
```

- *Type:* *string

The ARN of the KMS key used to encrypt component configurations.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#kms_key_arn BedrockagentcoreConfigurationBundle#kms_key_arn}

---

##### `Tags`<sup>Optional</sup> <a name="Tags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleConfig.property.tags"></a>

```go
Tags interface{}
```

- *Type:* interface{}

Tags to assign to the configuration bundle.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#tags BedrockagentcoreConfigurationBundle#tags}

---

### BedrockagentcoreConfigurationBundleCreatedBy <a name="BedrockagentcoreConfigurationBundleCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

&bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundleCreatedBy {
	Arn: *string,
	Name: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.arn">Arn</a></code> | <code>*string</code> | The Amazon Resource Name (ARN) of the source, if applicable. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.name">Name</a></code> | <code>*string</code> | The name of the source (for example, user, optimization-job, or system). |

---

##### `Arn`<sup>Optional</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.arn"></a>

```go
Arn *string
```

- *Type:* *string

The Amazon Resource Name (ARN) of the source, if applicable.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#arn BedrockagentcoreConfigurationBundle#arn}

---

##### `Name`<sup>Optional</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedBy.property.name"></a>

```go
Name *string
```

- *Type:* *string

The name of the source (for example, user, optimization-job, or system).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#name BedrockagentcoreConfigurationBundle#name}

---

### BedrockagentcoreConfigurationBundleLineageMetadata <a name="BedrockagentcoreConfigurationBundleLineageMetadata" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

&bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundleLineageMetadata {

}
```


### BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy <a name="BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

&bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy {

}
```


### BedrockagentcoreConfigurationBundleTags <a name="BedrockagentcoreConfigurationBundleTags" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

&bedrockagentcoreconfigurationbundle.BedrockagentcoreConfigurationBundleTags {
	Key: *string,
	Value: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.key">Key</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#key BedrockagentcoreConfigurationBundle#key}. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.value">Value</a></code> | <code>*string</code> | Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#value BedrockagentcoreConfigurationBundle#value}. |

---

##### `Key`<sup>Optional</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.key"></a>

```go
Key *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#key BedrockagentcoreConfigurationBundle#key}.

---

##### `Value`<sup>Optional</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTags.property.value"></a>

```go
Value *string
```

- *Type:* *string

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.100.0/docs/resources/bedrockagentcore_configuration_bundle#value BedrockagentcoreConfigurationBundle#value}.

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockagentcoreConfigurationBundleComponentsMap <a name="BedrockagentcoreConfigurationBundleComponentsMap" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.NewBedrockagentcoreConfigurationBundleComponentsMap(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreConfigurationBundleComponentsMap
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get">Get</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get"></a>

```go
func Get(key *string) BedrockagentcoreConfigurationBundleComponentsOutputReference
```

###### `key`<sup>Required</sup> <a name="key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.get.parameter.key"></a>

- *Type:* *string

the key of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsMap.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreConfigurationBundleComponentsOutputReference <a name="BedrockagentcoreConfigurationBundleComponentsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.NewBedrockagentcoreConfigurationBundleComponentsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectKey *string) BedrockagentcoreConfigurationBundleComponentsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey">complexObjectKey</a></code> | <code>*string</code> | the key of this item in the map. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectKey`<sup>Required</sup> <a name="complexObjectKey" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.Initializer.parameter.complexObjectKey"></a>

- *Type:* *string

the key of this item in the map.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resetConfiguration">ResetConfiguration</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetConfiguration` <a name="ResetConfiguration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.resetConfiguration"></a>

```go
func ResetConfiguration()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configurationInput">ConfigurationInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration">Configuration</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ConfigurationInput`<sup>Optional</sup> <a name="ConfigurationInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configurationInput"></a>

```go
func ConfigurationInput() *string
```

- *Type:* *string

---

##### `Configuration`<sup>Required</sup> <a name="Configuration" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.configuration"></a>

```go
func Configuration() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleComponentsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreConfigurationBundleCreatedByOutputReference <a name="BedrockagentcoreConfigurationBundleCreatedByOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.NewBedrockagentcoreConfigurationBundleCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreConfigurationBundleCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetArn">ResetArn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetName">ResetName</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetArn` <a name="ResetArn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetArn"></a>

```go
func ResetArn()
```

##### `ResetName` <a name="ResetName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.resetName"></a>

```go
func ResetName()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arnInput">ArnInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.nameInput">NameInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ArnInput`<sup>Optional</sup> <a name="ArnInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arnInput"></a>

```go
func ArnInput() *string
```

- *Type:* *string

---

##### `NameInput`<sup>Optional</sup> <a name="NameInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.nameInput"></a>

```go
func NameInput() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference <a name="BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.NewBedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn">Arn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name">Name</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `Arn`<sup>Required</sup> <a name="Arn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.arn"></a>

```go
func Arn() *string
```

- *Type:* *string

---

##### `Name`<sup>Required</sup> <a name="Name" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.name"></a>

```go
func Name() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy">BedrockagentcoreConfigurationBundleLineageMetadataCreatedBy</a>

---


### BedrockagentcoreConfigurationBundleLineageMetadataOutputReference <a name="BedrockagentcoreConfigurationBundleLineageMetadataOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.NewBedrockagentcoreConfigurationBundleLineageMetadataOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockagentcoreConfigurationBundleLineageMetadataOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName">BranchName</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage">CommitMessage</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy">CreatedBy</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds">ParentVersionIds</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue">InternalValue</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata">BedrockagentcoreConfigurationBundleLineageMetadata</a></code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `BranchName`<sup>Required</sup> <a name="BranchName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.branchName"></a>

```go
func BranchName() *string
```

- *Type:* *string

---

##### `CommitMessage`<sup>Required</sup> <a name="CommitMessage" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.commitMessage"></a>

```go
func CommitMessage() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.createdBy"></a>

```go
func CreatedBy() BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference">BedrockagentcoreConfigurationBundleLineageMetadataCreatedByOutputReference</a>

---

##### `ParentVersionIds`<sup>Required</sup> <a name="ParentVersionIds" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.parentVersionIds"></a>

```go
func ParentVersionIds() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadataOutputReference.property.internalValue"></a>

```go
func InternalValue() BedrockagentcoreConfigurationBundleLineageMetadata
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleLineageMetadata">BedrockagentcoreConfigurationBundleLineageMetadata</a>

---


### BedrockagentcoreConfigurationBundleTagsList <a name="BedrockagentcoreConfigurationBundleTagsList" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.NewBedrockagentcoreConfigurationBundleTagsList(terraformResource IInterpolatingParent, terraformAttribute *string, wrapsSet *bool) BedrockagentcoreConfigurationBundleTagsList
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet">wrapsSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `wrapsSet`<sup>Required</sup> <a name="wrapsSet" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.Initializer.parameter.wrapsSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey">AllWithMapKey</a></code> | Creating an iterator for this complex list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get">Get</a></code> | *No description.* |

---

##### `AllWithMapKey` <a name="AllWithMapKey" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey"></a>

```go
func AllWithMapKey(mapKeyAttributeName *string) DynamicListTerraformIterator
```

Creating an iterator for this complex list.

The list will be converted into a map with the mapKeyAttributeName as the key.

###### `mapKeyAttributeName`<sup>Required</sup> <a name="mapKeyAttributeName" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.allWithMapKey.parameter.mapKeyAttributeName"></a>

- *Type:* *string

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `Get` <a name="Get" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get"></a>

```go
func Get(index *f64) BedrockagentcoreConfigurationBundleTagsOutputReference
```

###### `index`<sup>Required</sup> <a name="index" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.get.parameter.index"></a>

- *Type:* *f64

the index of the item to return.

---


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsList.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockagentcoreConfigurationBundleTagsOutputReference <a name="BedrockagentcoreConfigurationBundleTagsOutputReference" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockagentcoreconfigurationbundle"

bedrockagentcoreconfigurationbundle.NewBedrockagentcoreConfigurationBundleTagsOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string, complexObjectIndex *f64, complexObjectIsFromSet *bool) BedrockagentcoreConfigurationBundleTagsOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex">complexObjectIndex</a></code> | <code>*f64</code> | the index of this item in the list. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet">complexObjectIsFromSet</a></code> | <code>*bool</code> | whether the list is wrapping a set (will add tolist() to be able to access an item via an index). |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

##### `complexObjectIndex`<sup>Required</sup> <a name="complexObjectIndex" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIndex"></a>

- *Type:* *f64

the index of this item in the list.

---

##### `complexObjectIsFromSet`<sup>Required</sup> <a name="complexObjectIsFromSet" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.Initializer.parameter.complexObjectIsFromSet"></a>

- *Type:* *bool

whether the list is wrapping a set (will add tolist() to be able to access an item via an index).

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetKey">ResetKey</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetValue">ResetValue</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetKey` <a name="ResetKey" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetKey"></a>

```go
func ResetKey()
```

##### `ResetValue` <a name="ResetValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.resetValue"></a>

```go
func ResetValue()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.keyInput">KeyInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.valueInput">ValueInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.key">Key</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.value">Value</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `KeyInput`<sup>Optional</sup> <a name="KeyInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.keyInput"></a>

```go
func KeyInput() *string
```

- *Type:* *string

---

##### `ValueInput`<sup>Optional</sup> <a name="ValueInput" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.valueInput"></a>

```go
func ValueInput() *string
```

- *Type:* *string

---

##### `Key`<sup>Required</sup> <a name="Key" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.key"></a>

```go
func Key() *string
```

- *Type:* *string

---

##### `Value`<sup>Required</sup> <a name="Value" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.value"></a>

```go
func Value() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockagentcoreConfigurationBundle.BedrockagentcoreConfigurationBundleTagsOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



