# `bedrockEnforcedGuardrailConfiguration` Submodule <a name="`bedrockEnforcedGuardrailConfiguration` Submodule" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### BedrockEnforcedGuardrailConfiguration <a name="BedrockEnforcedGuardrailConfiguration" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration"></a>

Represents a {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration awscc_bedrock_enforced_guardrail_configuration}.

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

bedrockenforcedguardrailconfiguration.NewBedrockEnforcedGuardrailConfiguration(scope Construct, id *string, config BedrockEnforcedGuardrailConfigurationConfig) BedrockEnforcedGuardrailConfiguration
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope">scope</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Construct</code> | The scope in which to define this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id">id</a></code> | <code>*string</code> | The scoped construct ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.config">config</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig">BedrockEnforcedGuardrailConfigurationConfig</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

##### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.id"></a>

- *Type:* *string

The scoped construct ID.

Must be unique amongst siblings in the same scope

---

##### `config`<sup>Required</sup> <a name="config" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.Initializer.parameter.config"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig">BedrockEnforcedGuardrailConfigurationConfig</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString">ToString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with">With</a></code> | Applies one or more mixins to this construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride">AddOverride</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId">OverrideLogicalId</a></code> | Overrides the auto-generated logical ID with a specific ID. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId">ResetOverrideLogicalId</a></code> | Resets a previously passed logical Id to use the auto-generated logical id again. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform">ToHclTerraform</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata">ToMetadata</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform">ToTerraform</a></code> | Adds this resource to the terraform JSON output. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget">AddMoveTarget</a></code> | Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove">HasResourceMove</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom">ImportFrom</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId">MoveFromId</a></code> | Move the resource corresponding to "id" to this resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo">MoveTo</a></code> | Moves this resource to the target resource given by moveTarget. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId">MoveToId</a></code> | Moves this resource to the resource corresponding to "id". |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement">PutModelEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding">PutSelectiveContentGuarding</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement">ResetModelEnforcement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding">ResetSelectiveContentGuarding</a></code> | *No description.* |

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toString"></a>

```go
func ToString() *string
```

Returns a string representation of this construct.

##### `With` <a name="With" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with"></a>

```go
func With(mixins ...IMixin) IConstruct
```

Applies one or more mixins to this construct.

Mixins are applied in order. The list of constructs is captured at the
start of the call, so constructs added by a mixin will not be visited.
Use multiple `with()` calls if subsequent mixins should apply to added
constructs.

###### `mixins`<sup>Required</sup> <a name="mixins" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.with.parameter.mixins"></a>

- *Type:* ...github.com/aws/constructs-go/constructs/v10.IMixin

The mixins to apply.

---

##### `AddOverride` <a name="AddOverride" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride"></a>

```go
func AddOverride(path *string, value interface{})
```

###### `path`<sup>Required</sup> <a name="path" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.path"></a>

- *Type:* *string

---

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addOverride.parameter.value"></a>

- *Type:* interface{}

---

##### `OverrideLogicalId` <a name="OverrideLogicalId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId"></a>

```go
func OverrideLogicalId(newLogicalId *string)
```

Overrides the auto-generated logical ID with a specific ID.

###### `newLogicalId`<sup>Required</sup> <a name="newLogicalId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.overrideLogicalId.parameter.newLogicalId"></a>

- *Type:* *string

The new logical ID to use for this stack element.

---

##### `ResetOverrideLogicalId` <a name="ResetOverrideLogicalId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetOverrideLogicalId"></a>

```go
func ResetOverrideLogicalId()
```

Resets a previously passed logical Id to use the auto-generated logical id again.

##### `ToHclTerraform` <a name="ToHclTerraform" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toHclTerraform"></a>

```go
func ToHclTerraform() interface{}
```

##### `ToMetadata` <a name="ToMetadata" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toMetadata"></a>

```go
func ToMetadata() interface{}
```

##### `ToTerraform` <a name="ToTerraform" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.toTerraform"></a>

```go
func ToTerraform() interface{}
```

Adds this resource to the terraform JSON output.

##### `AddMoveTarget` <a name="AddMoveTarget" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget"></a>

```go
func AddMoveTarget(moveTarget *string)
```

Adds a user defined moveTarget string to this resource to be later used in .moveTo(moveTarget) to resolve the location of the move.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.addMoveTarget.parameter.moveTarget"></a>

- *Type:* *string

The string move target that will correspond to this resource.

---

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `HasResourceMove` <a name="HasResourceMove" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.hasResourceMove"></a>

```go
func HasResourceMove() interface{}
```

##### `ImportFrom` <a name="ImportFrom" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom"></a>

```go
func ImportFrom(id *string, provider TerraformProvider)
```

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.id"></a>

- *Type:* *string

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.importFrom.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.interpolationForAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `MoveFromId` <a name="MoveFromId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId"></a>

```go
func MoveFromId(id *string)
```

Move the resource corresponding to "id" to this resource.

Note that the resource being moved from must be marked as moved using its instance function.

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveFromId.parameter.id"></a>

- *Type:* *string

Full id of resource being moved from, e.g. "aws_s3_bucket.example".

---

##### `MoveTo` <a name="MoveTo" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo"></a>

```go
func MoveTo(moveTarget *string, index interface{})
```

Moves this resource to the target resource given by moveTarget.

###### `moveTarget`<sup>Required</sup> <a name="moveTarget" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.moveTarget"></a>

- *Type:* *string

The previously set user defined string set by .addMoveTarget() corresponding to the resource to move to.

---

###### `index`<sup>Optional</sup> <a name="index" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveTo.parameter.index"></a>

- *Type:* interface{}

Optional The index corresponding to the key the resource is to appear in the foreach of a resource to move to.

---

##### `MoveToId` <a name="MoveToId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId"></a>

```go
func MoveToId(id *string)
```

Moves this resource to the resource corresponding to "id".

###### `id`<sup>Required</sup> <a name="id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.moveToId.parameter.id"></a>

- *Type:* *string

Full id of resource to move to, e.g. "aws_s3_bucket.example".

---

##### `PutModelEnforcement` <a name="PutModelEnforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement"></a>

```go
func PutModelEnforcement(value BedrockEnforcedGuardrailConfigurationModelEnforcement)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putModelEnforcement.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>

---

##### `PutSelectiveContentGuarding` <a name="PutSelectiveContentGuarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding"></a>

```go
func PutSelectiveContentGuarding(value BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding)
```

###### `value`<sup>Required</sup> <a name="value" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.putSelectiveContentGuarding.parameter.value"></a>

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

---

##### `ResetModelEnforcement` <a name="ResetModelEnforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetModelEnforcement"></a>

```go
func ResetModelEnforcement()
```

##### `ResetSelectiveContentGuarding` <a name="ResetSelectiveContentGuarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.resetSelectiveContentGuarding"></a>

```go
func ResetSelectiveContentGuarding()
```

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct">IsConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement">IsTerraformElement</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource">IsTerraformResource</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport">GenerateConfigForImport</a></code> | Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>". |

---

##### `IsConstruct` <a name="IsConstruct" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

bedrockenforcedguardrailconfiguration.BedrockEnforcedGuardrailConfiguration_IsConstruct(x interface{}) *bool
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

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isConstruct.parameter.x"></a>

- *Type:* interface{}

Any object.

---

##### `IsTerraformElement` <a name="IsTerraformElement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

bedrockenforcedguardrailconfiguration.BedrockEnforcedGuardrailConfiguration_IsTerraformElement(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformElement.parameter.x"></a>

- *Type:* interface{}

---

##### `IsTerraformResource` <a name="IsTerraformResource" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

bedrockenforcedguardrailconfiguration.BedrockEnforcedGuardrailConfiguration_IsTerraformResource(x interface{}) *bool
```

###### `x`<sup>Required</sup> <a name="x" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.isTerraformResource.parameter.x"></a>

- *Type:* interface{}

---

##### `GenerateConfigForImport` <a name="GenerateConfigForImport" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

bedrockenforcedguardrailconfiguration.BedrockEnforcedGuardrailConfiguration_GenerateConfigForImport(scope Construct, importToId *string, importFromId *string, provider TerraformProvider) ImportableResource
```

Generates CDKTN code for importing a BedrockEnforcedGuardrailConfiguration resource upon running "cdktn plan <stack-name>".

###### `scope`<sup>Required</sup> <a name="scope" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.scope"></a>

- *Type:* github.com/aws/constructs-go/constructs/v10.Construct

The scope in which to define this construct.

---

###### `importToId`<sup>Required</sup> <a name="importToId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importToId"></a>

- *Type:* *string

The construct id used in the generated config for the BedrockEnforcedGuardrailConfiguration to import.

---

###### `importFromId`<sup>Required</sup> <a name="importFromId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.importFromId"></a>

- *Type:* *string

The id of the existing BedrockEnforcedGuardrailConfiguration that should be imported.

Refer to the {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#import import section} in the documentation of this resource for the id to use

---

###### `provider`<sup>Optional</sup> <a name="provider" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.generateConfigForImport.parameter.provider"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

? Optional instance of the provider where the BedrockEnforcedGuardrailConfiguration to import is found.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node">Node</a></code> | <code>github.com/aws/constructs-go/constructs/v10.Node</code> | The tree node. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack">CdktfStack</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId">FriendlyUniqueId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments">TerraformMetaArguments</a></code> | <code>*map[string]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType">TerraformResourceType</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata">TerraformGeneratorMetadata</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn">DependsOn</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId">ConfigId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.createdAt">CreatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.createdBy">CreatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn">GuardrailArn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId">GuardrailId</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.id">Id</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement">ModelEnforcement</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner">Owner</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding">SelectiveContentGuarding</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.updatedAt">UpdatedAt</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.updatedBy">UpdatedBy</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailIdentifierInput">GuardrailIdentifierInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput">GuardrailVersionInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput">ModelEnforcementInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput">SelectiveContentGuardingInput</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion">GuardrailVersion</a></code> | <code>*string</code> | *No description.* |

---

##### `Node`<sup>Required</sup> <a name="Node" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.node"></a>

```go
func Node() Node
```

- *Type:* github.com/aws/constructs-go/constructs/v10.Node

The tree node.

---

##### `CdktfStack`<sup>Required</sup> <a name="CdktfStack" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.cdktfStack"></a>

```go
func CdktfStack() TerraformStack
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformStack

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `FriendlyUniqueId`<sup>Required</sup> <a name="FriendlyUniqueId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.friendlyUniqueId"></a>

```go
func FriendlyUniqueId() *string
```

- *Type:* *string

---

##### `TerraformMetaArguments`<sup>Required</sup> <a name="TerraformMetaArguments" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformMetaArguments"></a>

```go
func TerraformMetaArguments() *map[string]interface{}
```

- *Type:* *map[string]interface{}

---

##### `TerraformResourceType`<sup>Required</sup> <a name="TerraformResourceType" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformResourceType"></a>

```go
func TerraformResourceType() *string
```

- *Type:* *string

---

##### `TerraformGeneratorMetadata`<sup>Optional</sup> <a name="TerraformGeneratorMetadata" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.terraformGeneratorMetadata"></a>

```go
func TerraformGeneratorMetadata() TerraformProviderGeneratorMetadata
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProviderGeneratorMetadata

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.connection"></a>

```go
func Connection() interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.count"></a>

```go
func Count() interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.dependsOn"></a>

```go
func DependsOn() *[]*string
```

- *Type:* *[]*string

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.forEach"></a>

```go
func ForEach() ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.lifecycle"></a>

```go
func Lifecycle() TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provider"></a>

```go
func Provider() TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.provisioners"></a>

```go
func Provisioners() *[]interface{}
```

- *Type:* *[]interface{}

---

##### `ConfigId`<sup>Required</sup> <a name="ConfigId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.configId"></a>

```go
func ConfigId() *string
```

- *Type:* *string

---

##### `CreatedAt`<sup>Required</sup> <a name="CreatedAt" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.createdAt"></a>

```go
func CreatedAt() *string
```

- *Type:* *string

---

##### `CreatedBy`<sup>Required</sup> <a name="CreatedBy" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.createdBy"></a>

```go
func CreatedBy() *string
```

- *Type:* *string

---

##### `GuardrailArn`<sup>Required</sup> <a name="GuardrailArn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailArn"></a>

```go
func GuardrailArn() *string
```

- *Type:* *string

---

##### `GuardrailId`<sup>Required</sup> <a name="GuardrailId" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailId"></a>

```go
func GuardrailId() *string
```

- *Type:* *string

---

##### `Id`<sup>Required</sup> <a name="Id" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.id"></a>

```go
func Id() *string
```

- *Type:* *string

---

##### `ModelEnforcement`<sup>Required</sup> <a name="ModelEnforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcement"></a>

```go
func ModelEnforcement() BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference">BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference</a>

---

##### `Owner`<sup>Required</sup> <a name="Owner" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.owner"></a>

```go
func Owner() *string
```

- *Type:* *string

---

##### `SelectiveContentGuarding`<sup>Required</sup> <a name="SelectiveContentGuarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuarding"></a>

```go
func SelectiveContentGuarding() BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference">BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference</a>

---

##### `UpdatedAt`<sup>Required</sup> <a name="UpdatedAt" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.updatedAt"></a>

```go
func UpdatedAt() *string
```

- *Type:* *string

---

##### `UpdatedBy`<sup>Required</sup> <a name="UpdatedBy" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.updatedBy"></a>

```go
func UpdatedBy() *string
```

- *Type:* *string

---

##### `GuardrailIdentifierInput`<sup>Optional</sup> <a name="GuardrailIdentifierInput" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailIdentifierInput"></a>

```go
func GuardrailIdentifierInput() *string
```

- *Type:* *string

---

##### `GuardrailVersionInput`<sup>Optional</sup> <a name="GuardrailVersionInput" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersionInput"></a>

```go
func GuardrailVersionInput() *string
```

- *Type:* *string

---

##### `ModelEnforcementInput`<sup>Optional</sup> <a name="ModelEnforcementInput" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.modelEnforcementInput"></a>

```go
func ModelEnforcementInput() interface{}
```

- *Type:* interface{}

---

##### `SelectiveContentGuardingInput`<sup>Optional</sup> <a name="SelectiveContentGuardingInput" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.selectiveContentGuardingInput"></a>

```go
func SelectiveContentGuardingInput() interface{}
```

- *Type:* interface{}

---

##### `GuardrailIdentifier`<sup>Required</sup> <a name="GuardrailIdentifier" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailIdentifier"></a>

```go
func GuardrailIdentifier() *string
```

- *Type:* *string

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.guardrailVersion"></a>

```go
func GuardrailVersion() *string
```

- *Type:* *string

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType">TfResourceType</a></code> | <code>*string</code> | *No description.* |

---

##### `TfResourceType`<sup>Required</sup> <a name="TfResourceType" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfiguration.property.tfResourceType"></a>

```go
func TfResourceType() *string
```

- *Type:* *string

---

## Structs <a name="Structs" id="Structs"></a>

### BedrockEnforcedGuardrailConfigurationConfig <a name="BedrockEnforcedGuardrailConfigurationConfig" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

&bedrockenforcedguardrailconfiguration.BedrockEnforcedGuardrailConfigurationConfig {
	Connection: interface{},
	Count: interface{},
	DependsOn: *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable,
	ForEach: github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator,
	Lifecycle: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle,
	Provider: github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider,
	Provisioners: *[]interface{},
	GuardrailIdentifier: *string,
	GuardrailVersion: *string,
	ModelEnforcement: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement,
	SelectiveContentGuarding: github.com/cdktn-io/cdktn-provider-awscc-go/awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection">Connection</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count">Count</a></code> | <code>interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn">DependsOn</a></code> | <code>*[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach">ForEach</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle">Lifecycle</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider">Provider</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners">Provisioners</a></code> | <code>*[]interface{}</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailIdentifier">GuardrailIdentifier</a></code> | <code>*string</code> | Identifier for the guardrail, could be the ID or the ARN. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion">GuardrailVersion</a></code> | <code>*string</code> | Numerical guardrail version (not DRAFT). |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement">ModelEnforcement</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a></code> | Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding">SelectiveContentGuarding</a></code> | <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a></code> | Selective content guarding controls for enforced guardrails. |

---

##### `Connection`<sup>Optional</sup> <a name="Connection" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.connection"></a>

```go
Connection interface{}
```

- *Type:* interface{}

---

##### `Count`<sup>Optional</sup> <a name="Count" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.count"></a>

```go
Count interface{}
```

- *Type:* interface{}

---

##### `DependsOn`<sup>Optional</sup> <a name="DependsOn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.dependsOn"></a>

```go
DependsOn *[]ITerraformDependable
```

- *Type:* *[]github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformDependable

---

##### `ForEach`<sup>Optional</sup> <a name="ForEach" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.forEach"></a>

```go
ForEach ITerraformIterator
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.ITerraformIterator

---

##### `Lifecycle`<sup>Optional</sup> <a name="Lifecycle" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.lifecycle"></a>

```go
Lifecycle TerraformResourceLifecycle
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformResourceLifecycle

---

##### `Provider`<sup>Optional</sup> <a name="Provider" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provider"></a>

```go
Provider TerraformProvider
```

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.TerraformProvider

---

##### `Provisioners`<sup>Optional</sup> <a name="Provisioners" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.provisioners"></a>

```go
Provisioners *[]interface{}
```

- *Type:* *[]interface{}

---

##### `GuardrailIdentifier`<sup>Required</sup> <a name="GuardrailIdentifier" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailIdentifier"></a>

```go
GuardrailIdentifier *string
```

- *Type:* *string

Identifier for the guardrail, could be the ID or the ARN.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_identifier BedrockEnforcedGuardrailConfiguration#guardrail_identifier}

---

##### `GuardrailVersion`<sup>Required</sup> <a name="GuardrailVersion" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.guardrailVersion"></a>

```go
GuardrailVersion *string
```

- *Type:* *string

Numerical guardrail version (not DRAFT).

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#guardrail_version BedrockEnforcedGuardrailConfiguration#guardrail_version}

---

##### `ModelEnforcement`<sup>Optional</sup> <a name="ModelEnforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.modelEnforcement"></a>

```go
ModelEnforcement BedrockEnforcedGuardrailConfigurationModelEnforcement
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement">BedrockEnforcedGuardrailConfigurationModelEnforcement</a>

Model-specific information for the enforced guardrail configuration. If not present, the configuration is enforced on all models.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#model_enforcement BedrockEnforcedGuardrailConfiguration#model_enforcement}

---

##### `SelectiveContentGuarding`<sup>Optional</sup> <a name="SelectiveContentGuarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationConfig.property.selectiveContentGuarding"></a>

```go
SelectiveContentGuarding BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding
```

- *Type:* <a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding">BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding</a>

Selective content guarding controls for enforced guardrails.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#selective_content_guarding BedrockEnforcedGuardrailConfiguration#selective_content_guarding}

---

### BedrockEnforcedGuardrailConfigurationModelEnforcement <a name="BedrockEnforcedGuardrailConfigurationModelEnforcement" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

&bedrockenforcedguardrailconfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement {
	ExcludedModels: *[]*string,
	IncludedModels: *[]*string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels">ExcludedModels</a></code> | <code>*[]*string</code> | Models to exclude from enforcement. If a model is in both lists, it is excluded. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels">IncludedModels</a></code> | <code>*[]*string</code> | Models to enforce the guardrail on. |

---

##### `ExcludedModels`<sup>Optional</sup> <a name="ExcludedModels" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.excludedModels"></a>

```go
ExcludedModels *[]*string
```

- *Type:* *[]*string

Models to exclude from enforcement. If a model is in both lists, it is excluded.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#excluded_models BedrockEnforcedGuardrailConfiguration#excluded_models}

---

##### `IncludedModels`<sup>Optional</sup> <a name="IncludedModels" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcement.property.includedModels"></a>

```go
IncludedModels *[]*string
```

- *Type:* *[]*string

Models to enforce the guardrail on.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#included_models BedrockEnforcedGuardrailConfiguration#included_models}

---

### BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding"></a>

#### Initializer <a name="Initializer" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

&bedrockenforcedguardrailconfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding {
	Messages: *string,
	SystemAttribute: *string,
}
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages">Messages</a></code> | <code>*string</code> | Selective guarding mode for user messages. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute">SystemAttribute</a></code> | <code>*string</code> | Selective guarding mode for system prompts. |

---

##### `Messages`<sup>Optional</sup> <a name="Messages" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.messages"></a>

```go
Messages *string
```

- *Type:* *string

Selective guarding mode for user messages.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#messages BedrockEnforcedGuardrailConfiguration#messages}

---

##### `SystemAttribute`<sup>Optional</sup> <a name="SystemAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuarding.property.systemAttribute"></a>

```go
SystemAttribute *string
```

- *Type:* *string

Selective guarding mode for system prompts.

Docs at Terraform Registry: {@link https://registry.terraform.io/providers/hashicorp/awscc/1.97.0/docs/resources/bedrock_enforced_guardrail_configuration#system BedrockEnforcedGuardrailConfiguration#system}

---

## Classes <a name="Classes" id="Classes"></a>

### BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference <a name="BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

bedrockenforcedguardrailconfiguration.NewBedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resetExcludedModels">ResetExcludedModels</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resetIncludedModels">ResetIncludedModels</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetExcludedModels` <a name="ResetExcludedModels" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resetExcludedModels"></a>

```go
func ResetExcludedModels()
```

##### `ResetIncludedModels` <a name="ResetIncludedModels" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.resetIncludedModels"></a>

```go
func ResetIncludedModels()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput">ExcludedModelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput">IncludedModelsInput</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels">ExcludedModels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels">IncludedModels</a></code> | <code>*[]*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `ExcludedModelsInput`<sup>Optional</sup> <a name="ExcludedModelsInput" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModelsInput"></a>

```go
func ExcludedModelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedModelsInput`<sup>Optional</sup> <a name="IncludedModelsInput" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModelsInput"></a>

```go
func IncludedModelsInput() *[]*string
```

- *Type:* *[]*string

---

##### `ExcludedModels`<sup>Required</sup> <a name="ExcludedModels" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.excludedModels"></a>

```go
func ExcludedModels() *[]*string
```

- *Type:* *[]*string

---

##### `IncludedModels`<sup>Required</sup> <a name="IncludedModels" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.includedModels"></a>

```go
func IncludedModels() *[]*string
```

- *Type:* *[]*string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationModelEnforcementOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---


### BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference <a name="BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference"></a>

#### Initializers <a name="Initializers" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer"></a>

```go
import "github.com/cdktn-io/cdktn-provider-awscc-go/awscc/bedrockenforcedguardrailconfiguration"

bedrockenforcedguardrailconfiguration.NewBedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference(terraformResource IInterpolatingParent, terraformAttribute *string) BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource">terraformResource</a></code> | <code>github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent</code> | The parent resource. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute">terraformAttribute</a></code> | <code>*string</code> | The attribute on the parent resource this class is referencing. |

---

##### `terraformResource`<sup>Required</sup> <a name="terraformResource" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformResource"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IInterpolatingParent

The parent resource.

---

##### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.Initializer.parameter.terraformAttribute"></a>

- *Type:* *string

The attribute on the parent resource this class is referencing.

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn">ComputeFqn</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute">GetAnyMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute">GetBooleanAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute">GetBooleanMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute">GetListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute">GetNumberAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute">GetNumberListAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute">GetNumberMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute">GetStringAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute">GetStringMapAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute">InterpolationForAttribute</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve">Resolve</a></code> | Produce the Token's value at resolution time. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString">ToString</a></code> | Return a string representation of this resolvable object. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages">ResetMessages</a></code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute">ResetSystemAttribute</a></code> | *No description.* |

---

##### `ComputeFqn` <a name="ComputeFqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.computeFqn"></a>

```go
func ComputeFqn() *string
```

##### `GetAnyMapAttribute` <a name="GetAnyMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute"></a>

```go
func GetAnyMapAttribute(terraformAttribute *string) *map[string]interface{}
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getAnyMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanAttribute` <a name="GetBooleanAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute"></a>

```go
func GetBooleanAttribute(terraformAttribute *string) IResolvable
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetBooleanMapAttribute` <a name="GetBooleanMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute"></a>

```go
func GetBooleanMapAttribute(terraformAttribute *string) *map[string]*bool
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getBooleanMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetListAttribute` <a name="GetListAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute"></a>

```go
func GetListAttribute(terraformAttribute *string) *[]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberAttribute` <a name="GetNumberAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute"></a>

```go
func GetNumberAttribute(terraformAttribute *string) *f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberListAttribute` <a name="GetNumberListAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute"></a>

```go
func GetNumberListAttribute(terraformAttribute *string) *[]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberListAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetNumberMapAttribute` <a name="GetNumberMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute"></a>

```go
func GetNumberMapAttribute(terraformAttribute *string) *map[string]*f64
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getNumberMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringAttribute` <a name="GetStringAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute"></a>

```go
func GetStringAttribute(terraformAttribute *string) *string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `GetStringMapAttribute` <a name="GetStringMapAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute"></a>

```go
func GetStringMapAttribute(terraformAttribute *string) *map[string]*string
```

###### `terraformAttribute`<sup>Required</sup> <a name="terraformAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.getStringMapAttribute.parameter.terraformAttribute"></a>

- *Type:* *string

---

##### `InterpolationForAttribute` <a name="InterpolationForAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute"></a>

```go
func InterpolationForAttribute(property *string) IResolvable
```

###### `property`<sup>Required</sup> <a name="property" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.interpolationForAttribute.parameter.property"></a>

- *Type:* *string

---

##### `Resolve` <a name="Resolve" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve"></a>

```go
func Resolve(_context IResolveContext) interface{}
```

Produce the Token's value at resolution time.

###### `_context`<sup>Required</sup> <a name="_context" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resolve.parameter._context"></a>

- *Type:* github.com/open-constructs/cdk-terrain-go/cdktn.IResolveContext

---

##### `ToString` <a name="ToString" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.toString"></a>

```go
func ToString() *string
```

Return a string representation of this resolvable object.

Returns a reversible string representation.

##### `ResetMessages` <a name="ResetMessages" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetMessages"></a>

```go
func ResetMessages()
```

##### `ResetSystemAttribute` <a name="ResetSystemAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.resetSystemAttribute"></a>

```go
func ResetSystemAttribute()
```


#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack">CreationStack</a></code> | <code>*[]*string</code> | The creation stack of this resolvable which will be appended to errors thrown during resolution. |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn">Fqn</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput">MessagesInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput">SystemAttributeInput</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages">Messages</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute">SystemAttribute</a></code> | <code>*string</code> | *No description.* |
| <code><a href="#@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue">InternalValue</a></code> | <code>interface{}</code> | *No description.* |

---

##### `CreationStack`<sup>Required</sup> <a name="CreationStack" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.creationStack"></a>

```go
func CreationStack() *[]*string
```

- *Type:* *[]*string

The creation stack of this resolvable which will be appended to errors thrown during resolution.

If this returns an empty array the stack will not be attached.

---

##### `Fqn`<sup>Required</sup> <a name="Fqn" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.fqn"></a>

```go
func Fqn() *string
```

- *Type:* *string

---

##### `MessagesInput`<sup>Optional</sup> <a name="MessagesInput" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messagesInput"></a>

```go
func MessagesInput() *string
```

- *Type:* *string

---

##### `SystemAttributeInput`<sup>Optional</sup> <a name="SystemAttributeInput" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttributeInput"></a>

```go
func SystemAttributeInput() *string
```

- *Type:* *string

---

##### `Messages`<sup>Required</sup> <a name="Messages" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.messages"></a>

```go
func Messages() *string
```

- *Type:* *string

---

##### `SystemAttribute`<sup>Required</sup> <a name="SystemAttribute" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.systemAttribute"></a>

```go
func SystemAttribute() *string
```

- *Type:* *string

---

##### `InternalValue`<sup>Optional</sup> <a name="InternalValue" id="@cdktn/provider-awscc.bedrockEnforcedGuardrailConfiguration.BedrockEnforcedGuardrailConfigurationSelectiveContentGuardingOutputReference.property.internalValue"></a>

```go
func InternalValue() interface{}
```

- *Type:* interface{}

---



